import { View, Button, StyleSheet, Image, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import * as Location from "expo-location";
import { MAP_API } from "@env";
import { useNavigation, useRoute } from "@react-navigation/native";
import { saveUserInfo, getUserInfo } from "../firebase/firestoreHelper";


const windowWidth = Dimensions.get("window").width;

export default function LocationManager() {
  const navigation = useNavigation();
  const route = useRoute();

  const [status, requestPermission] = Location.useForegroundPermissions();
  const [location, setLocation] = useState(null);

  useEffect(() => {
    if (route.params) {
      // I have come from interactive map
      setLocation(route.params.selectedCoord);
    }
  }, [route]);

  useEffect(() => {
    //call getUserInfo and if there is location field
    // call setLocation
    async function getUserLocation() {
      try {
        const data = await getUserInfo();
        console.log(data);
        if (data.location) {
          setLocation(data.location);
        }
      } catch (err) {
        console.log("get user location ", err);
      }
    }
    getUserLocation();
  }, []);

  const verifyPermission = async () => {
    if (status.granted) {
      return true;
    }
    const response = await requestPermission();
    return response.granted;
  };
  async function locateMeHandler() {
    try {
      const hasPermission = await verifyPermission();
      if (!hasPermission) {
        Alert.alert("You need to give access to the location");
      }
      const locationObject = await Location.getCurrentPositionAsync();
      const obj = {
        latitude: locationObject.coords.latitude,
        longitude: locationObject.coords.longitude,
      }
      setLocation(obj);
      console.log("my lo", obj)
    } catch (err) {
      console.log("locate user ", err);
    }
  }
  const chooseLocationHandler = () => {
    // pass cords to Map
    navigation.navigate("Map", { initialLocation: location });
  };
  const saveLocationHandler = async () => {
    
    await saveUserInfo({location: location});
    // navigation.navigate("Home");
  }

  

  return (
    <View>
      <Button title="Locate Me!" onPress={locateMeHandler} />
      <Button
        title="Let me choose on the map"
        onPress={chooseLocationHandler}
      />
      {location && (
        <Image
          source={{
            uri: `https://maps.googleapis.com/maps/api/staticmap?center=${location.latitude},${location.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${location.latitude},${location.longitude}&key=${MAP_API}`,
          }}
          style={styles.image}
        />
      )}
      <Button disabled={!location} title="save location" onPress={saveLocationHandler}/>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: windowWidth,
    height: 300,
  },
});