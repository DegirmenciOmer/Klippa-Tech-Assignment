import { React, useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import axios from 'axios'
import { Grid, Form, Button, Divider } from 'semantic-ui-react'

const Home = () => {
  const [questions, setQuestions] = useState([])

  const [replyArray, setReplyArray] = useState([])

  useEffect(() => {
    setReplyArray([])
    const fetchQs = async () => {
      try {
        const {
          data: { questions: fetchedQs, _id },
        } = await axios.get('http://localhost:5000/')
        setQuestions(fetchedQs)
        console.log(fetchedQs, _id)
      } catch (error) {
        console.error(error)
      }
    }
    fetchQs()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      console.log(replyArray)
      return await axios.post('http://localhost:5000/quest/calculation', {
        questions: replyArray,
        id: '60a97a4dfaccc20e9888943e',
      })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Grid>
      <Grid.Row>
        <h1>New game</h1>
      </Grid.Row>
      <Grid.Row>
        <Form onSubmit={handleSubmit} size='large'>
          {questions.map((q) => (
            <Grid.Row key={q.id}>
              <Grid.Column className='fields'>
                <Form.Field label={q.question} />
              </Grid.Column>
              <Grid.Column>
                <Form.Input
                  onChange={(e) => {
                    const val = parseInt(e.target.value)

                    setReplyArray((prev) => [
                      ...prev,
                      {
                        question: q.question,
                        answer: val,
                        id: q.id,
                      },
                    ])
                  }}
                  placeholder='Your Answer'
                />
              </Grid.Column>
            </Grid.Row>
          ))}
          <Button>SubmitPost</Button>
        </Form>
      </Grid.Row>
    </Grid>
  )
}

export default Home
