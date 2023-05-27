import styled from "styled-components/native";
import { Platform } from "react-native";


const iOS = Platform.OS;

export const Container = styled.View`
  flex: 1;

  background-color: #E5E5E5;
`;



export const HeaderBackground = styled.View`
 
  width: 100%;
  min-height: 230px;
  max-height: 250px;
  padding-top: ${Platform.OS === 'android' ? 32 : 62}px;

  background-color: #5429cc;
`;
export const HeaderTop = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 24px;
`;
export const Icon = styled.Image`

`;
export const Title = styled.Text`
    color: #fff;
    font-size: 20px;
    font-weight: 700;
    line-height: 22px;
    text-align: left;
    margin-left: 13px;
`;

export const Logo =styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: center;

`;
export const Button = styled.TouchableOpacity`
   //width: 130px;
    height: 40px;
    border-radius: 5px;
    background-color: #6933FF;
    padding: 11px 16px;
    align-items: center;
    justify-content: center;
`;
export const Label = styled.Text`
    color: #fff;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: right;   
   
`;
