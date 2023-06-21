import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import logo from '../assets/assets/logo.png';
import localIcon from '../assets/Icones/locazacao.png';

export default function Home() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../assets/Icones/SUPERMERCADIN.png')}
            style={styles.logo}
          />
        </View>

        <Text style={styles.titulo}>Sobre Nós</Text>
        <Text style={styles.conteudo}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          eleifend convallis quam, a sollicitudin lorem placerat nec. Fusce
          euismod, ipsum vel faucibus posuere, justo mauris lacinia turpis, et
          eleifend mi massa ac mauris. Nunc ipsum mi, ullamcorper ut arcu sit
          amet, auctor tincidunt sem. In sed convallis urna, a pretium augue.
          Praesent finibus nibh mauris, vitae finibus ante malesuada vitae.
          Suspendisse posuere purus nec nibh convallis accumsan ac eget nisi.
          Sed sagittis orci sed tempor placerat. Fusce molestie leo tristique
          maximus eleifend. Nunc in enim augue. Donec vel sapien mauris.
          Suspendisse posuere maximus ipsum, ac porta tellus sagittis et. Orci
          varius natoque penatibus et magnis dis parturient montes, nascetur
          ridiculus mus. Vivamus imperdiet iaculis nibh et ultrices. Aenean
          tincidunt risus accumsan dui aliquet volutpat. Morbi a lacus euismod,
          porta enim vitae, dignissim massa. Ut facilisis nibh non odio commodo,
          vel sodales diam tincidunt. Aenean vitae mi tortor. Vestibulum ut
          tempor velit. Etiam interdum congue ligula nec consectetur.
        </Text>
        <View style={styles.imagem}>
          <Image
              source={require('../assets/assets/nois.png')}
              style={{width: 200, height: 200, borderRadius:20}}
            />
          </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E2E0',
  },
  logoContainer: {
    marginTop: 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  logo: {
    marginLeft: 10,
    width: 200,
    height: 25,
  },
  titulo: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 15,
    textAlign: 'center',
  },
  conteudo: {
    textAlign: 'center',
  },
  imagem:{
    marginTop:20,
    justifyContent: 'center',
    alignItems:'center'
  }
});
