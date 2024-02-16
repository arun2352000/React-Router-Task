import React from 'react';
import BlogCard from './BlogCard';

const Career = ({ cardData }) => {
  const careerdata = cardData.filter((item) => item.corse === "Career");
  return (
    <>
      <div className="container text-center mt-5">
        <div className="row row-cols-1 row-cols-md-3 g-4">
          {careerdata.map((item, index) => {
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

export default Career;