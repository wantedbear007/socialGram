import {createContext, useState} from 'react';
import React from 'react';

const PostContext = createContext({});

export function PostContextProvider(props) {
  const [content, setImages] = useState([]);

  const setContent = post => {
    setImages(prev => [post, ...prev]);
  };

  return (
    <PostContext.Provider value={{content, setContent}}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostContext;
