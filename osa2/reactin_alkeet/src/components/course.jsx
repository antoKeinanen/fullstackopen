import Content from "./content";
import Total from "./total";
import Header from "./header";

function Course({ course }) {
  return (
    <>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
}

export default Course;
