import React from 'react';
import BlogCard from './BlogCard';

const DS = ({cardData}) => {
    
    const dsdata = cardData.filter((item) => item.corse === "DS");
    return (
      <>
        <div className="container text-center mt-5">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {dsdata.map((item, index) => {
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

export default DS;