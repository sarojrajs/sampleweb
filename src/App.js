import './App.css';
import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner2/Banner2';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import backImg from './images/Group 16.png'
function App() {
  return (
    <div className="App">
      <div className='appTop'>
        <img className='backGroundImage' src={backImg} alt=''/>
        <Header/>
        <Banner/>
        <div style={{height:'200px'}}>
        </div>        
      </div>
      <div className='appBetween'>
        <Banner2/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
