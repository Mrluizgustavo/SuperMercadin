import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from 'react-native';

const BoldTextRed = ({ children }) => {
  return <Text style={{ fontWeight: 'bold', color: 'red',fontSize:15  }}>{children}</Text>;
};
const BoldTextGreen = ({ children }) => {
  return <Text style={{ fontWeight: 'bold', color: '#2DB242',fontSize:18 }}>{children}</Text>;
};


import pera from '../assets/assets/pera.png';
import logo from '../assets/assets/logo.png';
import banner from '../assets/assets/ff.jpg';
import localIcon from '../assets/Icones/locazacao.png';
const promoIcon = require('./../assets/Icones/promocoes.png');

export default function Promocoes() {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image style={styles.logo} source={logo} />

          <Text style={styles.location}>
            <Image style={styles.imglocal} source={localIcon} />Cecap,Guarulhos
          </Text>

           
        </View>

        <View style={styles.pesquisa}>
          <Image
            style={{ width: 30, height: 30, alignSelf: 'flex-end', margin: 5 }}
            source={require('../assets/Icones/pesquisa.png')}
          />
        </View>

        <View style={styles.promo}>
          <Image source={promoIcon} style={{ width: 50, height: 50 }} />
          <Text style={styles.txtpromo}>Promoções</Text>
        </View>

        <View style={styles.container_produtos}>
          <Text
            style={{
              fontSize: 25,
              fontWeight: 'bold',
              marginTop: 10,
              position: 'Absolute',
              right: '30%',
            }}></Text>

          <FlatList
            data={products}
            numColumns={2}
            renderItem={({ item }) => (
              <View style={styles.item}>
                <Image
                  source={item.foto}
                  style={{ borderRadius: 30, width: '85%', height: 150, position: 'absolute', top:'8%' }}
                />

                <Text style={styles.txt_prod}>{item.nome}</Text>

                  <View style={{margin:10,position:'absolute', bottom:'16%'}}>
                <Text style={{ fontSize: 18 }}>
                  De: <BoldTextRed>R${item.prInt}/{item.grandeza}</BoldTextRed>
                  {'\n'} Por: <BoldTextGreen>R${item.prfim}/{item.grandeza}</BoldTextGreen>
                </Text>
                  </View>
                <TouchableOpacity style={styles.btn_adc}>
                  <Text style={styles.txt_adc}>Adicionar</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const largura = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8E2E0',
    width: largura,
    marginTop: 10,
  },
  container_produtos: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row',
    width: largura,
    flexWrap: 'wrap',
  },
  logoContainer: {
    marginTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: largura - 30,
    margin: 12,
    
  },
  item: {
    
    flexDirection: 'collumn',
    flex: 0.5,
    borderRadius: 45,
    backgroundColor: 'white',
    height: 350,
    margin: 10,
    alignItems: 'center',
    
  },

  //txt
  txtpromo: {
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 5,
  },
  txt_prod: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 8,
    position: 'Absolute',
    top:'50%'
  },
  txt_adc: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  //botoes
  btn_adc: {
    backgroundColor: '#2DB242',
    borderRadius: 20,
    padding: 10,
    width: '80%',
    margin: 15,
    marginTop: 8,
    position: 'absolute',
    bottom: '0.1%',
  },

  //outros

  promo: {
    width: largura - 30,
    flexDirection: 'row',
    margin: 20,
  },

  logo: {
    width: 40,
    height: 40,
  },
  location: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'right',
    margin: 10,
  },
  imglocal: {
    width: 20,
    height: 20,
  },
  pesquisa: {
    width: largura - 30,
    height: 50,
    borderWidth: 2,
    borderColor: '#4933D2',
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 20,
    margin: 12
  },
});

const options = [
  {label: 'Cecap, Guarulhos' },
  {label: 'Cumbica, Guarulhos' },
  {label: 'Taboão,Guarulhos' }
]
const products = [
  {
    nome: 'Pera',
    foto: require('../assets/assets/pera.png'),
    prInt: 7.99,
    prfim: 5.99,
    grandeza:'Kg'
  },
  {
    nome: 'Leite Condensado',
    foto: require('../assets/assets/leite-condensado.png'),
    prInt: 9.99,
    prfim: 7.99,
    grandeza:'Un'

  },
  {
    nome: 'Queijo Mussarela',
    foto: require('../assets/assets/mussarela.png'),
    prInt: 20.99,
    prfim: 18.99,
    grandeza:'kg'

  },
  {
    nome: 'Uva',
    foto: require('../assets/assets/uva.png'),
    prInt: 12.50,
    prfim: 9.50,
    grandeza:'kg'

  },
  {
    nome: 'Arroz',
    foto: require('../assets/assets/arroz.jpg'),
    prInt: 12.50,
    prfim: 9.50,
    grandeza:'Un'

  },
];
