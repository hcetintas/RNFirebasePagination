import { Body, Card, CardItem, ListItem } from 'native-base';
import React from 'react';
import { Text } from 'react-native';

export default function PostCard({item}) {
    return (
        <ListItem key={item.id}>
        <Card style={{flex:1}}>
            <CardItem header>
              <Text>{item.title}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text>
                  {item.body}
                </Text>
              </Body>
            </CardItem>
         </Card>
  </ListItem>
    )
}
