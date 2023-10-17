const jsDiv = document.getElementById("dateJs")
const reactDiv = document.getElementById("dateReact")


 //function called render
 const render = () => {
    jsDiv.innerHTML = ` 
        <div class="split">
            JS template
            <input />
            <p>${new Date()}</p>
        </div>
        `; 

 var divToRender = React.createElement(
    // element you want created
    "div",
    // an object concerning the attributes the element needs
    { className: "split" },
    "React template", 
    React.createElement("input"),
    React.createElement(
        "p",
        null,
        new Date().toString()
    ) 
 );
 ReactDOM.render(divToRender, reactDiv);
 }

 setInterval(render, 1000); 