import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import Default from './Pages/Default';
import Footer from './Components/Footer';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Favourite from './Pages/Favourite';
import MyJourney from './Pages/MyJourney';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import NewsDetail from './Pages/NewsDetail';
import AddPost from './Pages/AddPosst';
import { useModeStore } from './Redux/store/useModeStore';

function App() {

  const [modeState, modeDispatch, modeActions] = useModeStore();

  useEffect(() => {
    const app = document.querySelector(".app");
    if(modeState.isDarkMode) {
      app.classList.add("to-darken")
    } else {
      app.classList.remove("to-darken");
    }
  }, [modeState.isDarkMode])

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Default />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favourite" element={<Favourite />} />
        <Route path="/my-journey" element={<MyJourney />} />
        <Route path="/my-journey/image" element={<NewsDetail />} />
        <Route path="/add-post" element={<AddPost />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
