import { useEffect, useState } from "react";
import Statistics from "./components/statistics";
import Button from "./components/button";

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
          <Button onClick={() => handleReview("good")} text="good" />
          <Button onClick={() => handleReview("neutral")} text="neutral" />
          <Button onClick={() => handleReview("bad")} text="bad" />
        </div>
      </section>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        average={average}
        positiveRatio={positiveRatio}
      />
    </main>
  );
};

export default App;
