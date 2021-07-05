import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";


const TitleTripsList = styled.h1`
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

const ButtonForm = styled.button`
display: block;
margin: 0 auto;
width: 10vw;
height: 6vh;
cursor: pointer;
color: #CD6600;
border-radius: 10px;
border-color: #CD6600;
background-color: #4F4F4F;
&:hover{
      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.2);
}
`


export default function ListTripspage() {

    const history = useHistory();

    const gotToApplicationFormPage = () => {

        history.push('/admin/trips/create');

    };

    const goToHome = () => {

        history.push('/');

    }

    return (

        <>


            <ButtonBack
                onClick={goToHome}>
                Voltar
            </ButtonBack>

            <TitleTripsList>
                Viagens
            </TitleTripsList>

            <ButtonForm 
                onClick={gotToApplicationFormPage}>

                Inscreva-se
            </ButtonForm>


        </>
    )
}