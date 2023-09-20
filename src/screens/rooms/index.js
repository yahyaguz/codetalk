import React, { useState, useEffect } from "react";
import styled from "styled-components";
import database from '@react-native-firebase/database';
import auth from "@react-native-firebase/auth"

import Room from "./room";
import { Colors, Dimensions } from "@theme";
import Header from "@components/header";
import AddButton from "@components/addButton";
import InputModal from "@components/inputModal";
import utilParseContentData from "@utils/utilParseData";
import { FlatList, Text } from "react-native";
import AnimatedButton from "../../components/animatedButton";

const columns = 3;
const itemMargin = 10;
const itemWidth = (Dimensions.SCREEN_WIDTH - (itemMargin * (columns + 1))) / columns;

const Container = styled.View`
    backgroundColor: ${Colors.SOFT_GRAY};
    height: 100%;
`;

const Icon = styled.Image`
    tintColor: white;
    resizeMode: contain;
    width: 35px;
`;

export function Rooms({ navigation }) {
    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [rooms, setRooms] = useState([]);



    useEffect(() => {
        database().ref("rooms/").on("value", snapshot => {
            const parsedData = utilParseContentData(snapshot.val());
            setRooms(parsedData);
        })
    }, [])

    console.log(rooms)

    const createRoom = (roomName) => {
        const userMail = auth().currentUser.email;

        const roomObject = {
            name: roomName,
            createdBy: userMail.split('@')[0],
            date: new Date().toISOString(),
        }

        database().ref("rooms/").push(roomObject);
    }

    const handleCreateRoom = (roomName) => {
        setInputModalVisible(false)
        createRoom(roomName)
    }
    return (
        <Container>
            <Header
                title="Odalar"
                rightItem={
                    <AnimatedButton onPress={() => auth().signOut()}>
                        <Icon source={(require("@assets/images/logout.png"))} />
                    </AnimatedButton>
                }
            />
            <InputModal
                placeholder="Oda ismi giriniz..."
                buttonText="Oda Ekle"
                visible={inputModalVisible}
                onClose={() => setInputModalVisible(false)}
                onCreateRoom={handleCreateRoom}
            />

            <FlatList
                data={rooms}
                renderItem={({ item }) => <Room room={item} width={itemWidth} margin={itemMargin / 2} onPress={() => navigation.navigate("MessagesScreen", { room: item })} />}
                numColumns="3"
                style={{ padding: itemMargin / 2 }}
            />
            <AddButton onPress={() => setInputModalVisible(true)} />
        </Container>
    )
}

export default Rooms;