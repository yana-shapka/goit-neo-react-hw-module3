import {useEffect, useState} from 'react';
import Description from './components/Description/Description';
import Options from '../src/components/Options/Options';
import Feedback from '../src/components/Feedback/Feedback';
import Notification from '../src/components/Notification/Notification';

function App() {
  const descriptionData = {
    title: 'Sip Happens Café',
    text: 'Please leave your feedback about our service by selecting one of the options below.',
  };

  const {title, text} = descriptionData;
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem('feedback');
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : {good: 0, neutral: 0, bad: 0};
  });

  const {good, neutral, bad} = feedback;
  const totalFeedback = good + neutral + bad;
  const positiveFeedback =
    totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;

  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));
  }, [good, neutral, bad]);

  const updateFeedback = feedbackType => {
    setFeedback(prevFeedback => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({good: 0, neutral: 0, bad: 0});
  };

  return (
    <>
      <Description title={title} text={text} />
      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification message="No feedback yet." />
      ) : (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </>
  );
}

export default App;
