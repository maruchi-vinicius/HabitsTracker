import { ActivityIndicator, View } from "react-native";

export function Loading(){
    return (
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: '#09090a', alignItems: 'center'}}>
            <ActivityIndicator color='#7c3aed'/>
        </View>
    )
}