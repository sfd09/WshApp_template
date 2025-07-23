import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image, useColorScheme } from 'react-native';
import LottieView from 'lottie-react-native';
import { useNavigation } from '@react-navigation/native';

const resources = [
  {
    title: "🎧 Podcasts bienveillants",
    description: "Écoute des histoires inspirantes pour te recentrer.",
    image: require('../assets/lottie/podcast.png'),
    screen: 'PodcastScreen',
  },
  {
    title: "🎵 Playlists apaisantes",
    description: "Des musiques pour te calmer ou te rebooster.",
    image: require('../assets/lottie/playlist.png'),
    screen: 'PlaylistScreen',
  },
  {
    title: "📹 Vidéos bien-être",
    description: "Yoga, respiration, conseils psy et plus encore.",
    image: require('../assets/lottie/video.png'),
    screen: 'VideoScreen',
  },
  {
    title: "📚 Articles & conseils",
    description: "Des infos fiables et bien expliquées.",
    image: require('../assets/lottie/article.png'),
    screen: 'ArticleScreen',
  },
  {
    title: "📞 Contacts utiles",
    description: "Accès direct à des numéros d’aide et soutien.",
    image: require('../assets/lottie/help.png'),
    screen: 'HelpScreen',
  },
];

export default function RessourcesScreen() {
  const navigation = useNavigation();
  const theme = useColorScheme();
  const isDark = theme === 'dark';

  return (
    <View style={[styles.container, { backgroundColor: isDark ? '#121212' : '#f7f7f7' }]}>
      <LottieView
        source={require('../assets/lottie/support.png')}
        autoPlay
        loop
        style={styles.lottie}
      />
      <Text style={[styles.title, { color: isDark ? '#fff' : '#222' }]}>
        Découvre nos ressources pour aller mieux
      </Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        {resources.map((res, index) => (
          <TouchableOpacity
            key={index}
            style={[styles.card, { backgroundColor: isDark ? '#1f1f1f' : '#fff' }]}
            onPress={() => navigation.navigate(res.screen)}
          >
            <Image source={res.image} style={styles.cardImage} />
            <View style={styles.cardContent}>
              <Text style={[styles.cardTitle, { color: isDark ? '#fff' : '#222' }]}>{res.title}</Text>
              <Text style={[styles.cardText, { color: isDark ? '#bbb' : '#555' }]}>{res.description}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  lottie: {
    width: '100%',
    height: 150,
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  card: {
    flexDirection: 'row',
    borderRadius: 16,
    padding: 12,
    marginBottom: 16,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  cardImage: {
    width: 60,
    height: 60,
    borderRadius: 12,
    marginRight: 12,
  },
  cardContent: {
    flex: 1,
    justifyContent: 'center',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '600',
  },
  cardText: {
    fontSize: 14,
    marginTop: 4,
  },
});
