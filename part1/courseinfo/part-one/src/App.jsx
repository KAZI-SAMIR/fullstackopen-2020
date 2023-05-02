







//Refectaring the components to consists this three new components

const Header = ({ course }) => <h1>{course}</h1>



const Cpart = ({ name, exercise }) => {
  return (
    <div>
      <p>

        {name} : {exercise}
      </p>
    </div>
  )

}

const Content = ({ parts }) => {
  const [part1, part2, part3] = parts;

  return (
    <div>
      <Cpart name={part1.name} exercise={part1.exercises} />
      <Cpart name={part2.name} exercise={part2.exercises} />
      <Cpart name={part3.name} exercise={part3.exercises} />

    </div>
  )
}
const Total = ({ parts }) => {
  if (typeof parts !== 'object' || !Array.isArray(parts)) {
    return null;
  }

  const total = parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      <p>Total Exercise : {total}</p>
    </div>
  );
};


const App = () => {

  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };
  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total />

    </div>
  )
}

export default App
