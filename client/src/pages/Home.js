import { React, useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import axios from 'axios'
import { Grid, Form, Button, Divider } from 'semantic-ui-react'

const Home = () => {
  const [questions, setQuestions] = useState([])
  const [sessionId, setSessionId] = useState(0)
  const [q0, setQ0] = useState({})
  const [q1, setQ1] = useState({})
  const [q2, setQ2] = useState({})
  const [q3, setQ3] = useState({})
  const [q4, setQ4] = useState({})

  const [replyArray, setReplyArray] = useState([])

  useEffect(() => {
    setReplyArray([])
    const fetchQs = async () => {
      try {
        const {
          data: { questions: fetchedQs, _id },
        } = await axios.get('http://localhost:5000/')
        setQuestions(fetchedQs)
        setSessionId(_id)
        console.log(questions, _id)
      } catch (error) {
        console.error(error)
      }
    }
    fetchQs()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newReplyArr = [q0, q1, q2, q3, q4]

      return await axios.post('http://localhost:5000/quest/calculation', {
        questions: newReplyArr,
        id: sessionId,
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
        {questions.length > 0 && (
          <Form onSubmit={handleSubmit} size='large'>
            <Grid.Row>
              <Grid.Column className='fields'>
                <Form.Field label={questions[0].question} />
              </Grid.Column>
              <Grid.Column>
                <Form.Input placeholder='Your Answer' />
              </Grid.Column>
              <Button
                onClick={(e) => {
                  const val = parseInt(e.target.value)
                  setQ0({
                    question: questions[0].question,
                    answer: val,
                    id: questions[0].id,
                  })
                }}
              >
                submitAnswer
              </Button>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column className='fields'>
                <Form.Field label={questions[1].question} />
              </Grid.Column>
              <Grid.Column>
                <Form.Input
                  onChange={(e) => {
                    const val = parseInt(e.target.value)
                    setQ1({
                      question: questions[1].question,
                      answer: val,
                      id: questions[1].id,
                    })
                  }}
                  placeholder='Your Answer'
                />
              </Grid.Column>
              <Button
                onClick={(e) => {
                  const val = parseInt(e.target.value)
                  setQ1({
                    question: questions[1].question,
                    answer: val,
                    id: questions[1].id,
                  })
                }}
              >
                submitAnswer
              </Button>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column className='fields'>
                <Form.Field label={questions[2].question} />
              </Grid.Column>
              <Grid.Column>
                <Form.Input placeholder='Your Answer' />
              </Grid.Column>
              <Button
                onClick={(e) => {
                  const val = parseInt(e.target.value)
                  setQ2({
                    question: questions[2].question,
                    answer: val,
                    id: questions[2].id,
                  })
                }}
              >
                submitAnswer
              </Button>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column className='fields'>
                <Form.Field label={questions[3].question} />
              </Grid.Column>
              <Grid.Column>
                <Form.Input placeholder='Your Answer' />
              </Grid.Column>
              <Button
                onClick={(e) => {
                  const val = parseInt(e.target.value)
                  setQ3({
                    question: questions[3].question,
                    answer: val,
                    id: questions[3].id,
                  })
                }}
              >
                submitAnswer
              </Button>
            </Grid.Row>

            <Grid.Row>
              <Grid.Column className='fields'>
                <Form.Field label={questions[4].question} />
              </Grid.Column>
              <Grid.Column>
                <Form.Input placeholder='Your Answer' />
              </Grid.Column>
              <Button
                onClick={(e) => {
                  const val = parseInt(e.target.value)
                  setQ4({
                    question: questions[4].question,
                    answer: val,
                    id: questions[4].id,
                  })
                }}
              >
                submitAnswer
              </Button>
            </Grid.Row>

            <Button>SubmitPost</Button>
          </Form>
        )}
      </Grid.Row>
    </Grid>
  )
}

export default Home
