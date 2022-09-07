import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import Main from './components/main'
import Solution from './components/solutions';
import Testimonials from './components/testimony';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Solution/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
