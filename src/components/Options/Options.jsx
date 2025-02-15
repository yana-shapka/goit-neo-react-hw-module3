import css from './Options.module.css';

const Options = ({updateFeedback, resetFeedback, totalFeedback}) => {
  return (
    <div className={css.optionsWrapper}>
      <button
        className={`${css.optionsButton} ${css.optionGood}`}
        onClick={() => updateFeedback('good')}
      >
        Good
      </button>
      <button
        className={`${css.optionsButton} ${css.optionNeutral}`}
        onClick={() => updateFeedback('neutral')}
      >
        Neutral
      </button>
      <button
        className={`${css.optionsButton} ${css.optionBad}`}
        onClick={() => updateFeedback('bad')}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={`${css.optionsButton} ${css.resetFeedback}`}
          onClick={resetFeedback}
        >
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
