import React, { View, Text, TextInput } from 'react';
import {Button} from "react-native";

export default class MySearchBar extends View {
    render() {
        return(
            <view>
                <TextInput></TextInput>
                <Button>Pesquisar</Button>
            </view>
        )
    }
}
