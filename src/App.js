import './style/app-dark.css'

import Header from './components/nav/Header';
import About from './components/pages/About';
import Projects from './components/pages/Projects';
import Root from './components/pages/Root';
import Construction from './components/pages/construction';
import Footer from './components/nav/footer';

function App() {
  var path = window.location.pathname;
  var constructionmode = false;

  function generateHeader() {
    if (path == "/about/") return Header(0);
    else if (path == "/projects/") return Header(1);
    else return Header(3);
  }

  function generateFooter() {
    return Footer();
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

  if (constructionmode) {
    return (
      <div className="App">
        <div className="App-Content-construction">
          {Construction()}
        </div>
      </div>
    );
  } else {
    return (
      <div className="App">
        {generateHeader()}
        <div className="App-Content">
          {generateContent()}
        </div>
        {generateFooter()}

      </div>
    );
  }

  /*
  WIP


  */
}

export default App;
