{
  /* <div id = "conatiner">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
    </div> */
}
// const containerdiv = React.createElement('div',{id:"container"},[
//     React.createElement('h1',{},"Heading 1"),
//     React.createElement('h2',{},"Heading 2")
// ]);

{
    /* <div id = "container1">
        <div id="container1">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
        </div>
        <div id="container2">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
        </div>
    </div> */
}
const containerdiv1 = React.createElement('div',{id:"container"},[
    React.createElement('div',{id:"container1"},[
        React.createElement('h1',{},"Heading 1"),
        React.createElement('h2',{},"Heading 2")
    ]),
    React.createElement('div',{id:"container2"},[
        React.createElement('h1',{},"Heading 1"),
        React.createElement('h2',{},"Heading 2")
    ])
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(containerdiv1);