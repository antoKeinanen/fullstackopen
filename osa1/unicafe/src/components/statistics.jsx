import StatisticLine from "./statistic_line";

function Statistics({ good, neutral, bad, average, positiveRatio }) {
  return (
    <section>
      <h1>statistics</h1>
      <div>
        {good || neutral || bad ? (
          <table>
            <tbody>
              <StatisticLine text="good" value={good} />
              <StatisticLine text="neutral" value={neutral} />
              <StatisticLine text="bad" value={bad} />
              <StatisticLine text="average" value={average} />
              <StatisticLine
                text="positive ratio"
                value={positiveRatio}
                percent
              />
            </tbody>
          </table>
        ) : (
          <p>No feedback given</p>
        )}
      </div>
    </section>
  );
}

export default Statistics;
