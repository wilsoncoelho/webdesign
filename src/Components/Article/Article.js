import React from "react";

const articles = [
  {
    img: "https://www.w3schools.com/w3images/woods.jpg",
    title: "TITLE HEADING",
    author: "Wilson Coelho",
    description:
      "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
    date: "June 2, 2020",
  },
  {
    img: "https://www.w3schools.com/w3images/bridge.jpg",
    title: "NEW BEGININGS",
    author: "Carol Miranda",
    description:
      "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
    date: "June 1, 2020",
  },
];

const ArticleList = () => {
  return (
<>
      {articles.map((article) => {
        return <Article key={article.id} {...article} />;
      })}

   </> 
  );
};

const Article = (props) => {
  
  return (
    <section className="article">
      <img src={props.img} alt=""></img>
      <div className='articledes'>
      <h2>{props.title}</h2>
        <h4>
          {props.date} | {props.author}
        </h4>

        <p>{props.description}</p>
        <button className='btnReadMore'>Read More</button>
      </div>
    </section>
  );
};


export default ArticleList;
