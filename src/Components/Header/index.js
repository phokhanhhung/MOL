import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import logo_grey from '../../Assets/images/logo_mol_grey.png';
import './Header.scss';
import avatar from '../../Assets/images/avatar-Hung.png';
import { Link } from 'react-router-dom';

function Header() {
  const searchArea = useRef(); 

  useEffect(() => {
    const headerItems = Array.from(document.querySelectorAll(".header__items > li"));
    const headerItems_links = Array.from(document.querySelectorAll(".header__items > li a"));
    // console.log(headerItems_links);

    headerItems.forEach((item, index) => {
      const length = headerItems.length;
      const arr = Array(length).fill().map((_, i) => i);

      item.onclick = () => {
        headerItems_links[index].style.color = "#fff";
        for(var i of arr) {
          if(i !== index) {
            headerItems_links[i].style.color = "#9E9B9B";
          }
        }
      }
    })

    // var a = "";
    // window.onload = () => {
    //   if(a !== window.location.pathname)
    //   a = window.location.pathname;
    //   headerItems_links.forEach((item, index) => {
    //     if(item.href === window.location.href) {
    //       headerItems_links[index].style.color = "#fff";
    //     } else {
    //       headerItems_links[index].style.color = "#9E9B9B";
    //     }
    //   })
    // }

    document.addEventListener('mousedown', hideSearch);
  }, [])

  const handleShowUpSearch = () => {
    const input = document.querySelector(".header__search-bar > input");
    input.placeholder = "Search images";
    input.classList.add("show");
  }

  const handleHoverSearchIcon = () => {
    const iconWrapper = document.querySelector(".header__search-bar > .header__search-icon");
    const inputIcon = document.querySelector(".header__search-bar > .header__search-icon > svg");
    const input = document.querySelector(".header__search-bar > input");

    inputIcon.style.color = "#000";
    inputIcon.style.transition = "ease 0.5s all";
    if(input.clientWidth > 0) {
      iconWrapper.style.backgroundColor = "unset";
    } else {
      iconWrapper.style.backgroundColor = "#fff";
    }
      
  }

  const handleOutSearchIcon = () => {
    const iconWrapper = document.querySelector(".header__search-bar > .header__search-icon");
    const inputIcon = document.querySelector(".header__search-bar > .header__search-icon > svg");
    inputIcon.style.color = "#B5B2B2";
    inputIcon.style.transition = "ease 0.5s all";
    iconWrapper.style.backgroundColor = "unset";
  }

  const handleHoverAddPostIcon = () => {
    const iconWrapper = document.querySelector(".header__more > .header__add-post-icon");
    const addIcon = document.querySelector(".header__more > .header__add-post-icon > svg");

    addIcon.style.color = "#000";
    addIcon.style.transition = "ease 0.5s all";
    iconWrapper.style.backgroundColor = "#fff";

  }

  const handleOutAddPostIcon = () => {
    const iconWrapper = document.querySelector(".header__more > .header__add-post-icon");
    const addIcon = document.querySelector(".header__more > .header__add-post-icon > svg");
    addIcon.style.color = "#B5B2B2";
    addIcon.style.transition = "ease 0.5s all";
    iconWrapper.style.backgroundColor = "unset";
  }

  const hideSearch = (e) => {
    if (searchArea.current.contains(e.target)) return;
    else {
      const input = document.querySelector(".header__search-bar > input");
      input.placeholder = "";
      input.classList.remove("show");
    }
  }

  return (
    <div className="header">
      <div className="header__wrapper">

        <ul className="header__items">
          <li>
            <span>
              <Link to="/">
                <img src={logo_grey} alt="logo" />
              </Link>
            </span>
          </li>
          <li>
            <span style={{display: "block", width: "1px", height: "20px", backgroundColor: "#9E9B9B"}}></span>
            <span>
              <Link to="/favourite">Favourite</Link>
            </span>
          </li>
          <li>
            <span style={{display: "block", width: "1px", height: "20px", backgroundColor: "#9E9B9B"}}></span>
            <span>
              <Link to="/my-journey">
                <img src={avatar} alt="avatar" />
                <p>Phó Khánh Hưng</p>
              </Link>
            </span>
          </li>
        </ul>

        <div className="header__more">
          <div className="header__search-bar" ref={searchArea}>
            <div className="header__search-icon" onClick={handleShowUpSearch} onMouseOver={handleHoverSearchIcon} onMouseOut={handleOutSearchIcon}>
              <FontAwesomeIcon icon={solid('magnifying-glass')} />
            </div>

            <input type="text" />
          </div>

          <Link to="/add-post" className="header__add-post-icon" onMouseOver={handleHoverAddPostIcon} onMouseOut={handleOutAddPostIcon}>
            <FontAwesomeIcon icon={solid('square-plus')} />
          </Link>
        </div>

        

      </div>
    </div>
  )
}

export default Header