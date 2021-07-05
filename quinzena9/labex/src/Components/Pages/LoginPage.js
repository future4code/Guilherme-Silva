import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const ButtonBack = styled.button`
width: 10vw;
height: 6vh;
color: #CD6600;
cursor: pointer;
background-color: #4F4F4F;
border-color: #CD6600;
border-radius: 10px;
&:hover{
      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.1);
    
}
`

const LoginTitle = styled.h1`
letter-spacing: 8px;
color: #CD6600;
text-align: center;
`

const ContainerLogin = styled.div`
text-align: center;
margin: 6vh;
width: 40vw;
margin-left: auto;
margin-right: auto;
padding: 10vw;
border: 2px solid #CD6600;
transition: 0.10s;
border-radius: 40px;
`

const Input = styled.input`
width: 30vw;
height: 3vh;
cursor: pointer;
background-color: #4F4F4F;
color: white;
font-size: 20px;
border-color: #CD6600;
border-radius: 10px;
`

const ButtonSend = styled.button`
color: #CD6600;
margin: 4vh;
width: 20vw;
height: 10vh;
cursor: pointer;
background-color: #4F4F4F;
border-color: #CD6600;
  border-radius: 10px;
&:hover{

      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.2);
    
}
`



export default function LoginPage() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleEmail = (e) => {

        setEmail(e.target.value);
    };

    const handlePassword = (e) => {

        setPassword(e.target.value);
    }

    const goToHome = () => {

        history.push('/')

    }

    //  useEffect(() => {
    //         loginAdmin()
    //     })

    const loginAdmin = (e) => {

        e.preventDefault();

        const body = {
            email: email,
            password: password
        };

        axios
            .post(
                'https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login',
                body
            )
            .then((res) => {
                console.log("ok ", res.token);
                localStorage.setItem('token', res.token);
                history.push('/admin')
            })
            .catch((err) => {
                alert(err)
            })

    }








    return (

        <>

            <ButtonBack
                onClick={goToHome}>

                Voltar
            </ButtonBack>

            <LoginTitle>
                Login
            </LoginTitle>

            <ContainerLogin>

                <form onSubmit={loginAdmin}>

                    <Input
                        placeholder='Email'
                        type='email'
                        value={email}
                        onChange={handleEmail}
                        required>

                    </Input>

                    <p />

                    <Input
                        placeholder='Password'
                        type='password'
                        value={password}
                        onChange={handlePassword}
                        required>

                    </Input>
                    <p />

                    <ButtonSend>
                        Enviar
                    </ButtonSend>

                </form>

            </ContainerLogin>

        </>


    )
}