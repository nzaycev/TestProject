import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTheme} from '@react-navigation/native';

const About = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={_ => {
          navigation.navigate('Котировки');
        }}
        style={[styles.button, {backgroundColor: colors.primary}]}>
        <Text style={styles.buttonText}>К котировкам</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  button: {
    backgroundColor: 'primary',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 6,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default About;
