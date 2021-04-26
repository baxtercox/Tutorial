import React from "react";
import ReactDom from "react-dom";
import "./index.css";

//component capital case letter
//stateless functional component
//always return JSX

// CSS

function BookList() {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src="https://images-na.ssl-images-amazon.com/images/I/51XhQYvFvqL._AC_SX184_.jpg"
    alt=""
  />
);

const Title = () => <h1>I dont knoe the title</h1>;

const Author = () => {
  return <h3>Random author</h3>;
};

ReactDom.render(<BookList />, document.getElementById("root"));
