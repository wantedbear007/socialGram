import {createContext, useState} from 'react';

const PostContext = createContext({
  image: [],
  text: [],
});

const PostContextProvider = props => {
  const [postImages, setPostImages] = useState([]);
  const [postText, setPostText] = useState([]);

  const AddImages = (pictures) => {
      
  };
  const AddText = (texts) => {};

  const context = {
    image: postImages,
    text: postText,
  };

  return (
    <PostContext.Provider value={context}>
      {props.children}
    </PostContext.Provider>
  );
};
