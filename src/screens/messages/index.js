import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { View, Text, FlatList, Image } from "react-native"
import auth from "@react-native-firebase/auth";
import database from "@react-native-firebase/database";
import utilParseData from "@utils/utilParseData";
import Message from "./message";
import Input from "./input";
import AddButton from "../../components/addButton";
import Header from "../../components/header";

const Container = styled.View`
    width: 100%;
    height: 100%;
    backgroundColor:blue;
    alignItems: center;
`;

function Messages({ navigation, route }) {

    const room = route.params.room;
    const [contentList, setContentList] = useState([]);

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
            username: userMail.split('@')[0],
            date: new Date().toISOString(),
        }

        database().ref(`rooms/${room?.id}/messages/`).push(contentObject);
    }

    const renderContent = ({ item }) => <Message message={item} />


    return (
        <Container>
            <Header title={room.name} />
            <FlatList
                data={contentList}
                renderItem={renderContent}
                scrollEnabled={true}
            />
            <Input
                buttonComponent={<Image source={require("@assets/images/send.png")} />}
                placeholder=" Mesaj"
                sendMessage={sendContent}
            />
        </Container>
    )
}
export default Messages;