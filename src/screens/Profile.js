import * as React from 'react';
import {Button} from 'react';


const ProfileScreen = ({ navigation, route }) => {
    return <Text>This is {route.params.name}'s profile</Text>;
  };

module.exports = ProfileScreen