import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';

//importing screens to put in stack navigator
import StoresScreen from './app/screens/stores';

import rootReducer from './app/reducers';

const Stack = createStackNavigator();

// creating store from the reducers
const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export default function App() {
	return (
		// providing store to the navigator
		<Provider store={store}>
			<NavigationContainer>
				<Stack.Navigator screenOptions={{
                    headerShown: false
                }}>
					<Stack.Screen
						name="Stores"
						component={StoresScreen}
						options={{ title: 'Ice Cream Shops' }}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</Provider>
	);
}
