import React, { useState }from 'react'
import { StyleSheet, View, Text, TextInput, Button} from 'react-native';
import CheckBox from 'expo-checkbox';


const InfoCard = ({startHandler}) => {
  const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [phone, setPhone] = useState("");
	const [validName, setValidName] = useState(true);
	const [validEmail, setValidEmail] = useState(true);
	const [validPhone, setValidPhone] = useState(true);
	const [user, setUser] = useState("");
	const [isChecked, setIsChecked] = useState(false);


  function changeNameHandler(name){
    setName(name);
  }

	function changeEmailHandler(email){
		setEmail(email);
	}

	function changePhoneHandler(phone){
		setPhone(phone);
	}

	const toggleCheckbox = () => {
    setIsChecked(!isChecked);
  };

	function submitHandler(){
		if(!/^[a-zA-Z]+$/.test(name)){
			setValidName(false);
		}else{
			setValidName(true);
		}
		if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email)){
			setValidEmail(false);
		}else{
			setValidEmail(true);
		}
		if(phone.length != 10){
			setValidPhone(false);
		}else{
			setValidPhone(true);
		}
		if(validName == true && validEmail == true && validPhone == true){
			console.log("Submit button clicked");
			const newUser = {
				name: name,
				emailAddress: email,
				phoneNumber: phone
			}
			console.log(newUser);
			setUser(newUser);
			startHandler(newUser);
		}
	}

	function resetHandler(){
		setName("");
		setEmail("");
		setPhone("");
		setUser({});
		setValidName(true);
		setValidEmail(true);
		setValidPhone(true);
		setIsChecked(false);
	}

  return (
		<View>
			<View style={styles.startCard}>
				<Text style={styles.label}>Name</Text>
				<TextInput onChangeText={changeNameHandler}
									style={styles.input} 
									value={name}
									placeholder="enter here"
									keyboardType="default"	
				/>
				{!validName && <Text style={styles.errorText}>Please enter a valid name</Text>}
				<Text style={styles.label}>Email address</Text>
				<TextInput onChangeText={changeEmailHandler}
									style={styles.input} 
									value={email}
									placeholder="enter here"
									keyboardType="email-address"
				/>
				{!validEmail && <Text style={styles.errorText}>Please enter a valid email</Text>}
				<Text style={styles.label}>Phone number</Text>
				<TextInput onChangeText={changePhoneHandler}
									style={styles.input}
									value={phone} 
									placeholder="enter here"
									keyboardType="phone-pad"
				/>
				{!validPhone && <Text style={styles.errorText}>Please enter a valid phone number</Text>}
				<View style={styles.checkboxContainer}>
					<CheckBox
						disabled={false}
						value={isChecked}
						onValueChange={toggleCheckbox}
					/>
					<Text>I am not a robot</Text>
				</View>
				<View style={styles.buttonContainer}>
					<Button title='reset' onPress={resetHandler}></Button> 
					<Button title="start" onPress={submitHandler} disabled={!isChecked}></Button>
				</View>
			</View>
		</View>
  );
}

const styles = StyleSheet.create({
	greeting: {
		justifyContent: 'center',
	},
	startCard: {
		marginLeft: 20,
		marginRight: 20,
		marginBottom: 50,
	},
	label: {
		fontSize: 15,
		color: 'purple',
		marginTop: 20,
		marginBottom: 10
	},
  input: {
    borderColor:'purple',
    borderBottomWidth: 2,
  },
	buttonContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    marginTop: 30, 
  },
	checkboxContainer: {
		flexDirection: 'row', 
    justifyContent: 'space-around', 
		marginTop: 50, 
	},
	errorText: {
		fontSize: 10,
	}
});

export default InfoCard
