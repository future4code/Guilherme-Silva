import React from "react";
import { useHistory } from "react-router-dom";

export default function ApplicationFormPage() {

    const history = useHistory();

    const goToHome = () => {

        history.push('/');
        
    }

    return (

        <>

            <h1>Application Form Page</h1>

            <button
                onClick={goToHome}>
                Home
            </button>

        </>
    )
}