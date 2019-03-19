import React from "react";

const NewsList = props => {
  return !props.post ? (
    <p className="loading-text">Loading...</p>
  ) : (
    props.post.map(post => {
      return (
        <div key={post.name} className="single-post-card">
          <a href={post.url}>
            <img
              src={
                !null
                  ? post.urlToImage
                  : "https://img.timesnownews.com/story/1551631536-Cricket-AP.jpg"
              }
              alt={post.title}
              title={post.title}
              className="post-featured-image"
            />
          </a>
          <a href={post.url} target="_blank" className="article-title-link">
            <h3 className="post-title">{post.title}</h3>
          </a>

          <p className="post-desc"> {post.description}</p>
          <a href={post.url} className="read-more link">
            Read More <span className="arrow-anim">&#10230;</span>
          </a>
        </div>
      );
    })
  );
};

export default NewsList;
