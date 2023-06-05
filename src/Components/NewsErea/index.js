import React, { useEffect, useState } from 'react';
import News from '../News';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import './NewsErea.scss';
import '../../styles/tranform.scss';
import cat from '../../Assets/images/cat-news.png';
import fox from '../../Assets/images/fox.png';
import car from '../../Assets/images/MW-DZ768_AW_lam_ZH_20151120164628.jpg';
import NewsDetail from '../../Pages/NewsDetail';

function NewsErea({num}) {
  const [move, setMove] = useState(0);
  const [step, setStep] = useState(0);

  const listNews = [cat, fox, cat, fox, cat, fox, cat, fox, car];

  // useEffect(() => {
  //   var leftArrow = document.getElementById("news-area__left-arrow");
  //   var rightArrow = document.getElementById("news-area__right-arrow");
    
  //   console.log(leftArrow.style, rightArrow);

  // }, []);

  useEffect(() => {
    let leftArrow = document.getElementById(`news-area__left-arrow-${num}`);
    let rightArrow = document.getElementById(`news-area__right-arrow-${num}`);
    if(step === 0) {
      leftArrow.style.visibility = "hidden";
      leftArrow.style.opacity = "0";
    } else {
      leftArrow.style.visibility = "visible";
      leftArrow.style.opacity = "1";
    }

    if(step >= listNews.length - 4) {
      rightArrow.style.visibility = "hidden";
      rightArrow.style.opacity = "0";
    } else {
      rightArrow.style.visibility = "visible";
      rightArrow.style.opacity = "1";
    }
  }, [step]);

  const handleRightClick = () => {
    // console.log(move, "right click", step);
    let newsItem = document.getElementsByClassName("news-area__newsItem")[0];
    
    if(step < listNews.length - 4) {
      setStep(step => step + 1);
      setMove(-newsItem.clientWidth * (step + 1));    
    }  
  }

  const handleLeftClick = () => {
    console.log(move, "left click", step);
    let newsItem = document.getElementsByClassName("news-area__newsItem")[0];

    if(step > 0) {
      setStep(step => step - 1);
      setMove(-newsItem.clientWidth * (step - 1));    
    }
  }

  return (
    <div className="news-area to-fade show-on-scroll">
      <div className="news-area__header">
        <div></div>
        <p>Animal</p>
        <div></div>
      </div>

      <div className="news-area__news">
        <FontAwesomeIcon icon={solid('arrow-left')} onClick={handleLeftClick} id={`news-area__left-arrow-${num}`}/>
        <div className="news-area__news-wrapper-hidden">
          <div className="news-area__news-wrapper" style={{transform: `translateX(${move}px)`}}>
          {
            listNews.map((item, index) => 
              <div key={index} style={{ display: "flex", alignItems: "center"}} className="news-area__newsItem">
                <News img={item} key={index}/>
                <FontAwesomeIcon icon={solid('circle-dot')} style={{color: "#9E9B9B", margin: "0 23px"}}/>
              </div>
                
            )
          }
          </div>
        </div>
        <FontAwesomeIcon icon={solid('arrow-right')} onClick={handleRightClick} id={`news-area__right-arrow-${num}`}/>
      </div>
      
      
      
    </div>
    
  )
}

export default NewsErea