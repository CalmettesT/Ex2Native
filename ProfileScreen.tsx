import React from 'react';
import { View, Text } from 'react-native';
import { RouteProp } from '@react-navigation/native';

type ProfileScreenRouteProp = RouteProp<{ Profile: { name: string } }, 'Profile'>;

type Props = {
  route: ProfileScreenRouteProp;
};

const ProfileScreen: React.FC<Props> = ({ route }) => {
  return (
    <View>
      <Text>Profile Screen</Text>
      <Text>Name: {route.params.name}</Text>
    </View>
  );
};

export default ProfileScreen;