import React from "react";
import styled from "styled-components";
import { Colors } from "@theme";

const RoomContainer = styled.TouchableOpacity`
    borderWidth: 2px;
    width: 130px;
    height: 150px;
    borderRadius: 10px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${Colors.DARK_BLUE};
`;
const BackgroundView = styled.View`
    width: 130px;
    height: 150px;
    borderRadius: 10px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: red;
`;

const Title = styled.Text`
    fontSize: 16px;
`;

export default Room = ({ onPress, room }) => {
    return (
        <BackgroundView>
            <RoomContainer onPress={onPress}>

                <Title>Oda İsmi</Title>
            </RoomContainer>
        </BackgroundView>
    )
}