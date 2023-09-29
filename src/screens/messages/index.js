import React, { useState, useEffect } from "react";
import { FlatList, Image } from "react-native"
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";
import utilParseData from "@utils/utilParseData";
import Message from "./message";
import Input from "./input";
import ScreenWrapper from "@components/screenWrapper";

function Messages({ navigation, route }) {

    let listViewRef;
    const room = route?.params?.room;
    const [contentList, setContentList] = useState(null);

    useEffect(() => {
        database()
            .ref(`rooms/${room?.id}/messages/`)
            .on('value', snapshot => {
                const parsedData = utilParseData(snapshot.val());
                setContentList(parsedData);
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
        if (listViewRef) {
            listViewRef.scrollToEnd({ animated: true });
        }
    }

    return (
        <ScreenWrapper title={room?.name} navigation={navigation} >
            <FlatList
                data={contentList}
                renderItem={({ item, index }) => <Message message={item} key={index} />}
                keyExtractor={(item) => `message-${item?.id}`}
                scrollEnabled={true}
                showsVerticalScrollIndicator={false}
                ref={(ref) => {
                    listViewRef = ref;
                }}
                onContentSizeChange={() => listViewRef.scrollToEnd({ animated: true })}
                onLayout={() => listViewRef.scrollToEnd({ animated: true })}
            />
            <Input
                buttonComponent={<Image source={require("@assets/images/send.png")} />}
                placeholder=" Mesaj"
                sendMessage={sendContent}
            />
        </ScreenWrapper>
    )
}
export default Messages;