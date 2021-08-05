import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, Platform, StyleSheet, Button, ScrollView } from 'react-native';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import SocialButton from '../components/SocialButton';

const Login = ({ navigation }) => {
	const [ email, setEmail ] = useState();
	const [ password, setPassword ] = useState();
	return (
		<View style={styles.container}>
			<Image source={require('../assets/logo.png')} style={styles.logo} />
			<Text style={styles.text}>Kiteforce</Text>
			<FormInput
				labelValue={email}
				onChangeText={(userEmail) => setEmail(userEmail)}
				placeholderText="Email"
				iconType="user"
				KeyboardType="email-addres"
				autoCapitalize="none"
				autoCorrect={false}
			/>

			<FormInput
				labelValue={password}
				onChangeText={(userPassword) => setPassword(userPassword)}
				placeholderText="Password"
				iconType="user"
				KeyboardType="email-addres"
				secureTextEntry={true}
			/>

			<FormButton buttonTitle="Login" onPress={() => alert('sign In Clicked')} />

			<SocialButton
				buttonTitle="signup with Facebook"
				btnType="facebook"
				color="#4867aa"
				backgroundColor="#e6eaf4"
				onPress={() => {}}
			/>

			<SocialButton
				buttonTitle="signup with Google"
				btnType="google"
				color="#de4d41"
				backgroundColor="#f5e7ea"
				onPress={() => {}}
			/>

			<TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
				<Text style={styles.navButtonText}>Forgot password?</Text>
			</TouchableOpacity>

			<Button title="go to details screen .. again" onPress={() => navigation.navigate('Signup')} />

			<TouchableOpacity style={styles.forgotButton} onPress={() => navigation.navigate('Signup')}>
				<Text style={styles.navButtonText}>Don't have an acount? Create here</Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;

const styles = StyleSheet.create({
	container: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 20,
		paddingTop: 50
	},
	logo: {
		height: 150,
		width: 150,
		resizeMode: 'cover'
	},
	text: {
		fontSize: 28,
		marginBottom: 10,
		color: '#051d5f'
	},
	navButton: {
		marginTop: 15
	},
	forgotButton: {
		marginVertical: 35
	},
	navButtonText: {
		fontSize: 18,
		fontWeight: '500',
		color: '#2e64e5'
	}
});
