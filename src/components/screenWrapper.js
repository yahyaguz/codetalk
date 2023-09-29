import React from 'react'
import { ScrollView, KeyboardAvoidingView } from 'react-native';
import styled from 'styled-components'
import Header from './header';
import { Colors, Dimensions } from "@theme/";

const Wrapper = styled.SafeAreaView`
    height:100%;
    backgroundColor: ${({ backgroundColor }) => backgroundColor || Colors.SOFT_GRAY};
    justifyContent: ${({ verticalCentered }) => verticalCentered ? "center" : "flex-start"};
    ${({ horizontalCentered }) => horizontalCentered ? "alignItems: center;" : null};
`;

export default ScreenWrapper = ({ children, title, rightItem, navigation, scrollViewEnabled, verticalCentered, horizontalCentered, backgroundColor }) => {

    const ScrollViewRender =
        <ScrollView
            scrollEnabled={true}
            automaticallyAdjustKeyboardInsets={true}
            contentContainerStyle={{
                minHeight: "100%",
                justifyContent: verticalCentered ? "center" : "flex-start",
                alignItems: horizontalCentered ? "center" : null,
            }}
        >
            {children}
        </ScrollView>

    const ContentRender =
        <KeyboardAvoidingView style={{ height: Dimensions.WITHOUT_BAR_SCREEN_HEIGHT - Dimensions.HEADER_HEIGHT }} behavior='padding'>
            {children}
        </KeyboardAvoidingView>

    return (
        <Wrapper verticalCentered={verticalCentered} horizontalCentered={horizontalCentered} backgroundColor={backgroundColor}>

            {title && <Header title={title} rightItem={rightItem} navigation={navigation} />}
            {
                scrollViewEnabled ? ScrollViewRender : ContentRender
            }
        </Wrapper>
    )
};