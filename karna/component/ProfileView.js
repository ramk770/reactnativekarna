import React from 'react';
import { Image } from 'react-native';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient';
import { useRoute } from '@react-navigation/native';

function ProfileView({ navigation }) {
  const router = useRoute();

  const { userData } = router.params;

  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>
      <LinearGradient colors={['orange', 'white', 'white']}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesome name="arrow-left" size={20} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Profile</Text>
        </View>

        <View>
          <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: 60 }}>
            {userData && userData.image && (
              <Image source={{ uri: userData.image }} style={{ width: 200, height: 200,borderRadius:200, resizeMode: 'contain' }} />
            )}
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', textAlign: 'center', alignSelf: 'center' }}>
                {userData && userData.name}
              </Text>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', textAlign: 'center', alignSelf: 'center' }}>
                {userData && userData.email}
              </Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      <View style={{ marginTop: 20, padding: 5 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', padding: 10, marginLeft: 10 }}> Details</Text>
        <TouchableOpacity>
          <View style={styles.details}>
            {/* Make sure user is defined before accessing its properties */}
            {userData && (
              <View style={{ flexDirection: 'row' }}>
                <FontAwesome name="phone" size={30} color="green" />
                <View>
                  <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', textAlign: 'left', marginLeft: 20 }}>
                    PhoneNumber: {userData.phoneNumber}
                  </Text>
                  <Text style={{ textAlign: 'center', fontSize: 15, fontWeight: 'bold', textAlign: 'left', marginLeft: 20 }}>
                    Role: {userData.role}
                  </Text>
                </View>
              </View>
            )}
            <View>
              <FontAwesome name="chevron-right" size={20} color="black" />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={{ marginTop: 10, padding: 6 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'black', padding: 10, marginLeft: 10 }}>About</Text>
        <View style={{ margin: 25 }}>
          <Text style={{ fontSize: 15, fontWeight: '200', color: 'grey' }}>
            Farmers across the globe work tirelessly to combat food waste, employing innovative techniques and sustainable practices to ensure a brighter future for generations to come.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    gap: 20,
    paddingHorizontal: 20,
    marginTop: 40,
    alignItems: 'center',
  },
  headerText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
  },
  details: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: {
      width: 35,
      height: 35,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 5,
    margin: 20,
    paddingHorizontal: 20,
    marginTop: 20,
  },
});

export default ProfileView;
