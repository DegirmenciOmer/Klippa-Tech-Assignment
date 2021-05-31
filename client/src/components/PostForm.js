import { React, useState, useEffect } from 'react'
import axios from 'axios'

import { Grid, Form, Button } from 'semantic-ui-react'
import Loading from '../components/Loading'

const PostForm = () => {
  const [questions, setQuestions] = useState([])
  const [replyId, setReplyId] = useState('')
  const [message, setMessage] = useState('')

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
      const { data } = await axios.post(
        'http://localhost:5000/quest/calculation',
        {
          questions,
          replyId,
        }
      )
      console.log(data.message)
      if (data.message === 'Congratulations') {
        console.log('start new game')
      } else {
        console.log('try again')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Form onSubmit={handleSubmit} className='ui centered' size='large'>
        {questions.length === 0 ? (
          <Loading />
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
    </>
  )
}

export default PostForm
