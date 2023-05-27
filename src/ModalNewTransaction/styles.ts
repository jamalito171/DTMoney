import styled from "styled-components/native";

export const ModalTransaction =styled.Modal`
    

`
export const BackGroundOverlay = styled.View`
    background-color : rgba(0, 0, 0, 0.3);
    opacity: 0.7;
    justify-content: flex-end;
    flex: 1;
`
export const ModalContainer = styled.View`
    flex: 0.5;
    padding: 0 24px;
    padding-top: 24px;
    background-color : #fff;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
`

export const ModalHeader = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`
export const ModalTitle = styled.Text`
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    color: #363f5f;
`
export const ModalButtonClose = styled.TouchableOpacity`

`
export const ModalButtonCloseLabel = styled.Text`
    font-size: 20px;
    font-weight: 500;
    line-height: 20px;
    color: #363f5f;
`