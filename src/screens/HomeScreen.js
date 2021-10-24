import * as React from 'react';
import { View, Text, Button } from 'react-native';
// import MySearchBar from "../components";
// import MyButton from "../components/atoms/MyButton";


function HomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Médico"
                onPress={() => navigation.navigate('DoctorHome')}
            />
            <Button
                title="Enfermeira"
                onPress={() => navigation.navigate('NurseHome')}
            />
            {/*<MySearchBar></MySearchBar>*/}
            {/*<MyButton>Teste</MyButton>*/}
        </View>
    );
}

export default HomeScreen;
