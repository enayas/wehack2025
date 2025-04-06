import { Tabs } from 'expo-router';
import { Image, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#8E2246',
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#F3EDDE', // Background color of the navbar (tab bar)
          borderTopWidth: 0, // Optional: Remove the border at the top of the tab bar
        },
      }}
    >
      
      <Tabs.Screen
        name="chat"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{paddingTop:8}}>            
              <TabBarIcon name="chat" color={color} size={size} style={{paddingTop:8,}}/>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ color, size }) => (
            <View style={{paddingTop:8}}>            
              <TabBarIcon name="magnify" color={color} size={size} style={{paddingTop:8,}}/>
            </View>
          ),
        }}
      />
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require('../assets/images/discoverIcon.webp')} // 👈 your image path
              style={{
                paddingTop:8,
                width: 40,
                height: 40,
                opacity: focused ? 1 : 0.5,
              }}
              resizeMode="contain"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          tabBarIcon: ({ color, size}) => (
            <View style={{paddingTop:8}}>            
              <TabBarIcon name="map" color={color} size={size} style={{paddingTop:8,}}/>
            </View>

          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color, size}) => (
            <View style={{paddingTop:8}}>            
              <TabBarIcon name="account" color={color} size={size} style={{paddingTop:8,}}/>
            </View>

          ),
        }}
      />

    </Tabs>
  );
}


function TabBarIcon({ name, color, size }: { name: any; color: string; size: number }) {
  return <MaterialCommunityIcons name={name} color={color} size={size} />;
}