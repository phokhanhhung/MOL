import React, { useEffect } from "react";
import "./Home.scss";
import "../../styles/tranform.scss";
import logo_blue from "../../Assets/images/logo_mol_blue.png";
import NewsErea from "../../Components/NewsErea";

function Home() {
  const listKey = [
    "Animal",
    "Forest",
    "Flower",
    "Sky",
    "Animal",
    "Forest",
    "Nature",
    "Family",
    "Sky",
    "Animal",
    "Nature",
    "Family",
    "Forest",
    "Flower",
    "Flower",
    "Sky",
    "Nature",
    "Family",
  ];

  const isElementInViewPort = (el) => {
    let rect = el.getBoundingClientRect();

    if (el.classList.contains("default")) {
      return rect.top > 0 && rect.top <= 700;
    } else return rect.top <= 800 && rect.top >= -300;
  };

  const handleShowUpElement = (el) => {
    el.classList.add("show");
  };

  const handleHideElement = (el) => {
    el.classList.remove("show");
  };

  useEffect(() => {
    const elShowOnScroll = Array.from(
      document.getElementsByClassName("show-on-scroll")
    );

    for (var el of elShowOnScroll) {
      if (isElementInViewPort(el)) {
        handleShowUpElement(el);
      } else {
        handleHideElement(el);
        window.addEventListener("scroll", () => {
          for (var el of elShowOnScroll) {
            if (isElementInViewPort(el)) {
              handleShowUpElement(el);
            } else {
              handleHideElement(el);
            }
          }
        });
      }
    }

    window.scrollTo({ top: 0, behavior: "smooth" });

    const keyWords = Array.from(
      document.querySelectorAll(".home__key-list > p")
    );
  }, []);

  return (
    <div className="home">
      <p>
        <b>Good morning, Phó Khánh Hưng!</b>
      </p>
      <p>Let's choose your today's key!</p>

      <div className="home__key-list">
        {listKey.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </div>

      <img
        src={logo_blue}
        alt="logo"
        className="to-big show-on-scroll default"
      />

      {Array(2)
        .fill()
        .map((item, index) => (
          <div key={index} style={{ margin: "0 auto 60px" }}>
            <NewsErea num={index} />
          </div>
        ))}
    </div>
  );
}

export default Home;
