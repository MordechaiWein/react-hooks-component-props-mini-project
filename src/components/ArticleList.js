import React from "react";
import blogData from "../data/blog";
import Article from "./Article";


function ArticleList({posts}) {
    const arrayOfArticle = posts.map((post) => (
        <Article key = {post.id} title = {post.title} date = {post.date} preview = {post.preview} minutes = {post.minutes}/>
    ))
   return (
        
        <main>
            {arrayOfArticle}
         </main> 
     )
}

export default ArticleList;