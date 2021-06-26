import React from "react";
import { View, StyleSheet, FlatList } from "react-native";

import ProductItem from "./ProductItem";
const ProductList = props => {
  const renderProductItem = (itemData) => {
      return <ProductItem
      title={itemData.title}
      description={itemData.description}
      size={itemData.size}
      delivery={itemData.delivery}
      imageUrl={itemData.imageUrl}
      finalPrice={itemData.finalPrice}
      onSelectProduct={() => {
        props.navigation.navigate({
          routeName: "ProductDetail",
          params: {
            productId: itemData.id,
             // Add:
             productTitle: itemData.title
          },
        });
      }}/>
    };
  return (
    <View style={styles.container}>
      <FlatList
        //   change the data from props.
        data={props.listData}
        keyExtractor={(item) => item.id}
        renderItem={renderProductItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
});

export default ProductList;