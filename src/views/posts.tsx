import { Container } from 'native-base';
import React, { useContext, useEffect } from "react";
import { ActivityIndicator, View } from 'react-native';
import 'react-native-gesture-handler';
import { FlatList } from "react-native-gesture-handler";
import { SafeAreaView } from 'react-native-safe-area-context';
import { PostsContext } from '../app';
import PostCard from '../components/post-card';
const PostsList = () => {
    const {fetchPosts, posts,isLoading} = useContext(PostsContext);
    useEffect(() => {
        fetchPosts()
        return () => {
        }
    }, [])

    const footer = () => {
        return (
            <View style={{flex:1,alignItems:"center"}}>
                {(isLoading === true) && <ActivityIndicator size="large" color='red'/>}
            </View>
        );
    };
    const getMore = () => {
      fetchPosts()
      };
    return (
        <Container>
            <SafeAreaView>
            <FlatList
                  data={posts}
                  renderItem={ ({item})=><PostCard item={item}/>}
                  keyExtractor={(item, index) => index.toString()}
                  onEndReachedThreshold={0.1}
                  onEndReached={getMore}
                  initialNumToRender = {10}
                  ListFooterComponent={footer}
                  bounces={false}
              />
            </SafeAreaView>
        </Container>  )
  }

  export default PostsList
