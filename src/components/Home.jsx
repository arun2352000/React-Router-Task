import React from "react";
import BlogCard from "./BlogCard";

const Home = ({ cardData }) => {
  return (
    <>
      <div className="container">
            <div className="row row-cols-1 row-cols-md-3 g-4">
      {cardData.map((item, index) => {
        return (
          <>
           
                
                  <BlogCard item={item} index={index} />
                
                  
          </>
        );
      })}
        </div>
            </div>
    </>
  );
};

export default Home;
