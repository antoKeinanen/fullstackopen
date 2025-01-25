function Total({ parts }) {
  const total = parts.reduce((acc, p) => acc + p.exercises, 0);
  return (
    <b>Number of exercises {total}</b>
  );
}

export default Total;
