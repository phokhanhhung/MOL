import React, { useEffect } from 'react';
import './NewsDetail.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import avatar from '../../Assets/images/avatar-Hung.png';
import cat from '../../Assets/images/cat-detail.png';

function NewsDetail() {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  return (
    <div className="news-detail">
      <div className="news-detail__info">
        <div className="news-detail__info-user">
          <img src={avatar} alt="avatar" />
          <p><b>Phó Khánh Hưng</b></p>
        </div>

        <div className="news-detail__info-news">
          <div className="news-detail__info-image">
            <img src={cat} alt="avatar" />
          </div>

          <div className="news-detail__info-line"></div>


          <div className="news-detail__info-more">
            <div className="news-detail__info-more-wrapper">
              <p>07/15/2022</p>

              <FontAwesomeIcon icon={solid('circle')} />

              <p>10:30  {" "} <FontAwesomeIcon icon={solid('sun')} /></p>
            </div>

            <div className="news-detail__info-more-line" style={{width: "100%", height: "1px", backgroundColor: "#9E9B9B", margin: "5px 0 20px"}}></div>
            
            
            <div className="news-detail__info-content">
              <p className="news-detail__info-title">My cat is really cute, just look how sleepy he is.</p>
              <p className="news-detail__info-text">Cats' claws all curve downward, which means that they can't climb down trees 
              head-first. Instead, they have to back down the trunk. Cats' collarbones don't 
              connect to their other bones, as these bones are buried in their shoulder muscles. 
              Cats have 230 bones, while humans only have 206.Instead, they have to back down the trunk. Cats' collarbones don't 
              connect to their other bones, as these bones are buried in their shoulder muscles.Instead, they have to back down the trunk. Cats' collarbones don't 
              connect to their other bones, as these bones are buried in their shoulder muscles. Cats have an extra organ that 
              allows them to taste scents on the air, which is why your cat behave.Cats' collarbones don't 
              connect to their other bones, as these bones are buried in their shoulder muscles. 
              Cats have 230 bones, while humans only have 206.Instead, they have to back down the trunk. Cats' collarbones don't 
              connect to their other bones, as these bones are buried in their shoulder muscles.Instead, they have to back down the trunk. Cats' collarbones don't 
              connect to their other bones, as these bones are buried in their shoulder muscles. Cats have an extra organ that 
              allows them to taste scents on the air, which is why your cat behave.Cats' collarbones don't 
              connect to their other bones, as these bones are buried in their shoulder muscles. 
              Cats have 230 bones, while humans only have 206.Instead, they have to back down the trunk. Cats' collarbones don't 
              connect to their other bones, as these bones are buried in their shoulder muscles.Instead, they have to back down the trunk. Cats' collarbones don't 
              connect to their other bones, as these bones are buried in their shoulder muscles. Cats have an extra organ that 
              allows them to taste scents on the air, which is why your cat behave.Cats' collarbones don't 
              connect to their other bones, as these bones are buried in their shoulder muscles. 
              Cats have 230 bones, while humans only have 206.Instead, they have to back down the trunk. Cats' collarbones don't 
              connect to their other bones, as these bones are buried in their shoulder muscles.Instead, they have to back down the trunk. Cats' collarbones don't 
              connect to their other bones, as these bones are buried in their shoulder muscles. Cats have an extra organ that 
              allows them to taste scents on the air, which is why your cat behave.</p>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}

export default NewsDetail