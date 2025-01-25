function Total({ parts }) {
  return <p>Number of exercises {parts.reduce((acc, p) => acc + p.exercises, 0)}</p>;
}

export default Total;
