import React, { useState } from "react"
import styled from "styled-components"
import { Modal, View } from "react-native"
import { Colors, Dimensions } from "@theme";

const Cotainer = styled.View`
    backgroundColor: #7d8bae;
    width: 96%;
    minHeight: 18%;
    bottom: 0px;
    position: absolute;
    paddingTop:15px;
    borderTopRightRadius: 20px;
    borderTopLeftRadius: 20px;
    borderBottomLeftRadius: 20px;
    borderBottomRightRadius: 20px;
    alignSelf: center;
    marginBottom: 10px;
`;
const BlurBackground = styled.Pressable`
    width: ${Dimensions.SCREEN_WIDTH}px;
    minHeight: ${Dimensions.SCREEN_HEIGHT}px;
    alignItems: center;
`;

const Input = styled.TextInput`
    fontSize: 12px;
    color: black;
    backgroundColor: #e8e3ec;
    borderRadius: 8px;
    margin: 10px;
    height: 42px;
`;

const Button = styled.TouchableOpacity`
    borderWidth: 2px;
    borderColor: ${Colors.DARK_BLUE};
    backgroundColor: ${Colors.DARK_BLUE};
    justifyContent: center;
    alignItems: center;
    margin: 10px;
    paddingVertical: 5px;
    borderTopRightRadius: 15px;
    borderTopLeftRadius: 15px;
    borderBottomLeftRadius: 15px;
    borderBottomRightRadius:15px;
`;

const ButtonText = styled.Text`
    fontSize: 16px;
    color: white;
    fontWeight: bold;
`;

export default InputModal = ({ visible = false, placeholder, buttonText, onClose, onCreateRoom, ...props }) => {

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