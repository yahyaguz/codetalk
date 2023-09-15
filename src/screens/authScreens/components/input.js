import React from "react";
import styled from "styled-components";
import { Colors } from "../../../theme";

const Container = styled.View`
    flexDirection: row;
    justifyContent: center;
    marginVertical: 10px;
`;
const IconContainer = styled.View`
    paddingRight: 5px;
    paddingTop: 8px;
    borderBottomWidth:1px;
    borderTopLeftRadius:6px;
    backgroundColor: #EEEEEE66;
    borderColor: #526D82;
    `;
const TextInput = styled.TextInput`
    borderBottomWidth: 1px;
    fontSize: 14px;
    width: 60%;
    height: 40px;
    borderTopRightRadius:6px;
    backgroundColor: #EEEEEE66;
    borderColor: #526D82;
`;

export default Input = ({ icon,  ...props }) => {
    return (
        <Container>
            
            <IconContainer>{icon}</IconContainer>
            <TextInput
                {...props}
            />
        </Container>
    )
}