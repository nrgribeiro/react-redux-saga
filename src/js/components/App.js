import React from "react";
import List from "./List";
import Form from "./Form";

// Este é o Componente Base da aplicação onde vão ser carregados os dois "sub-componentes" List e Form

const App = () => (
    <div className="row mt-5">
        <div className="col-md-4 offset-md-1">
            <h2>Articles</h2>
            <List />
        </div>
        <div className="col-md-4 offset-md-1">
            <h2>Add a new article</h2>
            <Form />
        </div>
    </div>
);

export default App;
