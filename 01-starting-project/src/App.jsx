import Header2 from "./components/Header/Header2.jsx";
// import CoreConceptsArr from "./data.js";

function CoreConcepts(props) {
  return(
    <li>
      <img src={props.image} alt={props.title} />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header2 />
      <main>
        <section id="core-concepts">
          <h2>핵심 개념들 of React</h2>
          <ul>
            {/* <CoreConcepts image={} title={} description={} /> */}
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
