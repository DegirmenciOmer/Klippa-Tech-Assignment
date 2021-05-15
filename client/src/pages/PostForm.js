import React, { useState } from 'react'
import { Grid, Form, Button, Divider } from 'semantic-ui-react'

export default function PostForm({ submit, answer, setAnswer, questions }) {
  return (
    <Form onSubmit={submit} size='large'>
      {questions.map((q) => (
        <Form.Group key={q._id} widths='equal'>
          <Grid.Column className='fields'>
            <Form.Field label={q.question} />
          </Grid.Column>
          <Grid.Column className='fields'>
            <Form.Field
              control='input'
              name='answer'
              placeholder='Your answer'
              onChange={(e) => setAnswer({ title: e.target.value })}
            />
          </Grid.Column>
          <Grid.Column className='fields'>
            <Button type='submit'>Submit</Button>
          </Grid.Column>
        </Form.Group>
      ))}
      <Divider hidden />
    </Form>
  )
}
