import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const TitleHome = styled.div`
letter-spacing: 8px;
text-align: center;
color: #CD6600;
`

const ContainerButton = styled.div`
margin: 30vh;
display: flex;
justify-content: space-around;
`

const ButtonTripsPage = styled.button`
width: 20vw;
height: 20vh;
color: #CD6600;
cursor: pointer;
border: 4px solid #CD6600;
border-radius: 10px;
background-color: #4F4F4F;
&:hover{
      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.2);
    
}
`

const ButtonLoginPage = styled.button`
width: 20vw;
height: 20vh;
color: #CD6600;
cursor: pointer;
border-radius: 10px;
border: 4px solid #CD6600;
background-color: #4F4F4F;
&:hover{
      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.2);
}
`



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

            <TitleHome>

                <h1>
                    LabX
                </h1>

            </TitleHome>


            <ContainerButton>
                <ButtonTripsPage
                    onClick={gotToListTripsPage}>

                    Viagens
                </ButtonTripsPage>



                <ButtonLoginPage
                    onClick={goToLoginPage}>

                    Área Admin
                </ButtonLoginPage>
            </ContainerButton>





        </>


    )

}
