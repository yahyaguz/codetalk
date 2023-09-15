import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";
import { Colors } from "../../../theme";

const Container = styled.TouchableOpacity`
    width: 60%;
    height: 36px;
    backgroundColor: ${Colors.DARK_BLUE};
    margin: 5px;
    justifyContent: center;
    alignItems: center;
    borderRadius:3px;
`;
const Title = styled.Text`
    fontSize: 16px;
    color: white;
    fontWeight: bold;
`;

export default Button = ({ title, loading, onPress }) => {
    return (
        <Container onPress={onPress}>
            {
                loading ? <ActivityIndicator color="white" />
                    : <Title>{title}</Title>
            }
        </Container>
    );
}