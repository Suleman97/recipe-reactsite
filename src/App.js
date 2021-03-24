import Header from './components/Header/header'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Footer from './components/Footer/footer'
import Banner from './components/Banners/home_banner'
// import Home from  './pages/Home/home'
import Card from './components/Banners/recipe_cards'

function App() {
  return (
    <div className="App">
      <Header/>
      {/* <Home/> */}
      <Card/>
      <Banner/>
      <Footer/>
    </div>
  );
}

export default App;
