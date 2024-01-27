import MaskedView from '@react-native-masked-view/masked-view';
import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import { StyleProp, Text, TextProps, ViewStyle, StyleSheet } from 'react-native';



interface BrandGradientTextProps extends TextProps {
  children: ReactNode;
}
const styles = StyleSheet.create({
  text: {
    backgroundColor: 'transparent',
  },
  maskText: {
    opacity: 0
  }
});
function BrandGradientText({ children, style, ...props }: BrandGradientTextProps) {
  return (
    <MaskedView
      maskElement={<Text  {...props}>{children}</Text>}
    >
      <LinearGradient
        colors={['rgba(0, 205, 250, 1)', 'rgba(144, 88, 255, 1)', 'rgba(255, 118, 223, 1)']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <Text  {...props} style={{ opacity: 0 }}>{children}</Text>
      </LinearGradient>
    </MaskedView>
  );
}

export default BrandGradientText;