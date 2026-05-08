import React, { useEffect } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { nowPlayingAction } from '@/core/actions/movies/now-playing.action';

import '../global.css';
import { Stack } from 'expo-router';

const queryClient = new QueryClient();

const RootLayout = () => {
  useEffect(() => {
    nowPlayingAction().catch((error) => {
      console.error('Failed to load now playing movies:', error);
    });
  }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{
        headerShown: false
      }}></Stack>
    </QueryClientProvider>
  )
}

export default RootLayout
