import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Switch, TouchableOpacity, ScrollView } from 'react-native';

export default function ProfileScreen() {
  const [darkMode, setDarkMode] = useState(false);

  const handleLogout = () => {
    alert("✅ Déconnexion réussie. À bientôt !");
  };

  const handleSos = () => {
    alert("🆘 Alerte envoyée à un proche de confiance !");
  };

  const darkColors = {
    background: '#121212',
    text: '#ffffff',
    card: '#1e1e1e',
    subText: '#bbb',
    badge: '#333',
  };

  const lightColors = {
    background: '#f7f7f7',
    text: '#222',
    card: '#ffffff',
    subText: '#666',
    badge: '#e3f2fd',
  };

  const colors = darkMode ? darkColors : lightColors;

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} style={{ backgroundColor: colors.background }}>
      <View style={styles.container}>
        <Image
          source={require('../assets/lottie/avatar.png')}
          style={styles.avatar}
        />

        <Text style={[styles.name, { color: colors.text }]}>👋 Bienvenue, toi !</Text>
        <Text style={[styles.status, { color: colors.subText }]}>
          “Aujourd’hui je me sens plus calme…”
        </Text>

        {/* Badges */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>🎖️ Tes badges</Text>
          <View style={styles.badgeContainer}>
            <Text style={[styles.badge, { backgroundColor: colors.badge }]}>💪 Persévérant</Text>
            <Text style={[styles.badge, { backgroundColor: colors.badge }]}>🧘 Zen</Text>
            <Text style={[styles.badge, { backgroundColor: colors.badge }]}>🎯 Régulier</Text>
            <Text style={[styles.badge, { backgroundColor: colors.badge }]}>💬 Solidaire</Text>
          </View>
        </View>

        {/* Statistiques */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>📊 Tes progrès</Text>
          <Text style={[styles.stat, { color: colors.subText }]}>🗓️ Jours consécutifs : 5</Text>
          <Text style={[styles.stat, { color: colors.subText }]}>🎧 Podcasts écoutés : 12</Text>
          <Text style={[styles.stat, { color: colors.subText }]}>🧠 Humeurs partagées : 7</Text>
        </View>

        {/* Préférences */}
        <View style={[styles.section, { backgroundColor: colors.card }]}>
          <Text style={[styles.sectionTitle, { color: colors.text }]}>⚙️ Préférences</Text>
          <View style={styles.row}>
            <Text style={{ color: colors.text }}>🌙 Mode sombre</Text>
            <Switch value={darkMode} onValueChange={setDarkMode} />
          </View>
        </View>

        {/* Boutons */}
        <TouchableOpacity style={[styles.sosButton]} onPress={handleSos}>
          <Text style={styles.sosText}>🆘 Bouton SOS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.logout} onPress={handleLogout}>
          <Text style={styles.logoutText}>🚪 Se déconnecter</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: 'center', paddingTop: 50, paddingHorizontal: 20 },
  avatar: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  name: { fontSize: 24, fontWeight: 'bold' },
  status: { fontSize: 16, fontStyle: 'italic', marginBottom: 20, textAlign: 'center' },
  section: {
    width: '100%',
    borderRadius: 12,
    padding: 15,
    marginVertical: 10,
    elevation: 2,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  badgeContainer: { flexDirection: 'row', flexWrap: 'wrap', gap: 8 },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    fontSize: 14,
    color: '#007aff',
    margin: 4,
  },
  stat: { fontSize: 14, marginBottom: 4 },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  sosButton: {
    backgroundColor: '#ff5252',
    padding: 12,
    borderRadius: 10,
    marginTop: 30,
    width: '100%',
    alignItems: 'center',
  },
  sosText: { color: 'white', fontWeight: 'bold', fontSize: 16 },
  logout: {
    marginTop: 20,
    padding: 12,
    backgroundColor: '#888',
    borderRadius: 10,
    width: '100%',
    alignItems: 'center',
  },
  logoutText: { color: '#fff', fontWeight: 'bold' },
});
