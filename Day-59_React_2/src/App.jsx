import Hero from "./components/Hero";
const App = () => {
  const name = 'Superman'
  let obj = {
    course1: 'React',
    course2: 'Angular',
    course3: 'Vue'
  }
  let hero = ['batman', 'superman', 'ironman']
  return (
    <>
    <Hero />
      <div>
        <h1>We Are Learning React {name}</h1>
        <h2>This is h2</h2>
        <ul>
          <li>{obj.course1}</li>
          <li>{obj.course2}</li>
          <li>{obj.course3}</li>
        </ul>
        <ol>
          <li>{hero[0]}</li>
          <li>{hero[1]}</li>
          <li>{hero[2]}</li>
        </ol>
      </div>
      <div>
        <h1>this is another h1</h1>
      </div>
    </>
  );
};

export default App;