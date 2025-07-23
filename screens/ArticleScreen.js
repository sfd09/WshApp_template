import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const articles = [
  {
    id: '1',
    title: '5 techniques pour apaiser l’anxiété',
    description: 'Des outils concrets à appliquer au quotidien.',
    content: `Voici 5 astuces simples pour calmer ton anxiété :
    
• 🎧 Respire profondément pendant 1 minute.  
• 🧠 Récite-toi une phrase rassurante ("Ça va aller...").  
• 📝 Note ce que tu ressens sur papier.  
• 💦 Rafraîchis ton visage à l’eau froide.  
• 📵 Prends une pause des réseaux pendant 15 minutes.

Respire. Tu n’es pas seul·e 💙`,
  },
  {
    id: '2',
    title: 'Bien respirer pour mieux vivre',
    description: 'Découvre la cohérence cardiaque en pratique.',
    content: `La cohérence cardiaque aide à réguler ton stress. Essaie cet exercice :

• 🕒 Inspire pendant 5 secondes.  
• 😌 Expire doucement pendant 5 secondes.  
• 🧘 Répète ce cycle pendant 5 minutes, 3 fois par jour (matin, midi, soir).

Tu peux le faire en fermant les yeux ou en écoutant de la musique douce. Ça change tout ✨`,
  },
  {
    id: '3',
    title: 'Bien dormir naturellement',
    description: 'Conseils pratiques pour t’endormir plus sereinement.',
    content: `Tu as du mal à t'endormir ? Voici quelques habitudes à tester :

• 📵 Éteins les écrans 30 min avant le coucher.  
• ☕ Pas de café ou thé après 16h.  
• 🌿 Bois une tisane apaisante (camomille, tilleul…).  
• 🕯️ Crée une ambiance calme : lumière douce, chaleur, silence.  
• 📖 Préfère lire ou écouter un podcast plutôt que scroller.

Applique 1 conseil chaque soir, et ton sommeil s’améliorera 🌙`,
  },
];

export default function ArticleScreen() {
  const openArticle = (item) => {
    Alert.alert(item.title, item.content);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📚 Articles & Conseils</Text>
      <FlatList
        data={articles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => openArticle(item)}>
            <Text style={styles.articleTitle}>{item.title}</Text>
            <Text style={styles.articleDescription}>{item.description}</Text>
            <Text style={styles.link}>Voir les conseils ➜</Text>
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
    borderRadius: 10,
    backgroundColor: '#f0f4c3',
    marginBottom: 15,
  },
  articleTitle: { fontSize: 18, fontWeight: 'bold' },
  articleDescription: { fontSize: 14, color: '#555', marginVertical: 5 },
  link: { color: '#33691e', marginTop: 10, fontWeight: 'bold' },
});
