import React from "react";
import FeaturedPost from "./FeaturedPost";

const featurePostList = ({ data }) => {
     return (
          <>
               <>
                    {data.map((data, index) => (
                         <FeaturedPost data={data} key={index} />
                    ))}
               </>
          </>
     );
};

export default featurePostList;
