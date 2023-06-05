import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import "./MyJourney.scss";
import "../../styles/tranform.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  solid,
  regular,
  brands,
} from "@fortawesome/fontawesome-svg-core/import.macro";
import NewsErea from "../../Components/NewsErea";
import avatar from "../../Assets/images/original-avatar.jpg";
import KeyChoice from "../../Components/KeyChoice";
// import { setDarkMode } from '../../Redux/reducers/modeReducer';
// import { useDispatch, useSelector } from 'react-redux';
import { useModeStore } from "../../Redux/store/useModeStore";
import UserInfo from "../../Components/UserInfo";
import add_image from "../../Assets/images/add-image.svg";

function MyJourney() {
  const [isUserInfoShowed, setIsUserInfoShowed] = useState({
    state: false,
    click: false,
  });

  // const isDarkMode = useSelector(state => state.mode.isDarkMode);
  // const dispatch = useDispatch();

  const [modeState, modeDispatch, modeActions] = useModeStore();

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

  const keys = useRef();
  const plusIcon = useRef();

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
    document.addEventListener("mousedown", handleHideKeyList);

    return () => {
      document.removeEventListener("mousedown", handleHideKeyList);
    };
  }, []);

  const [isPlusClicked, setIsPlusClick] = useState(true);

  const handleHideKeyList = (e) => {
    if (keys.current.contains(e.target)) return;
    else if (plusIcon.current.contains(e.target)) return;
    else {
      if (keys) keys.current.style.display = "none";
      setIsPlusClick((isPlusClicked) => !isPlusClicked);
    }
  };

  const handleShowUpKeyList = () => {
    const keyList = document.getElementsByClassName(
      "my-jrn__user-info-key-list"
    )[0];

    setIsPlusClick((isPlusClicked) => !isPlusClicked);
    console.log(isPlusClicked);
    if (isPlusClicked) {
      keyList.style.display = "flex";
    } else {
      keyList.style.display = "none";
    }
  };

  //handle dark mode
  const handleDarkMode = () => {
    modeDispatch(
      modeActions.setDarkMode({ _isDarkMode: !modeState.isDarkMode })
    );
  };

  useEffect(() => {
    // console.log(isDarkMode)
  }, [modeState.isDarkMode]);

  const handleShowUpUserInfo = () => {
    setIsUserInfoShowed((isUserInfoShowed) => ({
      state: true,
      click: !isUserInfoShowed.click,
    }));
  };

  return (
    <div className="my-jrn">
      <p>
        <b>Good morning, Phó Khánh Hưng!</b>
      </p>

      <div className="my-jrn__user-info">
        <div className="my-jrn__user-info-col-1">
          <img src={avatar} alt="avatar" className="to-big show-on-scroll" />
          <p className="to-right-s show-on-scroll">
            <b>Name: </b>Phó Khánh Hưng
          </p>
          <p className="to-left-s show-on-scroll">
            <b>DoB: </b>09/24/2001
          </p>
          <p
            className="to-right-s show-on-scroll"
            onClick={handleShowUpUserInfo}
          >
            <em>
              <b>Edit Profile</b>
            </em>{" "}
            <FontAwesomeIcon icon={solid("pen-clip")} />
          </p>
        </div>

        <div className="my-jrn__user-info-line to-big-1 show-on-scroll"></div>

        <div className="my-jrn__user-info-col-2">
          <div className="my-jrn__user-info-col-2-des">
            <h4 className="to-up show-on-scroll">
              Description <FontAwesomeIcon icon={solid("pen")} />
            </h4>
            <p className="to-fade show-on-scroll">
              I have a cute wife and I love h so much. H's really cute. He's my
              angle. You're my angle, angle baby angle. No one can defeat h at
              being cute. I love h. H is HTL.
            </p>
          </div>

          <div className="my-jrn__user-info-col-2-fav">
            <h4 className="to-up show-on-scroll">
              My favourite{" "}
              <div ref={plusIcon}>
                <FontAwesomeIcon
                  icon={solid("circle-plus")}
                  onClick={handleShowUpKeyList}
                />
              </div>
              <div
                ref={keys}
                className="my-jrn__user-info-key-list"
                style={
                  modeState.isDarkMode
                    ? {
                        backgroundColor: "rgba(36, 37, 38, 0.8)",
                        color: "#000",
                      }
                    : {}
                }
              >
                {listKey.map((item, index) => (
                  <p key={index}>{item}</p>
                ))}
              </div>
            </h4>
            <div
              className="my-jrn__user-info-col-2-fav-key to-big show-on-scroll"
              style={{ width: "fit-content" }}
            >
              <KeyChoice />
            </div>
          </div>
        </div>

        <div className="my-jrn__user-info-line to-big-1 show-on-scroll"></div>

        <div className="my-jrn__user-info-col-3">
          <div className="my-jrn__user-info-col-3-mode to-fade show-on-scroll">
            <h4 className="to-up show-on-scroll">Visual mode:</h4>
            <p>
              <span onClick={handleDarkMode}>
                {modeState.isDarkMode ? (
                  <FontAwesomeIcon icon={solid("toggle-on")} />
                ) : (
                  <FontAwesomeIcon icon={solid("toggle-off")} />
                )}
              </span>
              Dark
            </p>
          </div>

          <div className="my-jrn__user-info-col-3-out">
            <h4 className="to-up show-on-scroll">Log out:</h4>
            <button className="to-fade show-on-scroll">Log out</button>
          </div>
        </div>
      </div>

      <div className="my-jrn__texts">
        <p></p>
        <h3 className="to-right show-on-scroll">My Journey</h3>
        <p>
          <Link to="/add-post">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
              <path d="M19,10a1,1,0,0,0-1,1v3.38L16.52,12.9a2.79,2.79,0,0,0-3.93,0l-.7.71L9.41,11.12a2.79,2.79,0,0,0-3.93,0L4,12.61V7A1,1,0,0,1,5,6h8a1,1,0,0,0,0-2H5A3,3,0,0,0,2,7V19.22A2.79,2.79,0,0,0,4.78,22H17.22a2.88,2.88,0,0,0,.8-.12h0a2.74,2.74,0,0,0,2-2.65V11A1,1,0,0,0,19,10ZM5,20a1,1,0,0,1-1-1V15.43l2.89-2.89a.78.78,0,0,1,1.1,0L15.46,20Zm13-1a1,1,0,0,1-.18.54L13.3,15l.71-.7a.77.77,0,0,1,1.1,0L18,17.21ZM21,4H20V3a1,1,0,0,0-2,0V4H17a1,1,0,0,0,0,2h1V7a1,1,0,0,0,2,0V6h1a1,1,0,0,0,0-2Z" />
            </svg>
            <i>Add new post</i>
          </Link>
        </p>
      </div>

      {Array(2)
        .fill()
        .map((item, index) => (
          <div key={index} style={{ margin: "0 auto 60px" }}>
            <NewsErea num={index} />
          </div>
        ))}

      <UserInfo isUserInfoShowed={isUserInfoShowed} />
    </div>
  );
}

export default MyJourney;
