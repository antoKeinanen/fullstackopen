import { useEffect, useState } from "react";

const App = () => {
  // tallenna napit omaan tilaansa
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
    </main>
  );
};

export default App;
