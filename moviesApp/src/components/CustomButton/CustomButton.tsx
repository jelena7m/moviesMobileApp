import React from 'react';
import {Pressable, Text, View} from 'react-native';
import styles from './style';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
}

export const CustomButton: React.FC<CustomButtonProps> = ({text, onPress}) => {
  return (
    <View>
      <Pressable style={styles.container} onPress={onPress}>
        <Text style={styles.text}>{text}</Text>
      </Pressable>
    </View>
  );
};
