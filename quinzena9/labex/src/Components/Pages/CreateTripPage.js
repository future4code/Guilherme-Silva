import React from "react";
import { useHistory } from "react-router-dom";

export default function CreateTripLists() {

    const history = useHistory();

    const gotToHome = () => {

        history.push('/');

    }


    return (

        <>

            <h1> Create Trip Lists</h1>

            <button
                onClick={gotToHome}>
                Home
            </button>

        </>
    )
}