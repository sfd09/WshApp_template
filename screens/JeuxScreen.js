import React, { useState, useEffect } from 'react';
import {
  View, Text, TouchableOpacity, StyleSheet, Dimensions, FlatList
} from 'react-native';

const { width, height } = Dimensions.get('window');

export default function JeuxScreen() {
  const [selectedGame, setSelectedGame] = useState(null);
  const [score, setScore] = useState(0);
  const [bubblePosition, setBubblePosition] = useState({ top: 100, left: 100 });
  const [breathText, setBreathText] = useState("Inspire...");
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);

  // ---------- Jeu 1 : Tap Tap ----------
  const handleTap = () => {
    setScore(score + 1);
    setBubblePosition({
      top: Math.random() * (height - 200),
      left: Math.random() * (width - 100),
    });
  };

  // ---------- Jeu 2 : Respiration ----------
  useEffect(() => {
    if (selectedGame === "Breath") {
      const cycle = ["Inspire...", "Expire...", "Pause..."];
      let index = 0;
      const interval = setInterval(() => {
        setBreathText(cycle[index % cycle.length]);
        index++;
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [selectedGame]);

  // ---------- Jeu 3 : Mémoire ----------
  const colors = ["🔴", "🟢", "🔵", "🟡"];
  useEffect(() => {
    if (selectedGame === "Memory") {
      const newSeq = Array.from({ length: 3 }, () => colors[Math.floor(Math.random() * colors.length)]);
      setSequence(newSeq);
      setUserSequence([]);
      setIsCorrect(null);
    }
  }, [selectedGame]);

  const handleMemoryTap = (color) => {
    const updated = [...userSequence, color];
    setUserSequence(updated);
    if (updated.length === sequence.length) {
      setIsCorrect(JSON.stringify(updated) === JSON.stringify(sequence));
    }
  };

  // ---------- Affichage ----------
  const renderGame = () => {
    switch (selectedGame) {
      case "TapTap":
        return (
          <>
            <Text style={styles.gameTitle}>💥 Score : {score}</Text>
            <TouchableOpacity
              style={[styles.bubble, { top: bubblePosition.top, left: bubblePosition.left }]}
              onPress={handleTap}
            >
              <Text style={styles.bubbleText}>🎯</Text>
            </TouchableOpacity>
          </>
        );

      case "Breath":
        return (
          <View style={styles.centerBox}>
            <Text style={styles.breath}>{breathText}</Text>
          </View>
        );

      case "Memory":
        return (
          <View style={styles.centerBox}>
            <Text style={styles.memoryTitle}>🧠 Retiens la séquence</Text>
            <Text style={styles.memorySequence}>{sequence.join(" ")}</Text>
            <View style={styles.colorRow}>
              {colors.map((c) => (
                <TouchableOpacity key={c} onPress={() => handleMemoryTap(c)} style={styles.colorBox}>
                  <Text style={{ fontSize: 30 }}>{c}</Text>
                </TouchableOpacity>
              ))}
            </View>
            {isCorrect !== null && (
              <Text style={styles.resultText}>
                {isCorrect ? "✅ Bravo !" : "❌ Essaie encore"}
              </Text>
            )}
          </View>
        );

      default:
        return (
          <View style={styles.menu}>
            <Text style={styles.title}>🎮 Jeux Anti-Stress</Text>
            <TouchableOpacity style={styles.button} onPress={() => setSelectedGame("TapTap")}>
              <Text style={styles.buttonText}>💥 Tap Tap</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setSelectedGame("Breath")}>
              <Text style={styles.buttonText}>🌬️ Respiration</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => setSelectedGame("Memory")}>
              <Text style={styles.buttonText}>🧠 Mémoire</Text>
            </TouchableOpacity>
          </View>
        );
    }
  };

  return <View style={styles.container}>{renderGame()}</View>;
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#e0f7fa', paddingTop: 40 },
  title: { fontSize: 26, fontWeight: 'bold', textAlign: 'center', marginBottom: 30 },
  button: {
    backgroundColor: '#007aff',
    paddingVertical: 14,
    borderRadius: 10,
    marginHorizontal: 40,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: { color: 'white', fontSize: 18, fontWeight: '600' },
  bubble: {
    position: 'absolute',
    width: 80,
    height: 80,
    backgroundColor: '#007aff',
    borderRadius: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bubbleText: { fontSize: 30, color: '#fff' },
  gameTitle: { textAlign: 'center', fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  centerBox: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  breath: { fontSize: 32, fontWeight: 'bold', color: '#333' },
  memoryTitle: { fontSize: 20, marginBottom: 10 },
  memorySequence: { fontSize: 28, marginBottom: 20 },
  colorRow: { flexDirection: 'row', justifyContent: 'space-around', width: '100%' },
  colorBox: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 12,
    marginHorizontal: 5,
    elevation: 2,
  },
  resultText: { fontSize: 20, marginTop: 20 },
  menu: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});
