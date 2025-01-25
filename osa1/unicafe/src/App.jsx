import { useEffect, useState } from "react";
import Statistics from "./components/statistics";

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  const [positiveRatio, setPositiveRatio] = useState(0);

  useEffect(() => {
    setAverage((good - bad) / (good + neutral + bad));
    setPositiveRatio((good / (good + neutral + bad)) * 100);
  }, [good, neutral, bad]);

  function handleReview(rating) {
    if (rating == "good") setGood((v) => v + 1);
    if (rating == "neutral") setNeutral((v) => v + 1);
    if (rating == "bad") setBad((v) => v + 1);
  }

  return (
    <main>
      <section>
        <h1>give feedback</h1>
        <div>
          <button onClick={() => handleReview("good")}>good</button>
          <button onClick={() => handleReview("neutral")}>neutral</button>
          <button onClick={() => handleReview("bad")}>bad</button>
        </div>
      </section>
      {good || neutral || bad ? (
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          average={average}
          positiveRatio={positiveRatio}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </main>
  );
};

export default App;
