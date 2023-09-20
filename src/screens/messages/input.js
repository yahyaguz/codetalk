import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "@theme";
import AnimatedButton from "@components/animatedButton";

const Container = styled.View`
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
    marginVertical: 10px;
`;

const TextInput = styled.TextInput`
    fontSize: 14px;
    width: 85%;
    height: 40px;
    borderRadius: 15px;
    backgroundColor: ${Colors.OFF_WHITE};
    borderColor: ${Colors.DARK_GREEN};
`;

const Icon = styled.Image`
    tintColor: ${Colors.DARK_GREEN};
`;

export default Input = ({ buttonComponent, sendMessage, ...props }) => {
    const [text, setText] = useState('')

    const handleSendMessage = () => {
        if (!text) {
            return;
        }
        sendMessage(text);
        setText('');
    }

    return (
        <Container>
            <TextInput
                onChangeText={setText}
                value={text}
                {...props}
            />

            <AnimatedButton onPress={handleSendMessage}>
                <Icon source={require("@assets/images/send.png")} />
            </AnimatedButton>
        </Container>
    );
}