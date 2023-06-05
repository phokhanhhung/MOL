import React, {useEffect} from 'react';
import './Favourite.scss';
import logo_blue from '../../Assets/images/logo_mol_blue.png';
import NewsErea from '../../Components/NewsErea';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Favourite() {

  // const isDarkMode = useSelector(state => state.mode.isDarkMode);

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

  return (
    <div className="favourite">
      <p><b>Good morning, Phó Khánh Hưng!</b></p>

      <Link to="/">
        <img src={logo_blue} alt="logo" className="to-big show-on-scroll default"/>
      </Link>
      
      <p className="to-right show-on-scroll default">My favourite</p>

      {Array(2).fill().map((item, index) => (
        <div key={index} style={{margin: "0 auto 60px"}}>  
          <NewsErea num={index}/>
        </div>
      ))}
    </div>
  )
}

export default Favourite