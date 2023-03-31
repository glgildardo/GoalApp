import { StyleSheet, View, Pressable, Text } from "react-native";

function GoalItem(props) {
  return (
    <Pressable 
    android_ripple={{color:'#210644'}}
    style= {({pressed}) => pressed && styles.pressedItem}
    onPress={props.onDeleteItem.bind(this, props.id)}>
      <View key={props.text.index} style={styles.goalItem}>
        <Text style={styles.goalText}>{props.text}</Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  pressedItem:{
    opacity: 0.5,
  },
  goalText: {
    color: "white",
    padding: 8,
  },
});

export default GoalItem;
