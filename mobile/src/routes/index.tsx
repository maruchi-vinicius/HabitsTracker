import { NavigationContainer } from '@react-navigation/native'
import { View } from 'react-native'

import { AppRoutes } from './app.routes'

export function Routes() {
    return(
        <View style={{ flex:1, backgroundColor:'#09090A'}}>
            <NavigationContainer>
            <AppRoutes />
        </NavigationContainer>
        </View>
    )
}