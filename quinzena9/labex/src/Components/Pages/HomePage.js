import React from 'react';
import { useHistory } from 'react-router-dom';


export default function HomePage() {

    const history = useHistory();


    const gotToListTripsPage = () => {

        history.push('/trips/list');

    };

    const goToLoginPage = () => {

        history.push('/login');

    }

    return (

        <>
            <h1> LabX </h1>

            <button
                onClick={gotToListTripsPage}>
                Lista de Viagens
            </button >
            <button
                onClick={goToLoginPage}>
                Login Admin
            </button>

        </>


    )

}
