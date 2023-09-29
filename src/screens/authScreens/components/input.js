import React from "react";
import styled from "styled-components";

const Container = styled.View`
    flexDirection: row;
    justifyContent: center;
    borderRadius: 15px;
    marginVertical: 10px;
    backgroundColor: #EEEEEE66;
    borderWidth: 0.5px;
`;

const IconContainer = styled.View`
    paddingHorizontal: 5px;
    paddingTop: 8px;
    borderTopLeftRadius: 6px;
    backgroundColor: #EEEEEE66;
    borderColor: #526D82;
    borderRadius: 15px;
    `;

const TextInput = styled.TextInput`
    fontSize: 14px;
    width: 60%;
    height: 40px;
    borderTopRightRadius: 6px;
    borderRadius: 15px;
    backgroundColor: #EEEEEE66;
    borderColor: #526D82;
`;

export default Input = ({ icon, ...props }) => {
    return (
        <Container>
            <IconContainer>{icon}</IconContainer>
            <TextInput
                {...props}
            />
        </Container>
    )
}