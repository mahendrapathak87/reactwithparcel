import React from "react";
import ReactDOM from "react-dom";

const heading = React.createElement(
    "h1",
    {
        id: "title",
    },
    "Heading1 parcel"
);

const heading1 = React.createElement(
    "h2",
    {
        id: "test",
    },
    "Heading2 "
);

const container = React.createElement(
    "div",
    {
        id: "container",
    },
    [heading, heading1]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);