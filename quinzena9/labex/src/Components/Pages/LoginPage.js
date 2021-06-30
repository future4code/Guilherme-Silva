import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";


export default function LoginPage() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onChangeEmail = (e) => {

        setEmail(e.target.value);
    };

    const onChangePassword = (e) => {

        setPassword(e.target.value);
    }



    useEffect(() => {

        const body = {
            email: 'email',
            password: 'password'
        };

        const loginSubmit =


            async () => {

                try {

                    const { response } =

                        await axios

                            .get(
                                'https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/3bUbdB1gvPzWrThpazVC',
                                body
                            )

                    console.log("Deu certo: ", response.data.token);
                    localStorage.setItem('token', response.data.token);
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



            <>

                <input
                    placeholder='Email'
                    type='email'
                    value={email}
                    onChange={onChangeEmail}>

                </input>

                <input
                    placeholder='Password'
                    type='password'
                    value={password}
                    onChange={onChangePassword}>

                </input>

                <button
                    >

                    Enviar
                </button>

            </>

        </>
    )
}