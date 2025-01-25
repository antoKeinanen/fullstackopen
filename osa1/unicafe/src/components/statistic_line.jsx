function StatisticLine({ text, value, percent }) {
  return (
    <p>
      {text} {value} {percent && "%"}
    </p>
  );
}

export default StatisticLine;
