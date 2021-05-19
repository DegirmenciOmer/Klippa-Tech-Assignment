import { React, useState, useEffect } from 'react'
//import { Link } from 'react-router-dom'
import axios from 'axios'
import { Grid, Form, Button, Divider } from 'semantic-ui-react'
//import PostForm from './PostForm'

const Home = () => {
  const [questions, setQuestions] = useState([])
  const [reply, setReply] = useState({})

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
    console.log(reply.reply)
  }
  return (
    <Grid>
      <Grid.Row>
        <h1>New game</h1>
      </Grid.Row>
      <Grid.Row>
        {questions.map((q) => (
          <Form key={q._id} onSubmit={submit} size='large'>
            <Form.Group widths='equal'>
              <Grid.Column className='fields'>
                <Form.Field label={q.question} />
              </Grid.Column>
              <Grid.Column className='fields'>
                <Form.Field
                  control='input'
                  name='reply'
                  placeholder='Your reply'
                  onChange={(e) =>
                    setReply({ reply: e.target.value, question: q.question })
                  }
                />
              </Grid.Column>
              <Grid.Column className='fields'>
                <Button type='submit'>Submit</Button>
              </Grid.Column>
            </Form.Group>
            <Divider hidden />
          </Form>
        ))}
      </Grid.Row>
    </Grid>
  )
}

export default Home
