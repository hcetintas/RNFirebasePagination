import Post from '../models/post';

export interface PostsContextData {
    posts: Post[];
    isLoading: boolean;
    setLastPost: any;
    fetchPosts: () => void;

  }