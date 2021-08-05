import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './screens/Login';
import OnboardingScreen from './screens/OnboardingScreen';

import AsyncStorage from '@react-native-async-storage/async-storage';

const AppStack = createStackNavigator();

const App = () => {
	const [ isFirstLaunch, setIsFirstLaunch ] = React.useState(null);

	useEffect(() => {
		AsyncStorage.getItem('alreadyLaunched').then((value) => {
			if (value == null) {
				AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
				setIsFirstLaunch(true);
			} else {
				setIsFirstLaunch(false);
			}
		}); // Add some error handling, also you can simply do setIsFirstLaunch(null)
	}, []);

	if (isFirstLaunch == null) {
		return null; // This is the 'tricky' part: The query
		// to AsyncStorage is not finished, but we have to present
		//something to the user. Null will just render nothing,
		//so you can also put a placeholder of some sort, but effectively the interval
		// between the first mount and AsyncStorage retrieving your data won't be noticeable to the user.
		//But if you want to display anything then you can use a LOADER here
	} else if (isFirstLaunch == true) {
		return (
			<NavigationContainer>
				<AppStack.Navigator headerMode="none">
					<AppStack.Screen name="Onboarding" component={OnboardingScreen} />
					<AppStack.Screen name="Login" component={Login} />
				</AppStack.Navigator>
			</NavigationContainer>
		);
	} else {
		return <Login />;
	}
};

export default App;
