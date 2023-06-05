import React, { useEffect, useState } from 'react';
import './LogIn.scss';
import logo from '../../Assets/images/logo-removebg-preview.png';
import Swal from 'sweetalert2';
import '../../styles/popup.scss';
import { userApis } from '../../Apis/userApis';
import { tokenApis } from '../../Apis/tokenApis';
import { useTokenStore } from '../../Redux/store/useTokenStore';
import { useUserStore } from '../../Redux/store/useUserStore';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { useNavigate } from 'react-router-dom';

function LogIn({isLogInShowed, handleChangeToSignUp}) {

  const [tokenState, tokenDispatch, tokenActions] = useTokenStore();
  const [userState, userDispatch, userActions] = useUserStore();

  const navigate = useNavigate();

  const handleExitLogIn = () => {
    const logIn = document.querySelector(".log-in");
    logIn.style.display = "none";
  }

  useEffect(() => {
    const logIn = document.querySelector(".log-in");
    if (isLogInShowed.state) {
      logIn.style.display = "flex";
    } else {
      logIn.style.display = "none";
    }
  }, [isLogInShowed.click])

  const clearInputs = () => {
    const listInput = Array.from(document.getElementsByTagName("input"));
    listInput.forEach((item, index) => {
      item.placeholder = "";
      item.value = "";
    })
  }

  const [isLoading, setIsLoading] = useState(false);

  const submitFormLogIn = (e) => {
    e.preventDefault();

    const email = e.target.email;
    const password = e.target.password;
    console.log([email, password]);

    if(password.value === "" || email.value === "") {
      const arrInput = new Array(password, email);
      arrInput.forEach((item, index) => {
        if(item.value === "") {
          item.placeholder = "(*) This is a required field!";
        }
        // console.log([item]);
      })
    } else {
      setIsLoading(true);
      userApis.login({
        email: email.value,
        password: password.value,
      })
      .then(res => {
        setIsLoading(false);
        console.log(res);
        if(res.state) {
            tokenDispatch(tokenActions.setToken({accessToken: res.accessToken}))
            userDispatch(tokenActions.setUser({currentUser: res}))
            Swal.fire({
              customClass: {
                container: "pop-up-z"
              },
              icon: 'success',
              text: 'Successfully sign up!',
            })
            handleExitLogIn();
        } else {
          Swal.fire({
            customClass: {
              container: "pop-up-z"
            },
            icon: 'warning',
            title: 'Oops...',
            text: 'This email has not been signed up!',
          })
          clearInputs();
        }
      })
      .catch(err => {
        setIsLoading(false);
        console.log(err);
        if(err?.response.status === 404) {
          Swal.fire({
            customClass: {
              container: "pop-up-z"
            },
            icon: 'warning',
            title: 'Oops...',
            text: 'Wrong password!',
          })
          clearInputs();
        } else {
          Swal.fire({
            customClass: {
              container: "pop-up-z"
            },
            icon: 'error',
            title: 'Oops...',
            text: "There's something wrong with the system!",
          })
        }
        
      })
    }


    console.log({
      password: e.target.password.value,
      email: e.target.email.value,
    })

  }


  return (
    <div className="log-in" onClick={handleExitLogIn}>
      {isLoading ?
      <div className="lds-facebook"><div></div><div></div><div></div></div> :
      <form onSubmit={submitFormLogIn} onClick={e => e.stopPropagation()}>
        <img src={logo} alt="" />
        <div className="log-in__field">
          <p>Email:</p>
          <input 
            type="email" 
            id="email"
            onFocus={e => e.target.placeholder = ""}
          />
        </div>
        <div className="log-in__field">
          <p>Password:</p>
          <input 
            type="text" 
            id="password"
            onFocus={e => e.target.placeholder = ""}
          />
        </div>

        <p><i>Forgot password?</i></p>

        <input type="submit" value="Log in" />
        
        <i>Don't have account? <b onClick={() => {handleChangeToSignUp(true)}}>Sign up</b></i>
      </form>}
    </div>
  )
}

export default LogIn