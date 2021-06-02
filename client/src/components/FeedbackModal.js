import React, { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import Giphy from 'react-hooks-giphy'

const FeedbackModal = ({ feedbackState, setFeedbackState, feedbackArray }) => {
  const [open, setOpen] = useState(true)
  console.log(feedbackState, 'feedbackstate')

  return (
    <>
      {feedbackState && (
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
        >
          <Modal.Content image>
            <Giphy tag={feedbackState} />

            {feedbackArray && (
              <Modal.Description>
                {feedbackArray.map((feedback) => (
                  <p key={feedback.questionId}>{feedback.feedback}</p>
                ))}
              </Modal.Description>
            )}
          </Modal.Content>
          <Modal.Actions>
            <Button
              primary
              onClick={
                feedbackState === 'Try again'
                  ? () => setFeedbackState('')
                  : () => console.log('restart')
              }
            >
              {feedbackState === 'Try again' ? 'Try again' : 'Restart'}
            </Button>
          </Modal.Actions>
        </Modal>
      )}
    </>
  )
}

export default FeedbackModal
