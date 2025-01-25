import { useRef, useState } from "react";
import { getRandomInt } from "./util/rand";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when dianosing patients.",
    "The only way to go fast, is to go well.",
  ];

  const [selected, setSelected] = useState(0);
  const [votes, setVotes] = useState({});
  const max = useRef({ i: 0, v: 0 });

  function handleNextAnecdote() {
    setSelected(getRandomInt(0, anecdotes.length));
  }

  function handleVote() {
    const copy = { ...votes };
    copy[selected] ??= 0;
    copy[selected] += 1;

    if (copy[selected] > max.current.v) {
      max.current.v = copy[selected];
      max.current.i = selected;
    }

    setVotes(copy);
  }

  return (
    <main>
      <section>
        <h1>Anecdote of the day</h1>
        <p>{anecdotes[selected]}</p>
        <p>has {votes[selected] ?? 0} votes</p>
        <button onClick={handleVote}>vote</button>
        <button onClick={handleNextAnecdote}>next anecdote</button>
      </section>
      <section>
        <h1>Anecdote with most votes</h1>
        <p>{anecdotes[max.current.i]}</p>
        <p>has {max.current.v} votes</p>
      </section>
    </main>
  );
};

export default App;
