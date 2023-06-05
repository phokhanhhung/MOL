import React, { useEffect } from 'react';
import './AddPost.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useSelector } from 'react-redux';
import logo from '../../Assets/images/logo-removebg-preview.png';

function AddPost() {

  const isDarkMode = useSelector(state => state.mode.isDarkMode);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [])

  return (
    <div className="add-post">

      <form action="" className="add-post__form" onClick={e => e.stopPropagation()} >
        <div className="add-post__form-logo">
          <div className="add-post__form-logo-wrapper">
            <div className="add-post__form-line" style={{width: "60%", height: "1px", backgroundColor: "#9E9B9B"}}></div>
            <img src={logo} alt="logo" />
          </div>

          <div className="add-post__form-line" style={{width: "60%", height: "1px", backgroundColor: "#9E9B9B"}}></div>
        </div>


        <div className="add-post__form-content">
          <div className="add-post__form-image">
            <div className="add-post__form-image-wrapper">
              <img src="" alt="" />
            </div>

            <input type="file" />
          </div>

          <div className="add-post__form-fields">

            <div className="add-post__form-field">
              <p>Choose your key:</p>
              <select name="keys">
                <option value="Animal">Animal</option>
                <option value="Nature">Nature</option>
                <option value="Sky">Sky</option>
                <option value="Family">Family</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="add-post__form-field">
              <p>Tittle:</p>
              <input type="text" />
            </div>

            <div className="add-post__form-field">
              <p>Description:</p>
              <textarea name="" id=""></textarea>
            </div>

            <div className="add-post__form-submit">
              <input type="submit" value="Add post" />
            </div>
            
          </div>

        </div>  
        
      </form>
    </div>
  )
}

export default AddPost