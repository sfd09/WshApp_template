// screens/RessourcesStack.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RessourcesScreen from './RessourcesScreen';
import PodcastScreen from './PodcastScreen';
import PlaylistScreen from './PlaylistScreen';
import VideoScreen from './VideoScreen';
import ArticleScreen from './ArticleScreen';
import HelpScreen from './HelpScreen';

const Stack = createNativeStackNavigator();

export default function RessourcesStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="RessourcesMain" component={RessourcesScreen} options={{ title: 'Ressources' }} />
      <Stack.Screen name="PodcastScreen" component={PodcastScreen} options={{ title: 'Podcasts' }} />
      <Stack.Screen name="PlaylistScreen" component={PlaylistScreen} options={{ title: 'Playlists' }} />
      <Stack.Screen name="VideoScreen" component={VideoScreen} options={{ title: 'Vidéos bien-être' }} />
      <Stack.Screen name="ArticleScreen" component={ArticleScreen} options={{ title: 'Articles & Conseils' }} />
      <Stack.Screen name="HelpScreen" component={HelpScreen} options={{ title: 'Contacts utiles' }} />
       
    </Stack.Navigator>
  );
}
