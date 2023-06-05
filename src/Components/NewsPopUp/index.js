import React, {useEffect} from 'react';
import './NewsPopUp.scss';
import '../../styles/tranform.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import avatar from '../../Assets/images/avatar-Hung.png';
import cat from '../../Assets/images/cat-detail.png';

function NewsPopUp() {

  const cat1 = "https://images.theconversation.com/files/457052/original/file-20220408-15-pl446k.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1000&fit=clip";


  return (
    <div className="news-popup">

      <div className="news-popup__info">
        <div className="news-popup__info-user">
          <img src={avatar} alt="avatar" />
          <p>Phó Khánh Hưng</p>
        </div>

        <div className="news-popup__info-more">
          <div className="news-popup__info-more-wrapper">
            <p>07/15/2022</p>

            <FontAwesomeIcon icon={solid('circle')} />

            <p>10:30  {" "} <FontAwesomeIcon icon={solid('sun')} /></p>
          </div>

          <div className="news-popup__info-more-line" style={{width: "100%", height: "1px", backgroundColor: "#9E9B9B"}}></div>
          <p className="news-popup__info-more-title">My cat is really cute, just look how sleepy he is.</p>
        </div>

        <div className="news-popup__info-content">
          <p>Cats' claws all curve downward, which means that they can't climb down trees 
          head-first. Instead, they have to back down the trunk. Cats' collarbones don't 
          connect to their other bones, as these bones are buried in their shoulder muscles. 
          Cats have 230 bones, while humans only have 206.Instead, they have to back down the trunk. Cats' collarbones don't 
          connect to their other bones, as these bones are buried in their shoulder muscles.Instead, they have to back down the trunk. Cats' collarbones don't 
          connect to their other bones, as these bones are buried in their shoulder muscles. Cats have an extra organ that 
          allows them to taste scents on the air, which is why your cat behave.</p>
        </div>
      </div>
    </div>
  )
}

export default NewsPopUp