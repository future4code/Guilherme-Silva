import React from "react";
import { useHistory } from "react-router-dom";


export default function ListTripspage() {

    const history = useHistory();

    const gotToApplicationFormPage = () => {

        history.push('/trips/application');

    };

    const goToHome = () => {

        history.push('/');

    }

    return (

        <>

            <h1> List Trips Page </h1>

            < button
                onClick={gotToApplicationFormPage}>
                Formulário de Inscrição
            </button>

            <button
                onClick={goToHome}>
                Home Page
            </button>

        </>
    )
}