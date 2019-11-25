import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticle, fetchArticles } from "../actions/articles";
import { Link } from 'react-router-dom'

const mapDispatchToProps = dispatch => {
    // define as actions a executar quando existirem alterações locais que requerem atualização de state
    return {
        deleteArticle: article => dispatch(deleteArticle(article)),
        fetchArticles: () => dispatch(fetchArticles()),
    };
};

const mapStateToProps = state => {
    // define as props do componente consoante o state do redux
    console.log('state articles: ', state.articles);
    return { articles: state.articles };
};

class ConnectedList extends Component{

  constructor(){
      super();
    // definir o contexto da função "clickAction" para que possa aceder à propriedade "this"
      // https://medium.freecodecamp.org/this-is-why-we-need-to-bind-event-handlers-in-class-components-in-react-f7ea1a6f93eb
    this.clickAction = this.clickAction.bind(this);
  }

  clickAction(article) {
      // executar a função de apagar o artigo
    this.props.deleteArticle(article);
  }

  componentDidMount()
  {
      if(this.props.articles.length < 1)
      {
        // chamada inicial para ir buscar os artigos
        this.props.fetchArticles({type: 'FETCH_ARTICLES'});
      }
  }


  render()
  {
    const articles = this.props.articles;
    console.log('render articles ', articles);
    return (
        <ul className="list-group list-group-flush">
            {articles.map((el, index) => (

                // para cada item dentro da array articles, criar um título e um botão delete
                <li className="list-group-item" key={index}>

                    <Link to={ `/detail/${el.id}` }>{el.title}</Link>

                    <button onClick={() => this.clickAction(el)} className="btn btn-danger btn-lg">delete</button>
                </li>
            ))}
        </ul>
      );
    }
}

// executar a função connect do Redux para:
// 1) mapear o State do Redux à propriedades locais do componente (mapStateToProps)
// 2) mapear as ações a serem invocadas às ações locais nas props do componente (mapDispatchToProps)
const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;
