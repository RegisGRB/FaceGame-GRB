import React, { Children } from 'react';
import "./InfiniteText";
const InfiniteText = ({Children,className}) => {
    return (
        <div className={`InfiniteText${className}`}>
         <span>{Children}</span><span>{Children}</span><span>{Children}</span><span>{Children}</span>
        </div>
    );
};

export default InfiniteText;