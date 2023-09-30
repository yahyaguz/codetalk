import React, { useState, useEffect } from "react";
import { FlatList, Image, ActivityIndicator, View } from "react-native"
import database from "@react-native-firebase/database";
import auth from "@react-native-firebase/auth";
import styled from "styled-components";
import { tr } from "date-fns/locale";
import { formatDistanceStrict, parseISO } from "date-fns";

import utilParseData from "@utils/utilParseData";
import { Dimensions, Colors } from "@theme";

import ScreenWrapper from "@components/screenWrapper";
import Message from "./message";
import Input from "./input";


const ListFooter = styled.View`
    backgroundColor: ${Colors.BLUE}66;
    alignItems: center;
    marginVertical: 25px;
    width: 80%;
    alignSelf: center;
    borderRadius: 30px;
    padding: 3px;
`;

const Title = styled.Text`
    fontSize: 16px;
    color: ${Colors.DARK_BLUE};
    fontFamily: consolai;
    textAlign: center;
`;
function Messages({ navigation, route }) {

    let listViewRef;
    const room = route?.params?.room;
    const [contentList, setContentList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        database()
            .ref(`rooms/${room?.id}/messages/`)
            .on('value', snapshot => {
                const parsedData = utilParseData(snapshot.val());
                setContentList(parsedData);
                setLoading(false)
            });
    }, [])


    const sendContent = (content) => {
        const userMail = auth().currentUser.email;

        const contentObject = {
            text: content,
            username: userMail?.split('@')[0],
            date: new Date().toISOString(),
            type: "message",
        }
        database().ref(`rooms/${room?.id}/messages/`).push(contentObject);

    }

    const roomDate = formatDistanceStrict(parseISO(room?.date), new Date(), { addSuffix: true, locale: tr })

    return (
        <ScreenWrapper title={room?.name} navigation={navigation} >
            {
                loading ? <View style={{ height: Dimensions.SCREEN_HEIGHT - Dimensions.HEADER_HEIGHT - 20, justifyContent: "center" }}>
                    <ActivityIndicator color={Colors.DARK_BLUE} size="large" />
                </View>
                    : <FlatList
                        inverted
                        data={contentList && [...contentList]?.reverse()}
                        renderItem={({ item }) => <Message message={item} />}
                        keyExtractor={(item) => `message-${item?.id}`}
                        ListFooterComponent={<ListFooter><Title>{room?.name} odası {roomDate} oluşturuldu.</Title></ListFooter>}
                        showsVerticalScrollIndicator={false}
                        ref={(ref) => {
                            listViewRef = ref;
                        }}
                        onContentSizeChange={() => listViewRef?.scrollToOffset({ offset: 0 })}
                    />
            }
            <Input
                buttonComponent={<Image source={require("@assets/images/send.png")} />}
                placeholder=" Mesaj"
                sendMessage={sendContent}
            />
        </ScreenWrapper>
    )
}
export default Messages;