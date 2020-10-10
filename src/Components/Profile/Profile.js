import React from "react";

const profile = {
  img: "https://www.w3schools.com/w3images/avatar_g.jpg",
  firstname: "Jane Miller",
  aboutme:
    "Just me, myself and I, exploring the universe of uknownment. I have a heart of love and a interest of lorem ipsum and mauris neque quam blog. I want to share my world with you.",
};

const MyProfile = () => {
    return (
      <section className="profile">
        {/* {articles.map((article) => {
          return <Card key={article.id} {...article} />;
        })} */}
        {<Profile {...profile}/>}
      </section>
    );
  };

const Profile = ({ img, firstname, aboutme }) => {
  return (
    <>
      <img src={img} />
      <div className='profiledes'>
      <h2>{firstname}</h2>
      <p>{aboutme}</p>
      </div>

    </>
  );
};

export default MyProfile;
