import { React, useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import axios from 'axios'
import { Grid, Form, Button, Divider } from 'semantic-ui-react'

const Home = () => {
  const [questions, setQuestions] = useState([])

  const [reply, setReply] = useState({})
  const [repArray, setRepArray] = useState([])

  useEffect(() => {
    const fetchQs = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/')
        setQuestions(data)
      } catch (error) {
        console.error(error)
      }
    }
    fetchQs()
  }, [])

  const submit = (e) => {
    e.preventDefault()
    console.log(reply.newReply.answer)
    setRepArray((prev) => [...prev, reply])
    console.log(repArray)
  }

  return (
    <Grid>
      <Grid.Row>
        <h1>New game</h1>
      </Grid.Row>
      <Grid.Row>
        {questions.map((q) => (
          <Form key={q.id} onSubmit={submit} size='large'>
            <Grid.Row>
              <Grid.Column className='fields'>
                <Form.Field label={q.question} />
              </Grid.Column>
              <Grid.Column>
                <Form.Input
                  onChange={(e) => {
                    const val = parseInt(e.target.value)
                    setReply({
                      newReply: {
                        question: q.question,
                        answer: val,
                        id: q.id,
                      },
                    })
                  }}
                  placeholder='Your Answer'
                />
                <Form.Button>Submit</Form.Button>
              </Grid.Column>
            </Grid.Row>
          </Form>
        ))}
        <Button>Submit</Button>
      </Grid.Row>
    </Grid>
  )
}

export default Home
