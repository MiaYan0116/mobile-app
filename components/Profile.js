import { View, Text } from 'react-native';
import { auth } from '../firebase/firebaseSetup'
import LocationManager from './LocationManager';

const Profile = () => {

  return (
    <View>
			<Text>{auth.currentUser.email}</Text>
			<Text>{auth.currentUser.uid}</Text>
      <LocationManager/>
    </View>
  );
}


export default Profile;