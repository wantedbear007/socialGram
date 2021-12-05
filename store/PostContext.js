import {createContext, useState} from 'react';
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
    {
      description:
        'Hey there ! This is a line to text and style component. Thankyou for for time.',
    },
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

  const [content, setImages] = useState(postData);

  const setContent = pic => {
    setImages(prev => [pic, ...prev]);
  };

  return (
    <PostContext.Provider value={{content, setContent}}>
      {props.children}
    </PostContext.Provider>
  );
}

export default PostContext;
