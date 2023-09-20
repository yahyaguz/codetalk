import React from "react";
import { Animated } from "react-native";
import styled from "styled-components";

const TouchableArea = styled.Pressable`
    minWidth: 48px;
    minHeight: 48px;
    backgroundColor: transparent;
`;

const AnimatedButton = ({ children, onPress, value = 0.95 }) => {
    const scaleValue = new Animated.Value(1)

    const onPressIn = () => {
        Animated.timing(scaleValue, {
            toValue: value,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }
    const onPressOut = () => {
        Animated.timing(scaleValue, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true,
        }).start();
    }
    console.log(scaleValue)
    return (
        <TouchableArea
            onPress={onPress}
            onPressIn={onPressIn}
            onPressOut={onPressOut}>
            <Animated.View
                style={{
                    transform: [{ scale: scaleValue }],
                }}
            >
                {children}
            </Animated.View>
        </TouchableArea>
    )
}
export default AnimatedButton;