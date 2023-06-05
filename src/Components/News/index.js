import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './News.scss';
import NewsPopUp from '../NewsPopUp';
import NewsDetail from '../../Pages/NewsDetail';

function News({img}) {


  useEffect(() => {
    const news = Array.from(document.querySelectorAll(".news"));
    const img = Array.from(document.querySelectorAll(".news > img"));

    news.forEach((item, index) => {
      item.addEventListener("mouseover", () => {
        img[index].style.transform = "scale(1.3)";
      })

      item.addEventListener("mouseout", () => {
        img[index].style.transform = "scale(1)";
      })
    })

  }, []);

  return (
    <Link to="/my-journey/image" className="news to-big-1 show-on-scroll">
      <img src={img} alt="cat" />

      <div className="news__popup">
        <NewsPopUp />
      </div>

    </Link>
  )
}

export default News