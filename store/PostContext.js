import {createContext, useState} from 'react';
import DummyData from '../screens/DummyData';
import React from 'react';

const PostContext = createContext({
  image: [],
  text: [],
  addText: text => {},
});

export function PostContextProvider(props) {
  const postData = [
    {
      description: 'Forest',
      photo:
        'https://images.news18.com/ibnlive/uploads/2021/03/1616320439_international-day-of-forests-shutterstock.jpg?im=FitAndFill,width=1200,height=900',
      
    },
  ];
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

  const [images, setImages] = useState(postData);

  const setPictures = (pic) => {
    setImages(prev => [...prev, pic])
  }

  return (
    <PostContext.Provider value={{images, setPictures}}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostContext;
