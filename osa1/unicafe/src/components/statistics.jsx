function Statistics({ good, neutral, bad, average, positiveRatio }) {
  return (
    <section>
      <h1>statistics</h1>
      <div>
        {good || neutral || bad ? (
          <>
            <p>good {good}</p>
            <p>neutral {neutral}</p>
            <p>bad {bad}</p>
            <p>average {average}</p>
            <p>positive ratio {positiveRatio}%</p>
          </>
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    </section>
  );
}

export default Statistics;
