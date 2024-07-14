import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";

const Cartitem = ({ item }) => {
  const [qty, SetQty] = useState(1);
  const handleAddQty = () => {
    if (qty === 10) return alert("you can't add more than 10 quantity");
    SetQty((prev) => prev + 1);
  };
  const handleRemoveQty = () => {
    if (qty <= 1) return;
    SetQty((prev) => prev - 1);
  };
  return (
    <View style={styles.conatiner}>
      <Image source={{ uri: item?.imageURL }} style={styles.image} />
      <View>
        <Text style={styles.name}>{item?.name}</Text>
        <Text style={styles.name}>Price : {item?.price} $</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity style={styles.btnQty} onPress={handleRemoveQty}>
          <Text style={styles.btnQtyText}>-</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btnQtyText}>{qty}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnQty} onPress={handleAddQty}>
          <Text style={styles.btnQtyText}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  conatiner: {
    margin: 10,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  image: {
    height: 50,
    width: 50,
    resizeMode: "contain",
  },
  name: {
    fontSize: 10,
  },
  btnContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  btnQty: {
    backgroundColor: "lightgray",
    width: 40,
    alignItems: "center",
    marginHorizontal: 10,
  },
  btnQtyText: {
    fontSize: 20,
  },
});

export default Cartitem;
