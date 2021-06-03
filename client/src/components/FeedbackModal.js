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
          <Modal.Header>{feedbackState}</Modal.Header>
          <Modal.Content image>
            <Giphy className='giphy' tag={feedbackState} />

            {feedbacksArray && (
              <Modal.Description>
                {feedbacksArray.map((feedback) => (
                  <p className='feedback-items' key={feedback.questionId}>
                    {feedback.feedbacks}
                  </p>
                ))}
              </Modal.Description>
            )}
          </Modal.Content>
          <Modal.Actions>
            <Button primary onClick={handleFeedbackButton}>
              {feedbackState === TRY_AGAIN ? TRY_AGAIN : 'Restart'}
            </Button>
          </Modal.Actions>
        </Modal>
      )}
    </>
  )
}

export default FeedbackModal
