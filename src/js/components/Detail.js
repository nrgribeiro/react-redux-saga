import React, { Component } from "react";
import { connect } from "react-redux";
import { FETCH_ARTICLES} from "../constants/action-types";
import { fetchArticles } from "../actions/articles";

const mapDispatchToProps = dispatch => {
    // define as actions a executar quando existirem alterações locais que requerem atualização de state
    return {
        fetchArticles: () => dispatch(fetchArticles()),
    };
};

const mapStateToProps = state => {
    // define as props do componente consoante o state do redux
    return { articles: state.articles };
};

class ConnectedDetail extends Component{

    constructor(match) {
        super(match);
    }

    componentDidMount()
    {

        if(this.props.articles.length === 0)
        {
            // chamada inicial para ir buscar os artigos
            this.props.fetchArticles({type: FETCH_ARTICLES});
        }
    }


    render() {
        let article_id = [parseInt(this.props.match.params.id)];
        let article = this.props.articles.filter(function (itm) {
            return article_id.indexOf(itm.key) > -1;
        });

        if (article.length > 0)
        {
            return (
                <div>
                    <p>{article[0].title} </p>
                    <button className="btn btn-danger btn-lg">delete</button>
                </div>
            );
        }
        else
        {
            return (
                <div>
                    <p>Article not found</p>
                </div>
            );
        }
    }
}

// executar a função connect do Redux para:
// 1) mapear o State do Redux à propriedades locais do componente (mapStateToProps)
// 2) mapear as ações a serem invocadas às ações locais nas props do componente (mapDispatchToProps)
const Detail = connect(mapStateToProps, mapDispatchToProps)(ConnectedDetail);

export default Detail;
