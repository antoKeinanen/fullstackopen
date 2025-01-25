function Total({ parts }) {
  return <b>Number of exercises {parts.reduce((acc, p) => acc + p.exercises, 0)}</b>;
}

export default Total;
