function Statistics({ good, neutral, bad, average, positiveRatio }) {
  return (
    <section>
      <h1>statistics</h1>
      <div>
        <p>good {good}</p>
        <p>neutral {neutral}</p>
        <p>bad {bad}</p>
        <p>average {average}</p>
        <p>positive ratio {positiveRatio}%</p>
      </div>
    </section>
  );
}

export default Statistics;
