import React, { useReducer } from "react";

//Create context
//Add provider to the context
//Add value to that provider

const BlogContext = React.createContext();

const blogReducer = (state, action) => {
  switch (action.type) {
    case "add_blog_post":
      return [...state, { title: `Title: ${state.length + 1}` }];
    default:
      return state;
  }
};

export const BlogProvider = ({ children }) => {
  // destructuring assignment - state, dispatch
  // useReducer -> first argument - reducer function, second - initial state
  const [blogPosts, dispatch] = useReducer(blogReducer, []);

  const addBlogPost = () => {
    dispatch({ type: "add_blog_post" });
  };

  return (
    <BlogContext.Provider value={{ data: blogPosts, addBlogPost }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
