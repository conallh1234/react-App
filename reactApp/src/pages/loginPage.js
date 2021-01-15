import React from "react";
import PageTemplate from '../components/templateLoginPage';
import LoginForm from '../components/loginForm';

const LoginPage = props => {
  
  return (
    <>
    <br></br>
    <PageTemplate>
      <LoginForm></LoginForm>
    </PageTemplate>
    </>
  )
};

export default LoginPage;