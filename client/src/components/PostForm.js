import { React, useState, useEffect } from 'react'
import axios from 'axios'

import { Grid, Form, Button } from 'semantic-ui-react'
import Loading from '../components/Loading'

const PostForm = () => {
  const [questions, setQuestions] = useState([])
  const [replyId, setReplyId] = useState('')
  const [success, setSuccess] = useState(false)
  const [fail, setFail] = useState(false)
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
      const { data } = await axios.post(
        'http://localhost:5000/quest/calculation',
        {
          questions,
          replyId,
        }
      )
      console.log(data.message)
      if (data.message === 'Congratulations') {
        setSuccess(true)
      } else if (data.message === 'Try again') {
        setSuccess(false)
        setFail(true)
        console.log({ fail })
      } else {
      }
    } catch (error) {
      console.error(error)
    }
  }
  console.log({ success })
  //history.push('http://localhost:3000/success')
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
