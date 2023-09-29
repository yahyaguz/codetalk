import React, { useState } from "react";
import styled from "styled-components";
import { Colors } from "@theme";
import AnimatedButton from "@components/animatedButton";

const Container = styled.View`
    width: 100%;
    flexDirection: row;
    justifyContent: space-between;
    alignItems: center;
    marginVertical: 10px;
    paddingHorizontal: 10px;
`;

const TextInput = styled.TextInput`
    fontSize: 14px;
    width: 85%;
    height: 40px;
    borderRadius: 15px;
    backgroundColor: ${Colors.SOFT_GRAY};
    borderColor: ${Colors.DARK_BLUE};
    borderWidth: 0.5px;
`;

const Icon = styled.Image`
    tintColor: ${Colors.DARK_BLUE};
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