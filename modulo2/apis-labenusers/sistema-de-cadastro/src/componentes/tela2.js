import React from "react";
import axios from "axios";
import styled from "styled-components";

const headers = {
    headers: {
      Authorization: "mariana-dias-shaw"
    }
  }; 

  const Butao= styled.li`
  background-color: red;
  `

  const Lista = styled.div`
  border: 1px solid;
  padding: 10px;
  margin: 10px;
  height: 18px;
  width: 200px;
  display: flex;
  justify-content: space-between;
  background-color: white;
  `


export default class ListaDeUsuario extends React.Component {
    state = {
        usuario: []
    }

    componentDidMount() {
        this.getAllUsers();
      }
    
      getAllUsers() {
        const url =
          "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";
        
         axios
            .get(url, headers)
            .then((res) => {
            this.setState({
             usuario: res.data
            });
          })
          .catch((err) => {
            console.log(err.response.data);
          });
        }


    deleteUser = (id) => {
        const urll = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
         alert("Usuário será deletado")
        axios
        .delete( urll, headers)
        .then((res) => {
          this.getAllUsers();
      
          this.setState({
           usuario:[]
          });
        })
      }

render() {

const componentsUsuarios = this.state.usuario.map((usuarios) => {
      return <Lista key={usuarios.id}>{usuarios.name} 
         <button onClick={() => this.deleteUser(usuarios.id)}>Deletar</button>
          </Lista>;
     });

    
 return (
    <div>
        <h2>Lista de Usuários</h2>
        <div>
        {componentsUsuarios}
        </div>
    </div>
);
};
};