import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function TripDetailsPage() {


    const useProtectedPage = () => {

        const history = useHistory();


        useEffect(() => {

            const token = localStorage.getItem('token');

            if (token === null) {
                history.push('/login')
            }

        }, []);

    }

    const TripDetailsPage = () => {
        useProtectedPage()

        useEffect(() => {

            const token = localStorage.getItem('token');
            axios.
                get('https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/3bUbdB1gvPzWrThpazVC', {
                    headers: {
                        auth: token
                    }
                }
                )
                .then((res) => {
                    console.log(res.data)
                })
                .catch((err) => {
                    alert(err.res)
                })
        })
    }

    return (

        <>

            <h1>Trip Details Page</h1>



        </>

    )
}