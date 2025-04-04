import Header2 from "./components/Header/Header2.jsx";
import { CORE_CONCEPTS } from "./data.js";
import CoreConcepts from "./components/CoreConcepts.jsx";
import TabButton from "./components/TabButton.jsx";
import { useState } from "react";
import { EXAMPLES } from "./data_updated.js";

function App() {

  const [ selectedTopic, setSelectedTopic ] = useState('');

  function handleSelect(selectedTopic) {
    // selectedButton = 'components', 'jsx', 'props', 'state'
    console.log(selectedTopic);
    setSelectedTopic(selectedTopic);
  }

  return (
    <div>
      <Header2 />
      <main>
      <section id="core-concepts"> 
            <h2>핵심 개념들 of React</h2>
            <ul>
                <CoreConcepts image={CORE_CONCEPTS[0].image} title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} />
                <CoreConcepts {...CORE_CONCEPTS[1]}/>
                <CoreConcepts {...CORE_CONCEPTS[2]}/>
                <CoreConcepts {...CORE_CONCEPTS[3]}/>
            </ul>
        </section>
        <section id="examples"> 
          <h2>예시들</h2>
            <menu>
              <TabButton onSelect={() => handleSelect('components')}>Components</TabButton>
              <TabButton onSelect={() => handleSelect('jsx')}>JSX</TabButton>
              <TabButton onSelect={() => handleSelect('props')}>Props</TabButton>
              <TabButton onSelect={() => handleSelect('state')}>State</TabButton>
            </menu>
            {selectedTopic === '' ? <h3>버튼을 클릭해보세요.</h3> : 
              <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
                <p>{EXAMPLES[selectedTopic].description}</p>
                <pre>
                  <code>
                    {EXAMPLES[selectedTopic].code}
                  </code>
                </pre>  
              </div>
            }
        </section>
      </main>
    </div>
  );
}

export default App;
