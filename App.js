import React from 'react';
import {
  StyleSheet, View, Text, Image, Dimensions,
} from 'react-native';
import Carousel, { PaginationLight } from 'react-native-x-carousel';

const { width } = Dimensions.get('window');

const DATA = [
  {
    coverImageUri: 'https://geogeral.com/i/m/b/brh01.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Bandeira de Ordem de Cristo (1332-1651)',
  },
  {
    coverImageUri: 'https://geogeral.com/i/m/b/brh02.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Bandeira Real (1500-1521)',
  },
  {
    coverImageUri: 'https://geogeral.com/i/m/b/brh03.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Bandeira de Dom João III (1521-1616)',
  },
  {
    coverImageUri: 'https://geogeral.com/i/m/b/brh04.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Bandeira do Domínio Espanhol (1616-1640)',
  },
  {
    coverImageUri: 'https://geogeral.com/i/m/b/brh05.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Bandeira da Restauração (1640-1683)',
  },
  {
    coverImageUri: 'https://geogeral.com/i/m/b/brh06.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Bandeira do Principado do Brasil (1645-1816)',
  },
  {
    coverImageUri: 'https://geogeral.com/i/m/b/brh07.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Bandeira de Dom Pedro II, de Portugal (1683-1706)',
  },
  {
    coverImageUri: 'https://geogeral.com/i/m/b/brh08.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Bandeira Real Século XVII (1601-1700)',
  },
  {
    coverImageUri: 'https://geogeral.com/i/m/b/brh09.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Bandeira do Reino Unido de Portugal, Brasil e Algarves (1816-1821)',
  },
  {
    coverImageUri: 'https://geogeral.com/i/m/b/brh10.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Bandeira do Regime Constitucional (1821-1822)',
  },
  {
    coverImageUri: 'https://geogeral.com/i/m/b/brh11.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Bandeira Imperial do Brasil (1822-1889)',
  },
  {
    coverImageUri: 'https://geogeral.com/i/m/b/brh12.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Bandeira Provisória da República (15 a 19/11/1889)',
  },
  {
    coverImageUri: 'https://geogeral.com/i/m/b/brh13.jpg',
    cornerLabelColor: '#2ECC40',
    cornerLabelText: 'Bandeira Civil, Nacional, de Estado e Símbolo Nacional (11/05/1992-)',
  },
];

const App = () => {
  const renderItem = data => (
    <View
      key={data.coverImageUri}
      style={styles.cardContainer}
    >
      <View
        style={styles.cardWrapper}
      >
        <Image
          style={styles.card}
          source={{ uri: data.coverImageUri }}
        />
        <View
          style={[
            styles.cornerLabel,
            { backgroundColor: data.cornerLabelColor },
          ]}
        >
          <Text style={styles.cornerLabelText}>
            { data.cornerLabelText }
          </Text>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Carousel
        pagination={PaginationLight}
        renderItem={renderItem}
        data={DATA}
        loop
        autoplay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width,
  },
  cardWrapper: {
    borderRadius: 8,
    overflow: 'hidden',
  },
  card: {
    width: width * 0.9,
    height: width * 0.5,
  },
  cornerLabel: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderTopLeftRadius: 8,
  },
  cornerLabelText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
    paddingLeft: 5,
    paddingRight: 5,
    paddingTop: 2,
    paddingBottom: 2,
  },
});

export default App;
