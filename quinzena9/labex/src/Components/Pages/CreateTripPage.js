import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const CreateTripTitle = styled.h1`
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

const ContainerCreateTrip = styled.div`
text-align: center;
margin: 6vh;
width: 40vw;
margin-left: auto;
margin-right: auto;
padding: 10vw;
border: 2px solid #CD6600;
transition: 0.10s;
border-radius: 40px;
`


const Input = styled.input`
width: 30vw;
height: 3vh;
cursor: pointer;
background-color: #4F4F4F;
color: white;
font-size: 16px;
border-color: #CD6600;
border-radius: 10px;
`

const Button = styled.button`
color: #CD6600;
margin: 4vh;
width: 20vw;
height: 10vh;
cursor: pointer;
background-color: #4F4F4F;
border-color: #CD6600;
  border-radius: 10px;
&:hover{

      -webkit-transform: scale(1.3);
      -ms-transform: scale(1.3);
      transform: scale(1.2);
    
}
`

export default function CreateTripLists() {

    const history = useHistory();

    const gotToHome = () => {

        history.push('/');

    };


    //  useEffect(() => {

    //     createTrip();
    // })

    const createTrip = (e) => {

        e.preventDefault();

        axios
            .post(
                'https://us-central1-labenu-apis.cloudfunctions.net/labeX/:aluno/trips'
            )

            .then((res) => {
                console.log(res);

            })

            .catch((err) => {
                alert(err);
            })

        console.log(createTrip)

    }


    return (

        <>

            <ButtonBack
                onClick={gotToHome}>

                Voltar
            </ButtonBack>

            <CreateTripTitle>
                Criar Viagem
            </CreateTripTitle>

            <ContainerCreateTrip>

                <form onSubmit={createTrip}>

                    <Input type='text' placeholder='Nome'></Input>
                    <p />

                    <Input type='select' placeholder='Escolha um planeta'></Input>
                    <p />

                    <Input type='date'></Input>
                    <p />


                    <Input type='text' placeholder='Descrição'></Input>
                    <p />


                    <Input type='text' placeholder='Duração em dias'></Input>
                    <p />

                    <Button
                    >

                        Criar
                    </Button>

                </form>

            </ContainerCreateTrip>


        </>
    )
}