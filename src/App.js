import './App.css';
import Feedback from './Components/Feedback/Feedback';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header'
import HostFeature from './Components/HostFeature/HostFeature';
import Main from './Components/Main/Main'
import Plans from './Components/Plans/Plans';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <HostFeature/>
      <Plans/>
      <Feedback/>
      <Footer/>
    </div>
  );
}

export default App;
