import React from 'react'
import { Grid, Header } from 'semantic-ui-react'
import PostForm from '../components/PostForm'

const Home = () => {
  return (
    <Grid className='ui centered home'>
      <Grid.Row>
        <Header as='h1' content='New Game' textAlign='center' />
      </Grid.Row>
      <Grid.Row>
        <PostForm />
      </Grid.Row>
    </Grid>
  )
}

export default Home
