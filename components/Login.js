import { View, Text, TextInput, StyleSheet } from 'react-native';
import { useState } from 'react'
import PressableButton from './PressableButton';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const changeEmailHandler = (changedEmail) => {
		setEmail(changedEmail);
	}
	const changePasswordHandler = (changedPassword) => {
		setPassword(changedPassword);
	}

	const loginHandler = () => {
		console.log("current user:", email, password);
	}

	const registerHandler = () => {
		navigation.replace("Signup")
		console.log("Register pressed!")
	}

  return (
    <View style={styles.container}>
			<View style = {styles.inputContainer}>
				<Text>Email Address</Text>
				<TextInput
					style={styles.input} 
					value={email}
					onChangeText={changeEmailHandler} 
					placeholder="enter your email"
					keyboardType="default"
				/>
				<Text>password</Text>
				<TextInput
					style={styles.input} 
					value={password}
					onChangeText={changePasswordHandler} 
					placeholder="enter your password"
					keyboardType="default"
				/>
			</View>
			<PressableButton
				pressedFunction={loginHandler}
				defaultStyle={{ backgroundColor: '#E6E6FA', padding: 5 }}
				pressedStyle={{ backgroundColor: '#E6E6FA', opacity: 0.6 }}
			>
				<Text style={styles.pressableText}>Login</Text>
			</PressableButton>
			<PressableButton
				pressedFunction={registerHandler}
				defaultStyle={{ backgroundColor: '#E6E6FA', padding: 5 }}
				pressedStyle={{ backgroundColor: '#E6E6FA', opacity: 0.6 }}
			>
				<Text style={styles.pressableText}>New User? Create an account</Text>
			</PressableButton>
    </View>
  );
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
    backgroundColor: '#E6E6FA',
    alignItems: 'center',
    justifyContent: 'center',
	},
	inputContainer: {
		marginHorizontal: 20,
	},
	input: {
		height: 35,
		width: 380,
		borderColor:'black',
		borderWidth: 2,
		marginTop: 10,
		marginBottom: 15,
	},
	pressableText: {
		color: '#1E90FF'
	}
})

export default Login;