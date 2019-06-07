import React from 'react';
import ReactDOM from 'react-dom';

const heading = React.createElement(
    "h1",
    {
        id: 'page-header',
        className: 'heading',
    },
    "This is heading"
);

ReactDOM.render(
    heading,
    document.getElementById("root")
);