import React, { useEffect, useState } from 'react';
import './SignUp.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro';
import logo from '../../Assets/images/logo-removebg-preview.png';
import gmail from '../../Assets/images/gmail_new_logo_icon_159149.png';
import facebook from '../../Assets/images/Facebook_icon-icons.com_66805.png';
import { userApis } from '../../Apis/userApis';
import Swal from 'sweetalert2';
import '../../styles/popup.scss';

function SignUp({isSignUpShowed, handleChangeToLogIn}) {

  const currentDate = ((new Date()).getFullYear() + "-" + (((new Date()).getMonth() + 1) < 10 ? "0" + ((new Date()).getMonth() + 1) : ((new Date()).getMonth() + 1)) + "-" + ((new Date()).getDate() < 10 ? "0" + (new Date()).getDate() : (new Date()).getDate()));

  const handleExitSignUp = () => {
    const signUp = document.querySelector(".sign-up");
    clearInputs();
    signUp.style.display = "none";
  }

  useEffect(() => {
    const signUp = document.querySelector(".sign-up");
    if (isSignUpShowed.state) {
      signUp.style.display = "flex";
    } else {
      signUp.style.display = "none";
    }
  }, [isSignUpShowed.click])

  const [gender, setGender] = useState("male");

  const [isLoading, setIsLoading] = useState(false);

  const clearInputs = () => {
    const listInput = Array.from(document.getElementsByTagName("input"));
    listInput.forEach((item, index) => {
      item.placeholder = "";
      item.value = "";
    })
  }

  const submitFormSignUp = (e) => {    
    e.preventDefault();
    
    const username = e.target.username;
    const password = e.target.password;
    const email = e.target.email;
    const birthday = e.target.birthday;

    if(username.value === "" || password.value === "" || email.value === "") {
      const arrInput = new Array(username, password, email);
      arrInput.forEach((item, index) => {
        if(item.value === "") {
          item.placeholder = "(*) This is a required field!";
          console.log([item]);
        }
      })
    } else {
      setIsLoading(true);
      userApis.register({
        username: username.value,
        password: password.value,
        email: email.value,
        birthday: birthday.value,
        gender: gender,
      })
      .then(res => {
        setIsLoading(false);
        if(res.state) {
          Swal.fire({
            customClass: {
              container: "pop-up-z"
            },
            icon: 'success',
            text: 'Successfully sign up!',
          })
          handleChangeToLogIn(true);
          handleExitSignUp();
        } else {
          Swal.fire({
            customClass: {
              container: "pop-up-z"
            },
            icon: 'warning',
            title: 'Oops...',
            text: 'This email has been used!',
          })
          clearInputs();
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
        Swal.fire({
          customClass: {
            container: "pop-up-z"
          },
          icon: 'error',
          title: 'Oops...',
          text: "There's something wrong with the system!",
        })
      })
    }


    console.log({
      username: e.target.username.value,
      password: e.target.password.value,
      email: e.target.email.value,
      birthday: e.target.birthday.value,
      gender: gender,
    })

  }

  const getGenderValue = e => {
    setGender(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div className="sign-up" onClick={handleExitSignUp}>
      {isLoading ?
      <div className="lds-facebook"><div></div><div></div><div></div></div> :
      <form onSubmit={submitFormSignUp} onClick={e => e.stopPropagation()}>
        <img src={logo} alt="" />
        <div className="sign-up__field">
          <p>Username:</p>
          <input 
            type="text" 
            name="username"
            id="username"
            placeholder=""
            onChange={() => {}}
            onFocus={(e) => e.target.placeholder = ""}
          />
        </div>
        <div className="sign-up__field">
          <p>Password:</p>
          <input 
            type="text" 
            name="password"
            id="password"
            onChange={() => {}}
            onFocus={(e) => e.target.placeholder = ""}
          />
        </div>
        <div className="sign-up__field">
          <p>Email:</p>
          <input 
            type="text" 
            name="email"
            id="email"
            onChange={() => {}}
            onFocus={(e) => e.target.placeholder = ""}
          />
        </div>
        <div className="sign-up__field">
          <p>Date of birth:</p>
          <input 
            type="date" 
            name="birthday"
            id="birthday"
            value={currentDate}
            onChange={() => {}}
            onFocus={(e) => e.target.placeholder = ""}
          />
        </div>
        <div className="sign-up__field sign-up__genders" onChange={e => getGenderValue(e)}>
          <p>Gender:</p>
          <div className="sign-up__field-gender">
            <input 
              type="radio" 
              id="male" 
              name="gender" 
              value="male"
              defaultChecked
            />
            <label htmlFor="male">Male</label>          
          </div>
          <div className="sign-up__field-gender">
            <input 
              type="radio" 
              id="female" 
              name="gender"
              value="female"
            />
            <label htmlFor="female">Female</label>
          </div>
        </div>
        <input type="submit" value="Sign up" />
        <p>Or sign up by</p>
        <div className="sign-up__orther-methods">
          <img src={facebook} alt="" />
          <img src={gmail} alt="" />
        </div>

        <i>Already have your account? <b onClick={() => handleChangeToLogIn(true)}>Log in</b></i>
      </form>}
    </div>
  )
}

export default SignUp