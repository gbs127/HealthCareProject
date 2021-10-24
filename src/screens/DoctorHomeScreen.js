import * as React from 'react';
import {View, Text, Button} from 'react-native';

function DoctorHomeScreen({ navigation }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
                title="Consultation"
                onPress={() => navigation.navigate('Consultation')}
            />
            <Button
                title="Vaccination"
                onPress={() => navigation.navigate('Consultation')}
            />
        </View>
    );
}

export default DoctorHomeScreen;
