import React from "react";
import styled from "styled-components";
import { Colors } from "@theme";

const RoomContainer = styled.TouchableOpacity`
    width: ${({ width }) => width ? width : "130"}px;
    height: ${({ height }) => height ? height : "150"}px;
    margin: ${({ margin }) => margin ? margin : "0"}px;
    borderWidth: 2px;
    borderRadius: 10px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${Colors.DARK_BLUE};
    padding: 10px;
`;
const BackgroundView = styled.View`
    width: ${({ width }) => width ? width : "130"}px;
    height: ${({ height }) => height ? height : "150"}px;
    margin: ${({ margin }) => margin ? margin : "0"}px;
    borderRadius: 10px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: red;
`;

const Title = styled.Text`
    fontSize: 16px;
`;

export default Room = ({ onPress, room, width, height = width * 1.3, margin, ...props }) => {
    return (
        <BackgroundView width={width} height={height} margin={margin}>
            <RoomContainer onPress={onPress} width={width} height={height} margin={margin}>

                <Title>{room?.name}</Title>
            </RoomContainer>
        </BackgroundView>
    )
}