/*
    STATEFUL Component
    O "state" deste componente é gerido localmente e não pelo Redux
    Nem todos os componentes necessitam de utilizar o redux para gerir o seu "state"
 */

import React, { Component } from "react";
import { connect } from "react-redux";
import uuidv1 from "uuid";
import { addArticle } from "../actions/articles";

const mapDispatchToProps = dispatch => {
    return {
        // define a action para adicionar um novo artigo
        addArticle: article => dispatch(addArticle(article))
    };
};

class ConnectedForm extends Component {
    constructor() {
        super();
        // definir um default state
        this.state = {
            title: "",
        };

        // definir o contexto das funções para que possam aceder à propriedade "this"
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // sempre que existir uma alteração no campo de texto, atualiza a state local do componente
    handleChange(event) {
        this.setState({
            title: event.target.value
        });
    }

    // sempre que o formulário for submetido, executar a action de adicionar o article
    handleSubmit(event) {
        // evita que a página seja recarregada como consequência da submissão do formulário
        event.preventDefault();

        // obter o title presente no state local do componente
        const { title } = this.state;

        // criar um id único que identifique o novo article
        const id = uuidv1();

        // executar a action para adicionar o article
        this.props.addArticle({ title, id });

        // tornar a colocar o state local com o title vazio, para que o campo de input fique vazio
        this.setState({ title: "" });
    }

    render() {
        // obter o title presente no state local do componente
        const { title } = this.state;

        return (
            // associar o evento "onSubmit" à função handleSubmit
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input
                        type="text"
                        className="form-control"
                        id="title"
                        value={title} // associar o title ao value presente no campo de input
                        onChange={this.handleChange} // associar o evento "onChange" à função "handleChange"
                    />
                </div>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
                </button>
            </form>
        );
    }
}

// executar a função connect do Redux
// notar que neste caso não é passada como parâmetro a função "mapStateToProps"
// porque este componente não necessita de aceder ao state do Redux
const Form = connect(null, mapDispatchToProps)(ConnectedForm);

export default Form;
