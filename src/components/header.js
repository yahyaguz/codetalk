import React from "react";
import styled from "styled-components";
import { Colors } from "@theme";

const Container = styled.View`
    width: 100%;
    height:52px;
    backgroundColor:${Colors.DARK_BLUE};
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
`;

const RightContainer = styled.View`
    width: 30%;
    height: 52px;
    backgroundColor: red;
    flexDirection: row;
    position: absolute;
    right: 0px;
    alignItems: center;
`;
const LeftContainer = styled.View`
    width: 30%;
    height: 52px;
    backgroundColor: red;
    flexDirection: row;
    position: absolute;
    left: 0px;
    alignItems: center;
`;

const Title = styled.Text`
    fontSize: 16px;
    maxWidth: 35%;
    fontWeight: bold;
    color: white;
`;
const Icon = styled.Image`
    width:30px;
    resizeMode: contain;
    marginLeft:5px;
`;
export default Header = ({ title, rightItem, ...props }) => {
    return (
        <Container {...props}>
            <LeftContainer>
                <Icon source={require("../assets/images/left-arrow.png")} />
            </LeftContainer>
            <Title>{title}</Title>
            <RightContainer>
                {rightItem} 
            </RightContainer>
        </Container>
    )
}