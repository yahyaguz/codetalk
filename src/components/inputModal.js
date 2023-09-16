import React, { useState } from "react"
import styled from "styled-components"
import { Modal, View } from "react-native"
import { Colors, Dimensions } from "../theme";

const Cotainer = styled.View`
    backgroundColor: #ADC5CF;
    width: 96%;
    height: 18%;
    bottom: 0px;
    position: absolute;
    paddingTop:15px;
    borderTopRightRadius:15px;
    borderTopLeftRadius:30px;
    borderBottomLeftRadius:15px;
    borderBottomRightRadius:30px;
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
    borderWidth: 0.5px;
    borderColor: #D9d9da;
    backgroundColor: #E4E4E4;
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
    borderTopRightRadius: 10px;
    borderTopLeftRadius: 10px;
    borderBottomLeftRadius: 10px;
    borderBottomRightRadius:30px;
`;

const ButtonText = styled.Text`
    fontSize: 16px;
    color: white;
    fontWeight: bold;
`;

export default InputModal = ({ visible = false, placeholder, buttonText, onClose, onSend, ...props }) => {

    const [text, setText] = useState('')

    const handleSend = () => {
        if (!text) {
            return;
        }
        onSend(text);
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
                <Button>
                    <ButtonText>{buttonText}</ButtonText>
                </Button>
            </Cotainer>
        </Modal>
    )
}