// import React from 'react';
// import axios from 'axios';

// export default class DetalhesUsuario extends React.Component{
//     state = {
//         email: "email",
//         id: "id",
//         name: "name"
//     }

//     detalhesDoUsuario = () => {
//         const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id"

//         axios.get(url, { params: {id: "id"} }, {
//             headers: {
//                 Authorization: 'guilherme-silva-munoz'
//             }
//         })
//         .then((res) => {
//             this.setState({id: res.data, name: res.data, email: res.data })
//         })
//         .catch((err) => {
//           alert('Ocorreu um erro, tente novamente!')
//         })
//     }

//     render()
//     {
//         return(

//          <div>
//              <h2>Detalhes do Usuario</h2>
//          </div>

//         )
//     }
// }