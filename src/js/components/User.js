import React, { Component } from "react";
import { connect } from "react-redux";
import {AUTH_ENDPOINT} from "../constants/services";

const mapStateToProps = state => {
    // define as props do componente consoante o state do redux
    return {
        token: state.auth,
        user: state.user
    };
};

class ConnectedUser extends Component{

  constructor(){
      super();
  }

  render()
  {

      if(this.props.user.length > 0)
      {
          return (

              <li>
                  { this.props.user[0].name }
              </li>

          );
      }
      else
      {
          return (

              <li>
                  <a href={ AUTH_ENDPOINT }>Login</a>
              </li>

          );
      }
    }
}

// executar a função connect do Redux para:
// 1) mapear o State do Redux à propriedades locais do componente (mapStateToProps)
// 2) mapear as ações a serem invocadas às ações locais nas props do componente (mapDispatchToProps)
const User = connect(mapStateToProps)(ConnectedUser);

export default User;
