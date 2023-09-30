import React, { useState } from "react"
import styled from "styled-components"
import { Modal } from "react-native"
import { Colors, Dimensions } from "@theme";

const Cotainer = styled.View`
    backgroundColor: ${Colors.BLUE}66;
    width: 96%;
    height: 18%;
    bottom: 0px;
    position: absolute;
    paddingTop:15px;
    borderRadius: 20px;
    alignSelf: center;
    marginBottom: 10px;
    alignItems: center;
`;
const BlurBackground = styled.Pressable`
    width: ${Dimensions.SCREEN_WIDTH}px;
    minHeight: ${Dimensions.SCREEN_HEIGHT}px;
    alignItems: center;
`;

const Input = styled.TextInput`
    width: 90%;
    height: 42px;
    fontSize: 12px;
    color: black;
    backgroundColor: #e8e3ec;
    borderRadius: 20px;
    margin: 10px;
`;

const Button = styled.TouchableOpacity`
    width: 90%;
    height: 35px;
    backgroundColor: ${Colors.DARK_BLUE};
    justifyContent: center;
    alignItems: center;
    margin: 10px;
    paddingVertical: 5px;
    borderRadius: 15px;
`;

const ButtonText = styled.Text`
    fontSize: 16px;
    color: white;
    fontWeight: bold;
`;

export default InputModal = ({ visible, placeholder, buttonText, onClose, onCreateRoom, ...props }) => {

    const [text, setText] = useState('')

    const handleCreateRoom = () => {
        if (!text) {
            return;
        }
        onCreateRoom(text);
        setText(null);
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={visible}
            onRequestClose={onClose}
            swipeDirection="down"

        >
            <BlurBackground onPress={onClose} />
            <Cotainer>
                <Input
                    placeholder={placeholder}
                    onChangeText={setText}
                    placeholderTextColor="#817573"
                    autoCapitalize="none"
                    {...props}
                />
                <Button onPress={handleCreateRoom}>
                    <ButtonText>{buttonText}</ButtonText>
                </Button>
            </Cotainer>
        </Modal>
    )
}