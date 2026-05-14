import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import React from 'react';

import { Stack } from 'expo-router';
import '../global.css';

const queryClient = new QueryClient();

const RootLayout = () => {
  // useEffect(() => {
  //   nowPlayingAction().catch((error) => {
  //     console.error('Failed to load now playing movies:', error);
  //   });
  // }, []);


  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{
        headerShown: false
      }}></Stack>
    </QueryClientProvider>
  )
}

export default RootLayout
