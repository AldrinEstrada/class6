import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView, Button, ScrollView } from 'react-native';
import { useState, useEffect } from 'react';
import NasaInfo from '../components/NasaInfo';
import { Image } from 'react-native';


export default function Home({navigation}) {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <StatusBar style="auto" />
                <NasaInfo />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',

    },
});
