import React from 'react';
import { TouchableOpacity, Text, View, StyleProp, ViewStyle } from 'react-native';
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
    title?: string;
    onPress?: () => void;
    children?: JSX.Element;
    className?: string;
    style?: StyleProp<ViewStyle>;
    textClassName?: string;
}

const Button = (props: ButtonProps) => {
    const { title, onPress = () => { }, children, className, textClassName,style=undefined } = props;
    return <TouchableOpacity style={style} onPress={()=>onPress()} className={twMerge('flex items-center justify-center', className)}>
        {children ? children : <Text className={twMerge('', textClassName)}>{title}</Text>}
    </TouchableOpacity>
};

export default Button;