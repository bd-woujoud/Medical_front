import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../Context/AuthContext'
import AuthService from '../Services/authService'
import '../css/login.css'

function Login() {
   const { setUser, setIsAuth, user,setRole } = useContext(AuthContext)
   const [values, setValues] = useState({})

   const onChangeHandler = (e) => {
      setValues({
         ...values,
         [e.target.name]: e.target.value
      })
   }

   const onSubmit = (e) => {
      e.preventDefault();
      AuthService.login(values).then(jsonData => {
         if (jsonData.message=== 'user not found') {
            alert('verifiez votre email ou votre mot de passe')
               
         }
         else{
            console.log('user', jsonData)
            setUser(jsonData.user);
            setIsAuth(jsonData.isAuthenticated);
            setRole(jsonData.role)
           window.location.href = '/home'

         }
      })
   }
   return (
   
      <div>
      <div class="container-fluid  bg">
          <div class="row justify-content-center">
              <div class="col-xs-12 col-sm-6 col-md-12 center">
                  <form class="form-container white" onSubmit={onSubmit}>
                      <p class="text-center " style={{ Color: "white", fontSize: "30px"}}> Login</p>
                      <hr />
                      <div class="form-group">
                          {/* <label for="username">email <sup>*</sup></label> */}
                          <input name='email' onChange={onChangeHandler} type="text" class="form-control mt-5  " id="email"  placeholder="email" required />
                      </div>
                      <div class="form-group">
                          {/* <label for="password">Password <sup>*</sup></label> */}
                          <input name='password' onChange={onChangeHandler} type="password" class="form-control mt-5" id="password"  placeholder="Password" required/>
                      </div>
                      <button type="submit" id="btnn" class="btn  mb-5 mt-4 " >Se connecter</button>
                      <p id="signuplink ">  Don't have an account ? <a  href="/signUp"  > Sign Up</a> here</p>
                  </form>

              </div>
          </div>

      </div></div>
   )
}

export default Login