import './style/app-dark.css'

import Header from './components/nav/Header';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Root from './components/pages/Root';
import Construction from './components/pages/construction';

function App() {
  var path = window.location.pathname;

  function generateHeader() {
    if (path == "/about/") return Header(0);
    else if (path == "/projects/") return Header(1);
    else return Header(3);
  }

  function generateContent() {
    if (path == "/about/") {
      return About();
    } else if (path == "/projects/") {
      return Projects();
    } else {
      return Root();

    }
  }

  return (
    <div className="App">
      <div className="App-Content-construction">
        {Construction()}
      </div>
    </div>
  );
  /*
  WIP

  return (
    <div className="App">
      {generateHeader()}
      <div className="App-Content">
        {generateContent()}
      </div>
    </div>
  );
  */
}

export default App;
