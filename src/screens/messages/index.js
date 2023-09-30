import React, { useState, useEffect } from "react";

import { FlatList, Image, ActivityIndicator, View } from "react-native"
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";
import utilParseData from "@utils/utilParseData";
import Message from "./message";
import Input from "./input";
import ScreenWrapper from "@components/screenWrapper";
import { Dimensions } from "@theme";

function Messages({ navigation, route }) {

    let listViewRef;
    const room = route?.params?.room;
    const [contentList, setContentList] = useState(null);
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
    return (
        <ScreenWrapper title={room?.name} navigation={navigation} >
            {
                loading ? <View style={{ height: Dimensions.SCREEN_HEIGHT - Dimensions.HEADER_HEIGHT - 20, justifyContent: "center" }}>
                    <ActivityIndicator color="black" size="large" />
                </View>
                    : <FlatList
                        inverted
                        data={[...contentList]?.reverse()}
                        renderItem={({ item, index }) => <Message message={item} key={index} />}
                        keyExtractor={(item) => `message-${item?.id}`}
                        scrollEnabled={true}
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