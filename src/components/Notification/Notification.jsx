import css from '../Feedback/Feedback.module.css';

const Notification = ({message}) => {
  return <p className={css.feedbackWrapper}>{message}</p>;
};

export default Notification;
