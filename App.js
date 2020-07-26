import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import TrackPlayer from 'react-native-track-player';
import { Player } from 'react-native-audio-toolkit';
import { StyleSheet, Text, View, Button, Alert, Image } from "react-native";

export default function App() {
// const audio=   new Player("./assets/beep.wav")


const start = async () => {
    // Set up the player
    await TrackPlayer.setupPlayer();

    // Add a track to the queue
    await TrackPlayer.add({
        id: 'trackId',
        url: require('./assets/beep.wav'),
        title: 'Track Title',
        artist: 'Track Artist',

    });

    // Start playing it
    await TrackPlayer.play();
};
start();




// const audio=new Audio( require('./assets/beep.wav'))
  const bpm = 70; // убрать когда будет UI
  const bpmInterval = 60000 / bpm;
  let startTime;
  let mainTimer;
  const myTimerSetInterval = () => {
    const beep = async () => {
      
      //  audio.play();
      startTime = Date.now();
      console.log('initiStarttime', startTime)
      startTime += bpmInterval;
      console.log("beepStart time", startTime);
    };
    mainTimer = setInterval(beep, bpmInterval);
  };

  function hit() {
    const hitTime = Date.now();
    const fault = bpmInterval / 16;
    console.log("hitTime", hitTime);
    const firstBorder = startTime + bpmInterval - fault;
    const endInterval = startTime + bpmInterval;
    if(hitTime>startTime ){
      console.log('BOLSGE',)
    }
    if(hitTime<startTime){
      console.log('MENSHE', )
    }
    if (hitTime > startTime && hitTime < firstBorder) {
      console.log("SLOW NOOB");
    }
    if (hitTime >= firstBorder && hitTime <= endInterval) {
      console.log("GOD");
    }
  }

  const stopBeat = () => {
    clearInterval(mainTimer);
  };

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button
        onPress={myTimerSetInterval}
        title="Mentronom"
        color="#132454"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={hit}
        title="Beat"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
      <Button
        onPress={stopBeat}
        title="Stop beating "
        color="#441684"
        accessibilityLabel="Learn more about this purple button"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
