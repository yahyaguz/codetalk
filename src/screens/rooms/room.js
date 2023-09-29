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
    backgroundColor: ${Colors.SOFT_GRAY};
    borderColor: ${({ addRoom }) => addRoom ? Colors.BLUE : Colors.DARK_BLUE};
    borderWidth: ${({ addRoom }) => addRoom ? 2.5 : 1.5}px;
    padding: 10px;
`;
const BackgroundView = styled.View`
    width: ${({ width }) => width ? width : "130"}px;
    height: ${({ height }) => height ? height : "150"}px;
    margin: ${({ margin }) => margin ? margin : "0"}px;
    borderRadius: 10px;
    justifyContent: center;
    alignItems: center;
    backgroundColor: ${({ addRoom }) => addRoom ? Colors.BLUE : Colors.DARK_BLUE};

`;

const Title = styled.Text`
    fontSize: 16px;
    color: ${({ addRoom }) => addRoom ? Colors.BLUE : Colors.DARK_BLUE};
    fontFamily: CascadiaCode;
    fontWeight: bold;
    textAlign: center;
`;

export default Room = ({ onPress, room, width, height = width * 1.3, margin, addRoom }) => {
    return (
        <BackgroundView width={width} height={height} margin={margin} addRoom={addRoom}>
            <AnimatedButton onPress={onPress} value={0.95}>
                <RoomContainer width={width} height={height} margin={margin} addRoom={addRoom}>
                    <Title addRoom={addRoom}>{room?.name}</Title>
                </RoomContainer>
            </AnimatedButton>
        </BackgroundView>
    )
}