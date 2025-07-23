import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking } from 'react-native';

const videos = [
  {
    id: '1',
    title: 'Relaxation guidée – 5 minutes',
    description: 'Idéal pour te recentrer rapidement.',
    url: 'https://www.youtube.com/watch?v=MIr3RsUWrdo',
  },
  {
    id: '2',
    title: 'Méditation du soir',
    description: 'Un moment de calme avant de dormir.',
    url: 'https://www.youtube.com/watch?v=inpok4MKVLM',
  },
  {
    id: '3',
    title: 'Respiration profonde anti-stress',
    description: 'Exercice de cohérence cardiaque guidé.',
    url: 'https://www.youtube.com/watch?v=kgTL5G1ibIo',
  },
];

export default function VideoScreen() {
  const openURL = (url) => {
    Linking.openURL(url);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎬 Vidéos Bien-être</Text>
      <FlatList
        data={videos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.videoTitle}>{item.title}</Text>
            <Text style={styles.videoDescription}>{item.description}</Text>
            <TouchableOpacity onPress={() => openURL(item.url)}>
              <Text style={styles.playButton}>▶ Regarder</Text>
            </TouchableOpacity>
          </View>
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
    borderRadius: 10,
    backgroundColor: '#ffe0b2',
    marginBottom: 15,
  },
  videoTitle: { fontSize: 18, fontWeight: 'bold' },
  videoDescription: { fontSize: 14, color: '#555', marginVertical: 5 },
  playButton: { color: '#d84315', marginTop: 10, fontWeight: 'bold' },
});
