import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

export default function TripDetailsPage() {

    const history = useHistory();

    const goToHome = () => {

        history.push('/');
    }

 useEffect(() => {

     const protectedPage
 })

    return (

        <>
        
            <h1>Trip Details Page</h1>

            <button
                onClick={goToHome}>
                Home
            </button>

        </>

    )
}