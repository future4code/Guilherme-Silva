import React from "react";
import { useHistory } from "react-router-dom";


export default function LoginPage() {

    const history = useHistory();

    const goToAdminHomePage = () => {

        history.push('admin/trips/list');
    }

    return (

        <>
            <h1>Login Page</h1>

            <button
                onClick={goToAdminHomePage}>
                Admin
            </button>

        </>
    )
}