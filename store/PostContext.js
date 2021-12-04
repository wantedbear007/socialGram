import {createContext, useState} from 'react';
import DummyData from '../screens/DummyData';
import React from 'react';

const PostContext = createContext({
  image: [],
  text: [],
  addText: text => {},
});

export function PostContextProvider(props) {    
  const [postImages, setPostImages] = useState([]);
  const [postText, setPostText] = useState([]);

  const AddImagesHandler = pictures => {};
  const AddTextHandler = texts => {
    setPostText(prePostText => {
      return prePostText.concat(texts);
    });
  };

  const context = {
    image: postImages,
    text: postText,
    addText: AddTextHandler,
  };

  return (
    <PostContext.Provider value={context}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostContext;
