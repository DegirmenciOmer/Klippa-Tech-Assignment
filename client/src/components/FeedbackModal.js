import React, { useState } from 'react'
import { Button, Modal } from 'semantic-ui-react'
import Giphy from 'react-hooks-giphy'

const FeedbackModal = ({
  feedbackState,
  setFeedbackState,
  feedbacksArray,
  fetchQuestions,
}) => {
  const TRY_AGAIN = 'Try again!'
  const [open, setOpen] = useState(true)

  const handleFeedbackButton = () => {
    if (feedbackState === TRY_AGAIN) {
      setFeedbackState('')
    } else {
      setFeedbackState('')
      fetchQuestions()
    }
  }

  return (
    <>
      {feedbackState && (
        <Modal
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          open={open}
        >
          <Modal.Header className='ui aligned center'>
            {feedbackState}
          </Modal.Header>
          <Modal.Content>
            <Giphy className='giphy' tag={feedbackState} />
          </Modal.Content>
          {feedbacksArray && (
            <Modal.Description dir='tb'>
              {feedbacksArray.map((feedback) => (
                <p className='feedback-items' key={feedback.questionId}>
                  {feedback.feedbacks}
                </p>
              ))}
            </Modal.Description>
          )}
          <Modal.Actions className='ui centered '>
            <Button
              className=' centered '
              primary
              onClick={handleFeedbackButton}
            >
              {feedbackState === TRY_AGAIN ? TRY_AGAIN : 'Restart'}
            </Button>
          </Modal.Actions>
        </Modal>
      )}
    </>
  )
}

export default FeedbackModal
