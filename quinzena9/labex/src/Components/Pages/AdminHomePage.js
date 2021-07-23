import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";

const AdminTitle = styled.h1`
letter-spacing: 8px;
color: #CD6600;
text-align: center;
`
const ContainerButtons = styled.div`
margin: 30vh;
display: flex;
justify-content: space-between;
`

const ButtonCreate = styled.button`
width: 20vw;
height: 20vh;
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


const ButtonTrips = styled.button`
width: 20vw;
height: 20vh;
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


const ButtonOut = styled.button`
width: 20vw;
height: 20vh;
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


export default function AdminHomePage() {

    const history = useHistory();

    const goToCreateTripPage = () => {

        history.push('/admin/trips/create');

    };

    const goToTripList = () => {

        history.push('/admin/trips/list');
    }


    const logout = () => {

        history.push('/login');

    }



    return (

        <>

            <AdminTitle>
                Painel Administrativo
            </AdminTitle>

            <ContainerButtons>

                <ButtonCreate
                    onClick={goToCreateTripPage}>

                    Criar Viagem
                </ButtonCreate>

                <ButtonTrips
                    onClick={goToTripList}>

                    Viagens
                </ButtonTrips>

                <ButtonOut
                    onClick={logout}>

                    Logout
                </ButtonOut>

            </ContainerButtons>

        </>
    )
}