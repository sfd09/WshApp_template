import React from 'react';
import { db } from '../firebase';




import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* En-tête */}
      <View style={styles.header}>
        <Text style={styles.title}>Bienvenue sur <Text style={styles.wshApp}>WshApp 💖</Text></Text>
        <Text style={styles.subtitle}>« Chaque émotion est légitime. »</Text>
        <Text style={styles.stats}>🔵 1 248 jeunes connectés</Text>
        <Text style={styles.stats}>💬 8 392 messages de soutien</Text>
        <Text style={styles.stats}>👀 57 000 vues aujourd’hui</Text>
      </View>

      {/* Boutons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ChatScreen')}>
          <Text>📝 Exprimer un ressenti</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() =>
            navigation.navigate('Ressources', { screen: 'PodcastScreen' })
          }>
          <Text>🔍 Explorer</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('JeuxScreen')}>
          <Text>🎮 Pause</Text>
        </TouchableOpacity>
      </View>

      {/* Emojis */}
      <Text style={styles.sectionTitle}>🧠 Comment tu te sens ?</Text>
      <View style={styles.emojiRow}>
        <Text style={styles.emoji}>🥺</Text>
        <Text style={styles.emoji}>😐</Text>
        <Text style={styles.emoji}>🙂</Text>
        <Text style={styles.emoji}>😁</Text>
      </View>

      {/* Témoignages */}
      <Text style={styles.sectionTitle}>📢 Derniers témoignages</Text>

      <View style={styles.testimonialCard}>
        <Text style={styles.testimonialName}>🧘‍♀️ ZenFriend</Text>
        <Text style={styles.testimonialTime}>il y a 2h</Text>
        <Text style={styles.testimonialText}>
          Aujourd’hui j’ai enfin osé en parler à ma mère…{'\n'}Merci WshApp 🙏
        </Text>
      </View>

      <View style={styles.testimonialCard}>
        <Text style={styles.testimonialName}>💬 SupportBoy77</Text>
        <Text style={styles.testimonialTime}>il y a 4h</Text>
        <Text style={styles.testimonialText}>
          Grosse crise d’angoisse hier, j’ai lu des messages ici et ça m’a calmé.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 80,
    backgroundColor: '#fff',
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  wshApp: {
    color: 'green',
  },
  subtitle: {
    fontStyle: 'italic',
    color: '#555',
    marginTop: 5,
    marginBottom: 10,
    textAlign: 'center',
  },
  stats: {
    fontSize: 14,
    marginVertical: 2,
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#d6f5d6',
    padding: 10,
    borderRadius: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 25,
    marginBottom: 10,
  },
  emojiRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 25,
  },
  emoji: {
    fontSize: 30,
  },
  testimonialCard: {
    backgroundColor: '#f3e9ff',
    borderRadius: 12,
    padding: 15,
    marginBottom: 15,
  },
  testimonialName: {
    fontWeight: 'bold',
    marginBottom: 2,
    fontSize: 15,
  },
  testimonialTime: {
    fontSize: 12,
    color: '#666',
    marginBottom: 6,
  },
  testimonialText: {
    fontSize: 14,
    lineHeight: 20,
  },
});

export default HomeScreen;
