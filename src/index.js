import React from "react";
import ReactDom from "react-dom";

//component capital case letter
//stateless functional component
//always return JSX

function Greeting() {
  return (
    <div>
      <h4>hello world</h4>
      <ul>
        <li>
          <a href="#">Hello world</a>
        </li>
      </ul>
    </div>
  );
}

// const Greeting = () =>{
//   return React.createElement('h1', {}, 'hello world');
// };

ReactDom.render(<Greeting />, document.getElementById("root"));
