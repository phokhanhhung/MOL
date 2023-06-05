import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Default.scss';
import '../../styles/tranform.scss';
import logo_blue from '../../Assets/images/logo_mol_blue.png';
import NewsErea from '../../Components/NewsErea';
import space from '../../Assets/videos/Space.mp4';
import SignUp from '../../Components/SignUp';
import LogIn from '../../Components/LogIn';
import NewsDetail from '../NewsDetail';

function Default() {

  const [isSignUpShowed, setIsSignUpShow] = useState({state: false, click: false});
  const [isLogInShowed, setIsLogInShow] = useState({state: false, click: false});

  const isElementInViewPort = (el) => {
    let rect = el.getBoundingClientRect();

    if(el.classList.contains("default")) {
      return rect.top > 0 && rect.top <=700;
    } else return rect.top <= 800 && rect.top >= -300;
  }

  const handleShowUpElement = (el) => {
    el.classList.add("show");
  }

  const handleHideElement = (el) => {
    el.classList.remove("show");
  }

  useEffect(() => {
    const elShowOnScroll = Array.from(document.getElementsByClassName("show-on-scroll"));
    
    for (var el of elShowOnScroll) {
      if(isElementInViewPort(el)) {
        handleShowUpElement(el);
      } else {
        handleHideElement(el);
        window.addEventListener("scroll", () => {
          for (var el of elShowOnScroll) {
            if(isElementInViewPort(el)) {
              handleShowUpElement(el);
            } else {
              handleHideElement(el)
            }
          }
        })
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    
  }, []);

  const handleShowUpSignUp = () => {
    setIsSignUpShow({state: true, click: !isSignUpShowed.click});
  }

  const handleShowUpLogIn = () => {
    setIsLogInShow({state: true, click: !isLogInShowed.click});
  }

  const changeToLogIn = (state) => {
    setIsSignUpShow(isSignUpShowed => ({state: false, click: !isSignUpShowed.click}));
    setIsLogInShow(isLogInShowed => ({state: state, click: !isLogInShowed.click}));
  }

  const changeToSignUp = (state) => {
    setIsLogInShow(isLogInShowed => ({state: false, click: !isLogInShowed.click}))
    setIsSignUpShow(isSignUpShowed => ({state: state, click: !isSignUpShowed.click}))
  }


  return (
    <div className="default">
      <div className="default__hero">
        <div className="default__texts">
          <p className="to-left show-on-scroll default">Moments of Life</p>
          <p className="to-right show-on-scroll default">Hold your memories</p>
        </div>
        
        <div className="default__buttons">
          <button className="to-big show-on-scroll default" onClick={handleShowUpLogIn}>LOG IN</button> <br />
          <button className="to-big show-on-scroll default" onClick={handleShowUpSignUp}>SIGN UP</button>
        </div>
      </div>

      <Link to="/">
        <img src={logo_blue} alt="logo" className="to-big show-on-scroll default"/>
      </Link>


              
      {Array(2).fill().map((item, index) => (
        <div key={index} style={{maxWidth: "1196px", margin: "0 auto 60px"}}>  
          <NewsErea num={index}/>
        </div>
      ))}    

      <SignUp isSignUpShowed={isSignUpShowed} handleChangeToLogIn={changeToLogIn}/>
      <LogIn isLogInShowed={isLogInShowed} handleChangeToSignUp={changeToSignUp}/>

    </div>
  )
}

export default Default