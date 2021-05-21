import React, { useState } from 'react'
import { Grid, Form, Button, Divider } from 'semantic-ui-react'

export default function PostForm({ submit, answer, setAnswer, questions }) {
  return (
    <Form onSubmit={submit} size='large'>
      {questions.map((q) => (
        <Grid.Row key={q._id}>
          <Form.Input
            fluid
            label={q.question}
            onChange={(e) => setAnswer({ title: e.target.value })}
            placeholder='First name'
            widths='equal'
          />
          <Form.Button />
        </Grid.Row>
      ))}
      <Divider hidden />
    </Form>
  )
}
