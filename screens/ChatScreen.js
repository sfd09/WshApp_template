import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { collection, addDoc, onSnapshot, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase'; // Assure-toi que le chemin est correct

const ChatScreen = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const q = query(collection(db, 'chat'), orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map(doc => doc.data());
      setMessages(msgs);
    });
    return () => unsubscribe();
  }, []);

  const handleSend = async () => {
    if (input.trim() === '') return;

    // Message de l'utilisateur
    await addDoc(collection(db, 'chat'), {
      sender: 'Toi',
      text: input,
      createdAt: new Date()
    });

    // Réponse automatique de l’IA (simulée)
    const response = getAIResponse(input);
    await addDoc(collection(db, 'chat'), {
      sender: 'IA',
      text: response,
      createdAt: new Date()
    });

    setInput('');
  };

  const getAIResponse = (text) => {
    // Tu peux rendre cette logique plus complexe plus tard
    if (text.toLowerCase().includes('triste')) {
      return "Je suis désolée que tu sois triste. Tu veux en parler ?";
    }
    if (text.toLowerCase().includes('anxieux') || text.toLowerCase().includes('stress')) {
      return "Respire doucement. Tu veux que je te propose un exercice de respiration ?";
    }
    return "Je suis là pour toi. Dis-moi ce que tu ressens 💙";
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.messages}>
        {messages.map((msg, index) => (
          <Text key={index} style={msg.sender === 'IA' ? styles.iaMessage : styles.userMessage}>
            {msg.sender}: {msg.text}
          </Text>
        ))}
      </ScrollView>
      <View style={styles.inputBox}>
        <TextInput
          value={input}
          onChangeText={setInput}
          placeholder="Écris ici..."
          style={styles.input}
        />
        <TouchableOpacity onPress={handleSend} style={styles.sendButton}>
          <Text style={styles.sendText}>Envoyer</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  messages: {
    flex: 1,
    marginBottom: 10,
  },
  userMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#d1e7dd',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    maxWidth: '80%',
  },
  iaMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
    marginBottom: 5,
    maxWidth: '80%',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    borderRadius: 10,
    padding: 10,
    marginRight: 10,
  },
  sendButton: {
    backgroundColor: '#007aff',
    padding: 12,
    borderRadius: 10,
  },
  sendText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
