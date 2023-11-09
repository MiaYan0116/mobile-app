import { View, Text } from 'react-native';
import { auth } from '../firebase/firebaseSetup'

const Profile = () => {

  return (
    <View>
			<Text>{auth.currentUser.email}</Text>
			<Text>{auth.currentUser.uid}</Text>
    </View>
  );
}


export default Profile;