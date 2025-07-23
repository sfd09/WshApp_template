import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Linking, Alert } from 'react-native';

const contacts = [
  {
    id: '1',
    name: 'SOS Suicide (France)',
    description: 'Écoute anonyme et gratuite 24h/24 - 7j/7',
    phone: '01 45 39 40 00',
  },
  {
    id: '2',
    name: 'Fil Santé Jeunes',
    description: 'Santé, mal-être, sexualité, confidences (12-25 ans)',
    phone: '0800 235 236',
  },
  {
    id: '3',
    name: 'Numéro national de prévention suicide',
    description: 'Gratuit, confidentiel, écoute immédiate',
    phone: '3114',
  },
  {
    id: '4',
    name: 'Enfance en danger',
    description: 'Appel d’urgence pour mineurs en danger',
    phone: '119',
  },
];

export default function HelpScreen() {
  const callNumber = (phone) => {
    Linking.openURL(`tel:${phone}`).catch(() =>
      Alert.alert('Erreur', 'Impossible de lancer l’appel.')
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>📞 Contacts utiles</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => callNumber(item.phone)}>
            <Text style={styles.contactName}>{item.name}</Text>
            <Text style={styles.contactDescription}>{item.description}</Text>
            <Text style={styles.phoneNumber}>📱 {item.phone}</Text>
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
    backgroundColor: '#ffe0b2',
    marginBottom: 15,
  },
  contactName: { fontSize: 18, fontWeight: 'bold' },
  contactDescription: { fontSize: 14, color: '#555', marginVertical: 5 },
  phoneNumber: { color: '#d84315', marginTop: 8, fontWeight: 'bold' },
});
