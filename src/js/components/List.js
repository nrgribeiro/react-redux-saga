import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return { articles: state.articles };
};

const ConnectedList = ({ articles }) => (
    <ul className="list-group list-group-flush">
        {articles.map(el => (
            <li className="list-group-item" key={el.id} onClick={() => clickAction(el.id)}>
                {el.title}
            </li>
        ))}
    </ul>
);

const clickAction = (id) => {
    console.log(id);
}

const List = connect(mapStateToProps)(ConnectedList);

export default List;