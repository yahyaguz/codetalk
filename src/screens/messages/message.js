import React from "react";
import styled from "styled-components";
import { Colors, Dimensions } from "@theme";
import { formatDistanceStrict, parseISO } from "date-fns";
import { tr } from "date-fns/locale";

const View = styled.View`
    width: ${Dimensions.SCREEN_WIDTH / 1.1}px;
    minHeight: ${Dimensions.SCREEN_WIDTH / 6}px;
    backgroundColor: ${Colors.DARK_BLUE};
    margin: 10px;
    shadowColor: gray;
    elevation: 15;
    borderRadius: 10px;
`;

const InnerContainer = styled.View`
    flexDirection: row;
    marginHorizontal: 10px;
    marginTop: 5px;
    justifyContent: space-between;
`;

const Title = styled.Text`
    fontSize: 14px;
    color: ${Colors.OFF_WHITE};
    ${({ fontStyle }) => fontStyle && "fontStyle:" + fontStyle + ";"}

`;

const Content = styled.Text`
    fontSize: 15px;
    color: white;
    margin: 10px;
`;

export default Message = ({ message }) => {

    const formattedDate = formatDistanceStrict(parseISO(message.date), new Date(), { addSuffix: true, locale: tr })

    return (
        <View>
            <InnerContainer>
                <Title>{message.username}</Title>
                <Title fontStyle="italic">{formattedDate}</Title>
            </InnerContainer>
            <Content selectable={true} selectionColor="black">{message.text}</Content>
        </View>
    )
}