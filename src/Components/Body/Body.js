import React from "react";
import ArticleList from "../Article/Article";
import CardList from "../Article/Article";
import MyProfile from "../Profile/Profile";
import RecentPostList from "../RecentPosts/Recentpost";


const Body = () => {
  return (
    <section className="container">
      <div className="column left">
        <ArticleList />
      </div>

      <section className='column right'>
        <ArticleList name='Jane Miller'/>

      </section>
 
    </section>
 
  );
};

export default Body;
