import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Skip = ({ ...props }) => (
	<TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
		<Text style={{ fontSize: 16 }}>Skip</Text>
	</TouchableOpacity>
);

const Next = ({ ...props }) => (
	<TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
		<Text style={{ fontSize: 16 }}>Next</Text>
	</TouchableOpacity>
);

const Done = ({ ...props }) => (
	<TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
		<Text style={{ fontSize: 16 }}>Done</Text>
	</TouchableOpacity>
);

const OnboardingScreen = ({ navigation }) => {
	return (
		<Onboarding
			SkipButtonComponent={Skip}
			NextButtonComponent={Next}
			DoneButtonComponent={Done}
			onSkip={() => navigation.replace('Login')}
			onDone={() => navigation.navigate('Login')}
			pages={[
				{
					backgroundColor: '#a6e4d0',
					image: <Image source={require('../assets/0.png')} />,
					title: 'Connect to the World',
					subtitle: 'A New Way To Connect With The World'
				},
				{
					backgroundColor: '#fdeb93',
					image: <Image source={require('../assets/2.png')} />,
					title: 'Share Your Favorites',
					subtitle: 'Share Your Thoughts With Similar Kind of People'
				},
				{
					backgroundColor: '#e9bcbe',
					image: <Image source={require('../assets/3.png')} />,
					title: 'Become The Star',
					subtitle: 'Let The Spot Light Capture You'
				}
			]}
		/>
	);
};

export default OnboardingScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	}
});
