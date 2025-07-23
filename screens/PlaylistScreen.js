import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const playlists = [
  {
    id: '1',
    title: 'Relax & Unwind 🌿',
    description: 'Musique douce pour te détendre.',
    url: 'https://open.spotify.com/playlist/37i9dQZF1DWU0ScTcjJBdj',
  },
  {
    id: '2',
    title: 'Relax & De‑Stress 😌',
    description: 'Hits zen et découvertes relax.',
    url: 'https://open.spotify.com/playlist/51zd99z9eUdZNnKvvSIhwK',
  },
  {
    id: '3',
    title: 'Relaxing Pop Music 2025 🎧',
    description: 'Pop calme (Eilish, Odell…)',
    url: 'https://open.spotify.com/playlist/14B2TwDjtxY6CGyNIFdL0n',
  },
];

export default function PlaylistScreen() {
  const openSpotify = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎵 Playlists Bien-être</Text>
      <FlatList
        data={playlists}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => openSpotify(item.url)}>
            <Text style={styles.titleText}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
            <Text style={styles.link}>🎧 Écouter sur Spotify</Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  card: {
    padding: 15,
    backgroundColor: '#e3f2fd',
    borderRadius: 10,
    marginBottom: 15,
  },
  titleText: { fontSize: 18, fontWeight: 'bold' },
  description: { fontSize: 14, color: '#555', marginVertical: 5 },
  link: { fontSize: 14, color: '#1db954', marginTop: 8, fontWeight: 'bold' },
});
