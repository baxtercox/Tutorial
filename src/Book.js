import React from "react";

const Book = ({ job, title, author, number, popularity, img }) => {
  const clickHandler = (e) => {
    alert("hello world");
    console.log(e);
  };

  const complexExample = (author) => {
    console.log(author);
  };

  return (
    <article
      className="book"
      onMouseOver={() => {
        console.log(title);
      }}
    >
      <img src={img} alt="" />
      <p>{job}</p>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <p>{number}</p>
      <p>{author}</p>
      <p>{popularity}</p>
      <button type="button" onClick={clickHandler}>
        reference example
      </button>
      <button type="button" onClick={() => complexExample(author)}>
        more complex example
      </button>

      <Genre />
      <Price />
    </article>
  );
};

const Genre = () => <h1>crazy scary</h1>;
const Price = () => <h2>$5</h2>;

export default Book;
