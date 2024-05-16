import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BusinessInfo from '../Screens/BusinessInfo';
import AddCategory from '../Screens/AddCategory';
import AddTiming from '../Screens/AddTiming';
import AddPhotos from '../Screens/AddPhotos';
import AddDescription from '../Screens/AddDescription';
import CongratsScreen from '../Screens/CongratsScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>     
                <Stack.Screen
                    name="Register"
                    component={BusinessInfo}
                // options={{ title: 'Welcome' }}
                />
                <Stack.Screen
                    name="AddCategory"
                    component={AddCategory}
                /> 
                <Stack.Screen
                    name="AddTiming"
                    component={AddTiming}
                />   
                <Stack.Screen
                    name="AddPhotos"
                    component={AddPhotos}
                />  
                <Stack.Screen
                    name="AddDescription"
                    component={AddDescription}
                /> 
                <Stack.Screen
                    name="CongratsScreen"
                    component={CongratsScreen}
                />  
            </Stack.Navigator> 
        </NavigationContainer>
    );
};

export default AppNavigator