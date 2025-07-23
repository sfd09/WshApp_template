// screens/PodcastScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-audio';


const podcasts = [
  {
    id: '1',
    title: '🌬️ Respiration guidée',
    description: 'Un moment calme pour se recentrer avec une voix apaisante.',
    url: 'https://ia800207.us.archive.org/15/items/MindfulnessBodyScan/MindfulnessBodyScan.mp3',
  },
  {
    id: '2',
    title: '🧠 Affirmations positives',
    description: 'Renforce ton estime de soi avec des mots doux et puissants.',
    url: 'https://ia800504.us.archive.org/21/items/PositiveAffirmationsForSuccess/PositiveAffirmations.mp3',
  },
  {
    id: '3',
    title: '🧘 Présence et ancrage',
    description: 'Méditation guidée pour te reconnecter au moment présent.',
    url: 'https://ia800301.us.archive.org/23/items/MeditationGuided/MeditationGuided.mp3',
  },
];

export default function PodcastScreen() {
  const [sound, setSound] = useState(null);

  const playSound = async (url) => {
    try {
      if (sound) {
        await sound.unloadAsync();
      }
      const { sound: newSound } = await Audio.Sound.createAsync({ uri: url });
      setSound(newSound);
      await newSound.playAsync();
    } catch (error) {
      console.log('Erreur de lecture :', error);
    }
  };

  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => playSound(item.url)}>
      <Text style={styles.podcastTitle}>{item.title}</Text>
      <Text style={styles.podcastDescription}>{item.description}</Text>
      <Text style={styles.playButton}>▶ Écouter</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🎧 Podcasts Bien-être</Text>
      <FlatList
        data={podcasts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
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
    backgroundColor: '#e0f7fa',
    marginBottom: 15,
  },
  podcastTitle: { fontSize: 18, fontWeight: 'bold' },
  podcastDescription: { fontSize: 14, color: '#555', marginVertical: 5 },
  playButton: { color: '#007aff', marginTop: 8 },
});
