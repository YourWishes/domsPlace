import React from 'react';

export default (props) => {
  let height = 100;/* Percentage of width */

  //TODO: Add more methods of resizing this box.
  if(props.ratioWidth && props.ratioHeight) {
    height = 100 / props.ratioWidth * props.ratioHeight;
  }

  //Box Sizer
  return (
    <div className="o-box-sizer" style={{
      paddingBottom: height + '%'
    }} />
  );
};
