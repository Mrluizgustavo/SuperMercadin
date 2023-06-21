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


import logo from '../assets/assets/logo.png';
import banner from '../assets/assets/ff.jpg';
import localIcon from '../assets/Icones/locazacao.png';

export default function Padaria() {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />
          <Text style={styles.location}>
            <Image style={styles.imglocal} source={localIcon} />
            Cecap, Guarulhos
          </Text>
        </View>
        <Image
          style={styles.banner}
          source={require('../assets/assets/ff.jpg')}
        />
        <View style={styles.pesquisa}>
          <Image
            style={{ width: 30, height: 30, alignSelf: 'flex-end', margin: 5 }}
            source={require('../assets/Icones/pesquisa.png')}
          />
        </View>
        <Text style={styles.titulo}>Padaria</Text>
        <View style={styles.containerprod}>
          <FlatList
            data={Produtos}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.bgprod}>
                <Image
                  style={{
                    width: '90%',
                    height: '35%',
                    margin: 10,
                    borderRadius: 30,
                  }}
                  source={item.foto}
                />
                <View style={styles.tituloProduto}>
                  <Text style={{ fontWeight: 'bold', fontSize: 20 }}>
                    {item.nome}
                  </Text>
                </View>
                <View style={{ margin: 5 }}>
                  <Text style={{ fontSize: 18 }}>
                    R${item.preco}/{item.grandeza}
                  </Text>
                </View>

                <TouchableOpacity style={styles.carrinho}>
                  <Text
                    numberOfLines={2}
                    style={{
                      color: 'white',
                      fontSize: 18,
                      margin: 5,
                      fontWeight: 'bold',
                    }}>
                    Adicionar ao carrinho
                  </Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const Produtos = [
  {
    nome: 'Pão Francês',
    foto: require('../assets/assets/pao.png'),
    preco: '7.00',
    grandeza: 'Kg',
  },
  {
    nome: 'Pão de Leite',
    foto: require('../assets/assets/pao-leite.png'),
    preco: '3.00',
    grandeza: 'Kg',
  },
   {
    nome: 'Pão de Queijo',
    foto: require('../assets/assets/pao-de-queijo.png'),
    preco: '7.00',
    grandeza: 'Kg',
  },
  {
    nome: 'Baguete',
    foto: require('../assets/assets/baguete.png'),
    preco: '7.00',
    grandeza: 'Kg',
  },
  {
    nome: 'Bolo de Chocolate',
    foto: require('../assets/assets/bolo-choco.png'),
    preco: '7.00',
    grandeza: 'Kg',
  },
  {
    nome: 'Pudim',
    foto: require('../assets/assets/pudim.png'),
    preco: '7.00',
    grandeza: 'Kg',
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#E8E2E0',
  },
  logoContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  containerprod: {
    textAlign: 'center',
    flexDirection: 'row',
  },

  pesquisa: {
    width: '100%',
    height: 50,
    borderWidth: 2,
    borderColor: '#4933D2',
    borderRadius: 20,
    marginTop: 30,
  },
  banner: {
    alignItems: 'center',
    width: 360,
    height: 200,
    borderRadius: 20,
  },
  titulo: {
    fontSize: 25,
    margin: 10,
    fontWeight: 'bold',
  },
  bgprod: {
    flex: 0.5,
    height: 300,
    backgroundColor: 'white',
    borderRadius: 30,
    margin: 10,
    marginTop: 10,
  },

  tituloProduto: {
    flexDirection: 'row',
    margin: 5,
  },
  carrinho: {
    backgroundColor: 'green',
    margin: 10,
    textAlign: 'center',
    padding: 5,
    borderRadius: 30,
  },
  logo: {
    width: 40,
    height: 40,
  },

  imglocal: {
    width: 20,
    height: 20,
  },
});
