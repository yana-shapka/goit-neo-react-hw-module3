import css from './Description.module.css';

const Description = ({title, text}) => {
  return (
    <div className={css.descriptionWrapper}>
      <h1 className={css.descriptionTitle}>{title}</h1>{' '}
      <p className={css.descriptionText}>{text}</p>
    </div>
  );
};

export default Description;
