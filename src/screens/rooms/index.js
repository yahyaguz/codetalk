import React, { useState, useEffect } from "react";
import { ActivityIndicator, View, FlatList } from "react-native"
import auth from "@react-native-firebase/auth"
import database from '@react-native-firebase/database';
import styled from "styled-components";

import utilParseContentData from "@utils/utilParseData";
import { Colors, Dimensions } from "@theme";

import ScreenWrapper from "@components/screenWrapper";
import Room from "./room";
import InputModal from "@components/inputModal";
import AnimatedButton from "@components/animatedButton";

const columns = 3;
const itemMargin = 10;
const itemWidth = (Dimensions.SCREEN_WIDTH - (itemMargin * (columns + 1))) / columns;

const Icon = styled.Image`
    tintColor: white;
    resizeMode: contain;
    width: 35px;
`;

export function Rooms({ navigation }) {

    const [inputModalVisible, setInputModalVisible] = useState(false);
    const [rooms, setRooms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        database().ref("rooms/").on("value", snapshot => {
            const parsedData = utilParseContentData(snapshot.val());
            setRooms(parsedData);
            setLoading(false)
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
    console.log(loading)
    const handleCreateRoom = (roomName) => {
        setInputModalVisible(false)
        createRoom(roomName)
    }

    const renderRooms = ({ item, index }) => index === 0 ?
        <Room room={item} width={itemWidth} addRoom margin={itemMargin / 2} onPress={() => setInputModalVisible(true)} />
        : <Room room={item} width={itemWidth} margin={itemMargin / 2} onPress={() => navigation.navigate("MessagesScreen", { room: item })} />


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
                placeholder=" Oda ismi giriniz..."
                buttonText="Oda Ekle"
                visible={inputModalVisible}
                onClose={() => setInputModalVisible(false)}
                onCreateRoom={handleCreateRoom}
            />

            {
                loading ? <View style={{ height: Dimensions.SCREEN_HEIGHT, justifyContent: "center" }}>
                    <ActivityIndicator color={Colors.DARK_BLUE} size="large" />
                </View>
                    : <FlatList
                        data={[{ name: "Oda Ekle" }, ...rooms]}
                        keyExtractor={(item) => `room-${item?.id}`}
                        renderItem={renderRooms}
                        numColumns="3"
                        style={{ padding: itemMargin / 2 }}
                    />
            }
        </ScreenWrapper>
    )
}

export default Rooms;