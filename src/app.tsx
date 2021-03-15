import React, { createContext } from "react";
import 'react-native-gesture-handler';
import { postsContextDefaultValue, usePostsContextValue } from "./utils/posts-context";
import { PostsContextData } from "./utils/types";
import PostsList from './views/posts';
export const PostsContext = createContext<PostsContextData>(postsContextDefaultValue);

function App() {
  const postsContextValue = usePostsContextValue();
  return (
    <PostsContext.Provider value={postsContextValue} >
      <PostsList />
    </PostsContext.Provider>
  );
}
export default App;
