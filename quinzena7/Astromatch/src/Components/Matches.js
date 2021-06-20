import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';



const CardContainer = styled.div`
text-align: center;
margin: 6vh;
margin-left: auto;
margin-right: auto;
width: 20%;
padding: 10vw;
box-shadow: 8px 8px 8px 8px rgba(0,0,0,0.2);
transition: 0.10s;
border-radius: 10px;
&:hover{
    -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.2);

}
`
const ProfilePhotos = styled.div`

justify-content: center;
`

const ButtonMatches = styled.div`
display: flex;
justify-content: space-between;
margin-bottom: 30px;
`

const ButtonMatch = styled.button`
cursor: pointer;
border: 1px solid red;
border-radius: 4px;
width: 60px;
&:hover{
     background-color: red;
        -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
`

const ButtonNotMatch = styled.button`
cursor: pointer;
border: 1px solid red;
border-radius: 4px;
width: 60px;
&:hover{
         background-color: red;
          -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
`


const CleanData = styled.button`
cursor: pointer;
display: block;
margin-left: auto;
margin-right: auto;
border-color: transparent;
background-color: transparent;
&:hover{
    &:hover{
          -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.8);

`


const SwitchPage = styled.button`
cursor: pointer;
display: block;
margin-left: auto;
margin-right: auto;
border-color: transparent;
background-color: transparent;
&:hover{
          -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.8);
`



export default function Matches() {

    const aluno = 'guilherme-silva-munoz'


    const [choiceMatch, setChoiceMatch] = useState([]);

    const getProfile = () => {
        const url = 'https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/person'
        const Body = {
            "profile": {
                "id": '',
                "age": '',
                "name": '',
                "photo": '',
                "bio": ''
            }
        }

        axios.get(url, Body, {
            headers: {
                aluno: "guilherme-silva-munoz"
            }
        })
            .then((res) => {
                console.log(res)
                setChoiceMatch(res.data.profile)
            })
            .catch(err => {
                return alert(err = "Ops! Parece que estamos com um problema técnico, por favor tente novamente mais tarde!!")
            })
    };

    const chooseProfile = () => {

        const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/${aluno}/choose-person`
const Body = {
    "id": '',
    "choice": true
}

axios.post( url, Body, {
    headers: {
        aluno: 'guilherme-silva-munoz'
    }
} )
.then( res => {
    console.log(getProfile)
    getProfile()
})
    }


    return (

        <div>



            <SwitchPage>
                &#128257;
            </SwitchPage>

            <CleanData>
                &#128686;
            </CleanData>

            <CardContainer>

                <ProfilePhotos>
                    <img src={getProfile.photo} alt={'ProfilesImages'} />
                </ProfilePhotos>

                <ButtonMatches>

                    <ButtonMatch onClick = {() => chooseProfile()}>
                        &#128152;
                    </ButtonMatch>

                    <ButtonNotMatch onClick = {() => chooseProfile(false)}>
                        &#10060;
                    </ButtonNotMatch>

                </ButtonMatches>

            </CardContainer>







        </div>

    )
}
