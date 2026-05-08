import React, { useEffect } from 'react';
import { Text, View } from 'react-native';

import '../global.css';
import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';
import { clientApi } from '@/core/actions/movies/clientApi';

const RootLayout = () => {
  useEffect(() => {
    nowPlayingAction().catch((error) => {
      console.error('Failed to load now playing movies:', error);
    });
  }, []);


  // useEffect(() => {
  //   clientApi().catch((error) => {
  //     console.error('Failed to load popular movies:', error);
  //   });
  // }, []);

  return (
    <View>
      <Text>RootLayout</Text>
    </View>
  )
}

export default RootLayout
