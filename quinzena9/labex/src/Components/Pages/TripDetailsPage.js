import axios from "axios";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";


const TripDetailsTitle = styled.h1`
letter-spacing: 8px;
color: #CD6600;
text-align: center;
`

const ButtonBack = styled.button`
width: 10vw;
height: 6vh;
color: #CD6600;
cursor: pointer;
background-color: #4F4F4F;
border-color: #CD6600;
border-radius: 10px;
&:hover{
      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.1);
    
}
`

export default function TripDetailsPage() {

    const history = useHistory();

    const goToHome = () => {

        history.push('/');

    }



    return (

        <>

            <ButtonBack
                onClick={goToHome}>

                Voltar
            </ButtonBack>

            <TripDetailsTitle>
                Trip Details Page
            </TripDetailsTitle>



        </>

    )
}