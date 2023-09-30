import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Colors, Dimensions } from "@theme";
import { formatDistanceStrict, parseISO } from "date-fns";
import { tr } from "date-fns/locale";
import auth from "@react-native-firebase/auth"

const Container = styled.View`
    width: ${Dimensions.SCREEN_WIDTH}px;
    alignItems: ${({ messageBy }) => messageBy ? "flex-end" : "flex-start"};
`;

const InnerContainer = styled.View`
    minWidth: 40%;
    backgroundColor: ${Colors.BLUE}F2;
    marginVertical: 5px;
    marginHorizontal: 10px;
    borderRadius: 10px;
`;

const HeaderInfo = styled.View`
    flexDirection: row;
    marginHorizontal: 10px;
    marginTop: 5px;
    justifyContent: space-between;
`;

const Title = styled.Text`
    fontSize: 11px;
    color: #DFDFDF;
    fontFamily: consolai;
`;

const Content = styled.Text`
    fontSize: 12px;
    color: white;
    margin: 10px;
    fontFamily: consola;
`;

const Triangle = styled.View`
    width: 0;
    height: 0;
    backgroundColor: transparent;
    borderStyle: solid;
    borderRightWidth: 15px;
    borderBottomWidth: 15px;
    borderTopColor: transparent;
    borderRightColor: transparent;
    borderBottomColor: ${Colors.BLUE}F2;
    transform: rotate(100deg) ${({ messageBy }) => messageBy ? "scaleX(-1)" : null};
    marginHorizontal: 15px;
    top:-8px;
`;

export default Message = ({ message }) => {

    const [messageBy, setMessageBy] = useState(false)

    useEffect(() => {
        const user = auth().currentUser;

        if (user) {
            setMessageBy(a => a = user?.email?.split('@')[0] === message?.username);
        } else {
            setMessageBy(false);
        }

    }, [])

    const formattedDate = formatDistanceStrict(parseISO(message?.date), new Date(), { addSuffix: true, locale: tr })

    return (
        <Container messageBy={messageBy}>
            <InnerContainer messageBy={messageBy}>
                <HeaderInfo>
                    <Title>{messageBy ? "Siz" : message?.username}</Title>
                    <Title>{formattedDate}</Title>
                </HeaderInfo>
                <Content selectable={true} selectionColor="black">{message?.text}</Content>
            </InnerContainer>
            <Triangle messageBy={messageBy} />
        </Container>
    )
}