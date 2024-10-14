import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';
import Product from '../components/Product';

interface Product {
  id: number;
  name: string;
  price: string;
  brand: string;
  description: string;
  image: string;
}

export default function ListProduct() {
  const [products, setProducts] = useState<Product[] | null>([]);

  async function getProducts() {
    try {
      const response = await axios.get('http://192.168.17.6:3000/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Erro ao buscar produtos: ', error);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.headerProducts}>
        <Text style={styles.titleProducts}>Veículos</Text>
      </View>
      <View style={styles.bodyProducts}>
        <FlatList
          data={products}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <Product
              id={item.id}
              name={item.name}
              price={item.price}
              brand={item.brand}
              description={item.description}
              image={item.image}
            />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: '#d3c8b4',
    flex: 1,
  },
  headerProducts: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#703e3b',
    borderRadius: 5,
    marginBottom: 15,
  },
  titleProducts: {
    color: '#e7e4d5',
    fontSize: 20,
    fontWeight: 'bold',
  },
  bodyProducts: {
    flex: 1,
  },
  productContainer: {
    backgroundColor: '#d3c8b4',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  productName: {
    color: '#703e3b',
    fontSize: 18,
    fontWeight: 'bold',
  },
  productPrice: {
    color: '#c84648',
    fontSize: 16,
    marginVertical: 5,
  },
  productBrand: {
    color: '#703e3b',
    fontSize: 14,
  },
  productDescription: {
    color: '#703e3b',
    fontSize: 14,
    marginBottom: 10,
  },
  productImage: {
    width: 100,
    height: 100,
    marginBottom: 10,
    borderRadius: 5,
  },
});
