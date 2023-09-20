import styled from "styled-components";
import { Colors, Dimensions } from "@theme";

const Container = styled.TouchableOpacity`
    width: 48px;
    height: 48px;
    justifyContent: center;
    alignItems: center;
    right:15px;
    bottom:15px;
    position:absolute;
    borderRadius: 25px;
    backgroundColor: ${Colors.DARK_GREEN};
`;
const Icon = styled.Image`
    tintColor: white;
`;

export default AddButton = ({ onPress, ...props }) => {

    return (
        <Container onPress={onPress} {...props}>
            <Icon source={(require("@assets/images/plus.png"))} />
        </Container>
    )
}