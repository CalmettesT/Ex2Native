import React from 'react';
import { Button, View, Text } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

type homeScreenProp = NativeStackNavigationProp<{ Profile: { name: string } }, 'Profile'>;

const HomeScreen = () => {
  const navigation = useNavigation<homeScreenProp>();
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', { name: 'Votre Nom' })}
      />
    </View>
  );
};

export default HomeScreen;
