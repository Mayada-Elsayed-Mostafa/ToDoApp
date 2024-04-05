import { useState } from 'react'
import { View, StatusBar, Button } from 'react-native'

export default function Try() {
    const [set, isSet] = useState(false);
    return (
        <View>
            <StatusBar hidden={set} />
            <Button title='press' onPress={() => isSet(true)} />
            <Button title='press' onPress={() => isSet(false)} />
        </View>
    );
}