import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";



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



    useEffect(() => {


        const loginSubmit =



            async () => {

                const body = {
                    email: email,
                    password: password
                };


                try {

                    const { response } =

                        await axios

                            .post(
                                'https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/login',
                                body
                            )

                    console.log("ok ", response.token);
                    localStorage.setItem('token', response.token);
                    history.push('/admin/trips/:id')

                }

                catch (err) {

                    alert(err, 'ERRO!!!')
                }

            }

        loginSubmit();


    }, []);


    return (

        <>
            <h1>Login Page</h1>

                <input
                    placeholder='Email'
                    type='email'
                    value={email}
                    onChange={handleEmail}

                />

                <input
                    placeholder='Password'
                    type='password'
                    value={password}
                    onChange={handlePassword}

                />

                <button
                    onClick={loginSubmit}

                    Enviar
                />

            </>

        
    )
}