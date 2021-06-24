import React from "react";
import { useHistory } from "react-router-dom";

export default function AdminHomePage() {

    const history = useHistory();

    const goToCreateTripPage = () => {

        history.push('/admin/trips/create');

    };

    const goToTripDetails = () => {

        history.push('/admin/trips/:id');
    }

    return (
        <>

            <h1>Admin Home Page</h1>

            <button
                onClick={goToCreateTripPage}>
                Criar Viagem
            </button>

            <button
                onClick={goToTripDetails}>
                Detalhes Viagem
            </button>


        </>
    )
}