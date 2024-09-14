const parent = React.createElement("div", { id: "parent" },
    [
        React.createElement("div", { id: "child-1" },
            [
                React.createElement("h1", {}, "Hello from H1 Tag from child 1st"),
                React.createElement("h2", {}, "Hello from H2 Tag from child 1st")
            ]
        ),
        React.createElement("div", { id: "child-2" },
            [
                React.createElement("h1", {}, "Hello from H1 Tag from child 2nd"),
                React.createElement("h2", {}, "Hello from H2 Tag from child 2nd")
            ]
        )
    ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);

