// screens/ExploreScreen.js
import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function ExploreScreen() {
  const tips = [
    { emoji: '💡', title: 'Astuce du jour', text: 'Respire profondément pendant 1 minute pour te recentrer.' },
    { emoji: '🌈', title: 'Inspiration', text: '“Après la pluie vient le beau temps.”' },
    { emoji: '🎯', title: 'Défi bien-être', text: 'Écris 3 choses positives de ta journée.' },
    { emoji: '🚀', title: 'Mini-action', text: 'Envoie un message gentil à quelqu’un que tu apprécies.' },
    { emoji: '🌟', title: 'Héros du quotidien', text: 'Aujourd’hui, c’est toi ! Tu avances malgré tout.' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>🧭 Explorer pour aller mieux</Text>
      {tips.map((tip, index) => (
        <View key={index} style={styles.card}>
          <Text style={styles.cardEmoji}>{tip.emoji}</Text>
          <Text style={styles.cardTitle}>{tip.title}</Text>
          <Text style={styles.cardText}>{tip.text}</Text>
        </View>
      ))}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🔁 Je veux d'autres idées !</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    backgroundColor: '#f0f9ff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  cardEmoji: {
    fontSize: 32,
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 4,
  },
  cardText: {
    fontSize: 15,
    color: '#444',
  },
  button: {
    marginTop: 30,
    backgroundColor: '#007aff',
    paddingVertical: 12,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
