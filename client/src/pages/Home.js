import { React, useState, useEffect } from 'react'
import axios from 'axios'
import {
  Grid,
  Form,
  Button,
  Header,
  Segment,
  Dimmer,
  Loader,
} from 'semantic-ui-react'

const Home = () => {
  const [questions, setQuestions] = useState([])
  const [replyId, setReplyId] = useState('')

  useEffect(() => {
    setQuestions([])
    const fetchQs = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/')

        setQuestions(
          data.questions.map((q) => {
            return {
              question: q.question,
              answer: '',
              id: q.id,
            }
          })
        )
        setReplyId(data._id)
      } catch (error) {
        console.error(error)
      }
    }
    fetchQs()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(questions, 'questions')
      return await axios.post('http://localhost:5000/quest/calculation', {
        questions,
        replyId,
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Grid className='ui centered home'>
      <Grid.Row>
        <Header as='h1' content='New Game' textAlign='center' />
      </Grid.Row>
      <Form onSubmit={handleSubmit} className='ui centered' size='large'>
        {questions.length === 0 ? (
          <Segment>
            <Dimmer active inverted>
              <Loader inverted content='Loading' />
            </Dimmer>
          </Segment>
        ) : (
          questions.map((q) => (
            <Form.Group width='large' key={q.id}>
              <Grid.Column verticalAlign='middle' floated='left'>
                <label>{q.question}</label>
              </Grid.Column>

              <Grid.Column>
                <Form.Input
                  type='number'
                  required
                  value={q.answer}
                  onChange={(e) => {
                    const val = parseInt(e.target.value)

                    const newQuestions = questions.map((question) => {
                      if (question.id === q.id) {
                        return {
                          ...question,
                          answer: val,
                        }
                      } else {
                        return question
                      }
                    })
                    setQuestions(newQuestions)
                  }}
                  placeholder='Your Answer'
                />
              </Grid.Column>
            </Form.Group>
          ))
        )}
        <Button fluid floated='right'>
          Submit Answers
        </Button>
      </Form>
    </Grid>
  )
}

export default Home
