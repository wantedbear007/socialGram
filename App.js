import React from 'react';
import Navigator from './navigation/Navigator';
import {PostContextProvider} from './store/PostContext';

const App = () => {
  return (
    <PostContextProvider>
      <Navigator />
    </PostContextProvider>
  );
};

export default App;
