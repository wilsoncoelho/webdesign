import React from "react";

const recentPosts = [
    {
      img: "https://www.w3schools.com/w3images/woods.jpg",
      title: "Title in the Woods",
      author: "Wilson Coelho",
      description:
        "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
      date: "June 2, 2020",
    },
    {
      img: "https://www.w3schools.com/w3images/bridge.jpg",
      title: "Title on the Bridge",
      author: "Carol Miranda",
      description:
        "Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl. Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non congue ullam corper. Praesent tincidunt sed tellus ut rutrum. Sed vitae justo condimentum, porta lectus vitae, ultricies congue gravida diam non fringilla.",
      date: "June 1, 2020",
    },
  ];

const RecentPostList = () => {
    return (
      <section className="profile">
        {recentPosts.map((post) => {
          return <RecentPost key={post.id} {...post} />;
        })}
        {/* {<Profile {...profile}/>} */}
      </section>
    );
  };

const RecentPost = ({ title }) => {
  return (
    <>
      <div className='recentPosts'>
          
            <a href='#'>{title}</a>
      </div>

    </>
  );
};

export default RecentPostList;
