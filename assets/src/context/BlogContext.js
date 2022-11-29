import React from "react";

//Create context
//Add provider to the context
//Add value to that provider

const BlogContext = React.createContext();

export const BlogProvider = ({ children }) => {
  return <BlogContext.Provider value={5}>{children}</BlogContext.Provider>;
};

export default BlogContext;
