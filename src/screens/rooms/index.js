import React, { useState } from "react";
import styled from "styled-components";

import Room from "./room";
import { Colors, Dimensions } from "@theme";
import Header from "@components/header";
import AddButton from "@components/addButton";
import InputModal from "@components/inputModal";

const Container = styled.View`
    backgroundColor: ${Colors.SOFT_GRAY};
    height: 100%;
`;

const Text = styled.Text`

`;

export function Rooms() {
    const [inputModalVisible, setInputModalVisible] = useState(false);



    return (
        <Container>
            <Header title="Odalar" />
            <AddButton onPress={() => setInputModalVisible(true)} />
            <InputModal
                placeholder="Oda ismi giriniz..."
                buttonText="Oda Ekle"
                visible={inputModalVisible}
                onClose={() => setInputModalVisible(false)} />
            <Room />
        </Container>
    )
}

export default Rooms;