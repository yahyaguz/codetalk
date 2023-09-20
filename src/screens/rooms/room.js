import React from "react";
import styled from "styled-components";
import { Colors } from "@theme";
import AnimatedButton from "@components/animatedButton";

const RoomContainer = styled.View`
    width: ${({ width }) => width ? width : "130"}px;
    height: ${({ height }) => height ? height : "150"}px;
    margin: ${({ margin }) => margin ? margin : "0"}px;
    borderRadius: 10px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${Colors.BLUE};
    padding: 10px;
`;
const BackgroundView = styled.View`
    width: ${({ width }) => width ? width : "130"}px;
    height: ${({ height }) => height ? height : "150"}px;
    margin: ${({ margin }) => margin ? margin : "0"}px;
    borderRadius: 10px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: transparent;
    backgroundColor: #9DB2BF;

`;

const Title = styled.Text`
    fontSize: 16px;
    color: white;
`;

export default Room = ({ onPress, room, width, height = width * 1.3, margin }) => {
    return (
        <BackgroundView width={width} height={height} margin={margin}>
            <AnimatedButton onPress={onPress}>
                <RoomContainer width={width} height={height} margin={margin}>
                    <Title>{room?.name}</Title>
                </RoomContainer>
            </AnimatedButton>
        </BackgroundView>
    )
}