import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { collection, addDoc, onSnapshot, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

const CommunityScreen = () => {
  const navigation = useNavigation();
  const [newComment, setNewComment] = useState('');
  const [communityMessages, setCommunityMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'communityMessages'), orderBy('createdAt', 'asc'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCommunityMessages(messages);
    });
    return unsubscribe;
  }, []);

  const handlePost = async () => {
    if (newComment.trim() === '') return;
    await addDoc(collection(db, 'communityMessages'), {
      author: 'Toi',
      text: newComment,
      createdAt: serverTimestamp(),
    });
    setNewComment('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.innerBox}>
        <Text style={styles.title}>Communauté 🤝</Text>
        <Text style={styles.subtitle}>Ce que les gens disent...</Text>

        <View style={styles.commentsBox}>
          {communityMessages.map((msg, index) => (
            <Text key={msg.id || index} style={styles.comment}>
              👤 {msg.author} : "{msg.text}"
            </Text>
          ))}
        </View>

        <Text style={styles.sectionTitle}>📝 Partage ton ressenti</Text>
        <TextInput
          value={newComment}
          onChangeText={setNewComment}
          placeholder="Exprime ce que tu ressens..."
          style={styles.input}
          multiline
        />
        <TouchableOpacity style={styles.postButton} onPress={handlePost}>
          <Text style={styles.buttonText}>Publier</Text>
        </TouchableOpacity>

        <Text style={styles.sectionTitle}>🧠 Les bons conseils des autres</Text>
        <View style={styles.tipBox}>
          <Text style={styles.tip}>💡 "J’écoute une musique calme quand je stresse."</Text>
          <Text style={styles.tip}>💡 "Je marche un peu dehors quand j’ai le moral à zéro."</Text>
          <Text style={styles.tip}>💡 "Je respire profondément pendant 2 minutes."</Text>
        </View>

        <Text style={styles.sectionTitle}>📊 Comment tu te sens aujourd’hui ?</Text>
        <View style={styles.pollOptions}>
          <TouchableOpacity><Text style={styles.pollOption}>🟢 Bien</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.pollOption}>🟡 Moyennement</Text></TouchableOpacity>
          <TouchableOpacity><Text style={styles.pollOption}>🔴 Mal</Text></TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('ChatScreen')}
        >
          <Text style={styles.buttonText}>🤖 Discuter avec l’IA</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default CommunityScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#f5faff',
    padding: 20,
  },
  innerBox: {
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
  },
  commentsBox: {
    width: '100%',
    marginBottom: 30,
  },
  comment: {
    fontSize: 16,
    marginBottom: 12,
    textAlign: 'left',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    alignSelf: 'flex-start',
  },
  input: {
    width: '100%',
    minHeight: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff',
    marginBottom: 10,
  },
  postButton: {
    backgroundColor: '#28a745',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 14,
    paddingHorizontal: 30,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 40,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  tipBox: {
    backgroundColor: '#e7f5ff',
    borderRadius: 10,
    padding: 10,
    width: '100%',
    marginBottom: 20,
  },
  tip: {
    fontSize: 15,
    marginBottom: 8,
  },
  pollOptions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  pollOption: {
    fontSize: 16,
  },
});
