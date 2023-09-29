import React, { useState, useEffect } from "react";
import styled from "styled-components";
import database from '@react-native-firebase/database';
import auth from "@react-native-firebase/auth"

import Room from "./room";
import { Colors, Dimensions } from "@theme";
import InputModal from "@components/inputModal";
import utilParseContentData from "@utils/utilParseData";
import { FlatList } from "react-native";
import AnimatedButton from "../../components/animatedButton";
import ScreenWrapper from "@components/screenWrapper";

const columns = 3;
const itemMargin = 10;
const itemWidth = (Dimensions.SCREEN_WIDTH - (itemMargin * (columns + 1))) / columns;

const Icon = styled.Image`
    tintColor: white;
    resizeMode: contain;
    width: 35px;
`;

const ListEmpty = styled.View`
    backgroundColor: ${Colors.BLUE};
    width: ${Dimensions.SCREEN_WIDTH - 70}px;
    alignItems: center;
    marginTop: 20px;
    borderRadius: 15px;
`;

const Title = styled.Text`
    fontSize: 16px;
    color: black;
    fontFamily: consolai;

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

    const createRoom = (roomName) => {
        const userMail = auth().currentUser.email;

        const roomObject = {
            name: roomName,
            createdBy: userMail.split('@')[0],
            date: new Date().toISOString(),
            type: "room",
        }

        database().ref("rooms/").push(roomObject);
    }
    console.log(rooms)
    const handleCreateRoom = (roomName) => {
        setInputModalVisible(false)
        createRoom(roomName)
    }
    return (
        <ScreenWrapper
            title="Sohbet Odaları"
            rightItem={
                <AnimatedButton onPress={() => auth().signOut()}>
                    <Icon source={(require("@assets/images/logout.png"))} />
                </AnimatedButton>
            }
        >

            <InputModal
                placeholder="Oda ismi giriniz..."
                buttonText="Oda Ekle"
                visible={inputModalVisible}
                onClose={() => setInputModalVisible(false)}
                onCreateRoom={handleCreateRoom}
            />

            <FlatList
                data={[{ name: "Oda Ekle" }, ...rooms]}
                renderItem={({ item, index }) => index === 0 ?
                    <Room room={item} width={itemWidth} addRoom margin={itemMargin / 2} onPress={() => setInputModalVisible(true)} />
                    : <Room room={item} width={itemWidth} margin={itemMargin / 2} onPress={() => navigation.navigate("MessagesScreen", { room: item })} />}
                ListEmptyComponent={<ListEmpty><Title>Sağ alttaki butondan oda ekleyebilirsiniz</Title></ListEmpty>}
                numColumns="3"
                style={{ padding: itemMargin / 2 }}
            />
        </ScreenWrapper>
    )
}

export default Rooms;