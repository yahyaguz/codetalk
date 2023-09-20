import React from "react";
import styled from "styled-components";
import { Colors } from "@theme";
import AnimatedButton from "./animatedButton";

const Container = styled.View`
    width: 100%;
    height:52px;
    backgroundColor:${Colors.DARK_BLUE};
    flexDirection: row;
    justifyContent: center;
    alignItems: center;
`;

const RightContainer = styled.View`
    height: 52px;
    flexDirection: row;
    position: absolute;
    right: 0px;
    alignItems: center;
`;

const LeftContainer = styled(AnimatedButton)`
    height: 52px;
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
    width: 25px;
    resizeMode: contain;
    marginLeft: 5px;
    tintColor: white;
`;

export default Header = ({ title, rightItem, navigation, ...props }) => {
    return (
        <Container {...props}>
            <LeftContainer onPress={() => navigation?.goBack()} style={{ justifyContent: "flex-start" }}>
                {
                    navigation && <Icon source={require("../assets/images/left-arrow.png")} />
                }
            </LeftContainer>
            <Title>{title}</Title>
            <RightContainer>
                {rightItem}
            </RightContainer>
        </Container>
    )
}