// import React from "react";
// import axios from 'axios';

// export default class Lista extends React.Component {

//     state = {
//         user: []
//     };

//     componentDidMount() {
//         this.getUsers()
//     }

//  getUsers = () => {
//      axios.get('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users', {
//          headers: {
//              Authorization: 'guilherme-silva-munoz'
//          }
//      }).then((res) => {
//          console.log(res)
//          this.setState({user: res} )
//      }).catch((error) => {
//          console.log(error)
//      })
//  }

//  deleteUsers = () => {
//      if(window.confirm('Deseja deletar o usuário?')){  
//          axios.delete('https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/:id').then((res) => {
//         this.getUsers();
//         console.log(res)
//       })
//   }}
   

//     render()

//     {
//        const usersList = this.state.users.map((user) => {

//         return(
//             <div key={user.id}>
//        <p>{user.name}</p>
//        <button onClick={() => this.deleteUsers(user.id)}>Deletar</button>
//             </div>
//         );

//        });

//        return(
//            <div>Lista De Usuários
//            {usersList}
//            </div>
//        )
//     }
// }

