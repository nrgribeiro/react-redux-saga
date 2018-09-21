import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteArticle, fetchArticles } from "../actions/articles";

const mapDispatchToProps = dispatch => {
    // define as ações a executar quando existirem alterações locais que requerem alteração/atualização de state
    return {
        deleteArticle: article => dispatch(deleteArticle(article)),
        fetchArticles: () => dispatch(fetchArticles()),
    };
};

const mapStateToProps = state => {
    // define as props do componente consoante o state do redux
    return { articles: state.articles.articles };
};

class ConnectedList extends Component{

  constructor(){
    super();
    this.clickAction = this.clickAction.bind(this);
  }

  clickAction(article) {
    this.props.deleteArticle(article);
  }

  componentDidMount()
  {
      // chamada inicial para ir buscar os artigos
      this.props.fetchArticles({type: 'FETCH_ARTICLES'});
  }


  render()
  {
    const articles = this.props.articles;

    return (
        <ul className="list-group list-group-flush">
            {articles.map((el, index) => (
                <li className="list-group-item" key={index} onClick={() => this.clickAction(el)}>
                    {el.title}<button className="btn btn-danger btn-lg">delete</button>
                </li>
            ))}
        </ul>
      );
    }
}

const List = connect(mapStateToProps, mapDispatchToProps)(ConnectedList);

export default List;
