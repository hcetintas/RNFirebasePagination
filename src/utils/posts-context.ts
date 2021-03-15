
import { firebase } from '@react-native-firebase/firestore';
import { useCallback, useState } from "react";
import 'react-native-gesture-handler';
import Post from '../models/post';
import { Constants } from './constant';
import { PostsContextData } from './types';

export function usePostsContextValue(): PostsContextData {
    const [posts, setPosts] = useState<Post[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const [lastPost, setLastPost] = useState(null)
    let last:any = null;

    const fetchPosts = useCallback(() => {
      console.log(posts)
      setIsLoading(true);
      if(last !== null && last !== undefined){
        firebase.firestore().collection('Posts')
        .orderBy('id')
        .limit(Constants.ITEM_PER_PAGE)
        .startAfter(last)
        .get()
        .then((r)=>{
          console.log("second",r.docs)
            const p = r.docs.map((doc)=>new Post({...doc.data()}))
            setPosts([...posts,...p])
            last = r.docs[r.docs.length-1]

        })
        .finally(()=>{
          setIsLoading(false)
        })
        .catch((e)=>{
        })
      }else{
        firebase.firestore().collection('Posts')
        .orderBy('id')
        .limit(Constants.ITEM_PER_PAGE)
        .get()
        .then((r)=>{
          console.log("first",r.docs)
            const p = r.docs.map((doc)=>new Post({...doc.data()}))
            setPosts([...posts,...p])
            last = r.docs[r.docs.length-1]
        })
        .finally(()=>{
          setIsLoading(false)
        })
        .catch((e)=>{
        })
      }
    }, []);

    return {
      posts,
      isLoading,
      setLastPost,
      fetchPosts
    }
  }
export const postsContextDefaultValue: PostsContextData = {
    posts: [],
    isLoading: false,
    setLastPost: undefined,
    fetchPosts: () => null,

  }
