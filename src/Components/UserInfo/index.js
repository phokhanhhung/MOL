import React, { useEffect } from 'react';
import './UserInfo.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useSelector } from 'react-redux';
import logo from '../../Assets/images/logo-removebg-preview.png';

function UserInfo({isUserInfoShowed}) {

  const isDarkMode = useSelector(state => state.mode.isDarkMode);

  const handleExitUserInfo = (e) => {
    e.target.style.display = "none";
  }

  useEffect(() => {
    const userInfo = document.getElementsByClassName("user-info")[0];
    if(isUserInfoShowed.state) {
      userInfo.style.display = "flex";
    }
    
  }, [isUserInfoShowed.click])

  return (
    <div className="user-info" onClick={e => handleExitUserInfo(e)}>

      <form action="" className="user-info__form" onClick={e => e.stopPropagation()} style={{backgroundColor: isDarkMode ? "#242526" : ""}}>
        <div className="user-info__form-image">
          <img src={logo} alt="logo" />
          <div>
            <img src="" alt="" />
          </div>
          <input type="file" />
        </div>

        <div className="user-info__form-line"></div>

        <div className="user-info__form-fields">
          <div className="user-info__form-field">
            <p>Username:</p>
            <input type="text" />
          </div>

          <div className="user-info__form-field">
            <p>Password</p>
            <input type="text" />
          </div>

          <div className="user-info__form-field">
            <p>Date of birth:</p>
            <input type="text" />
          </div>

          <div className="user-info__form-field">
            <p>Description:</p>
            <textarea name="" id=""></textarea>
          </div>

          <div className="user-info__form-field user-info__form-genders">
            <p>Gender:</p>
            <div className="user-info__form-field-gender">
              <input type="radio" id="male" name="gender" defaultChecked/><label htmlFor="male">Male</label>          
            </div>

            <div className="user-info__form-field-gender">
              <input type="radio" id="female" name="gender"/><label htmlFor="female">Female</label>
            </div>
          </div>

          <div className="user-info__form-submit">
            <input type="submit" value="Save change" />
          </div>
          
        </div>

      </form>
    </div>
  )
}

export default UserInfo