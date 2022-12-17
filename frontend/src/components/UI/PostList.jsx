import React from "react";
import Post from "./Post";

const PostList = ({ data }) => {
     return (
          <>
               {data.map((data, index) => (
                    <Post data={data} key={index} />
               ))}
          </>
     );
};

export default PostList;
