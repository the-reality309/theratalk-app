# Mobile App Conversion Guide

## React Native Conversion Steps

### 1. Component Mapping

#### Current React Components → React Native Components

```javascript
// Current React (Web)
<div className="container">
  <button onClick={handleClick}>
    <span>Button Text</span>
  </button>
  <input 
    type="text" 
    placeholder="Enter text"
    value={value}
    onChange={handleChange}
  />
  <img src={imageUrl} alt="Description" />
</div>

// React Native Equivalent
<View style={styles.container}>
  <TouchableOpacity onPress={handleClick}>
    <Text>Button Text</Text>
  </TouchableOpacity>
  <TextInput
    placeholder="Enter text"
    value={value}
    onChangeText={handleChange}
    style={styles.input}
  />
  <Image source={{uri: imageUrl}} style={styles.image} />
</View>
```

### 2. Navigation Conversion

#### Current React Router → React Navigation

```javascript
// Install React Navigation
npm install @react-navigation/native @react-navigation/bottom-tabs
npm install react-native-screens react-native-safe-area-context

// Current Web Navigation
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// React Native Navigation
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Exercises" component={Exercises} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
```

### 3. Styling Conversion

#### Tailwind CSS → React Native StyleSheet

```javascript
// Current Tailwind Classes
className="bg-green-500 text-white px-4 py-2 rounded-lg"

// React Native StyleSheet
const styles = StyleSheet.create({
  button: {
    backgroundColor: '#7ED321',
    color: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  }
})
```

### 4. Chart Library Conversion

#### Recharts → React Native Chart Kit

```javascript
// Install React Native Chart Kit
npm install react-native-chart-kit react-native-svg

// Current Recharts
import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts'

// React Native Chart Kit
import { LineChart } from 'react-native-chart-kit'

const chartConfig = {
  backgroundColor: '#ffffff',
  backgroundGradientFrom: '#ffffff',
  backgroundGradientTo: '#ffffff',
  color: (opacity = 1) => `rgba(126, 211, 33, ${opacity})`,
}

<LineChart
  data={{
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [{ data: [6, 7, 5, 8, 6] }]
  }}
  width={300}
  height={200}
  chartConfig={chartConfig}
/>
```

## Expo Conversion (Recommended for Beginners)

### 1. Create Expo Project

```bash
npx create-expo-app TheraTalkMobile --template blank
cd TheraTalkMobile
```

### 2. Install Dependencies

```bash
npx expo install @react-navigation/native @react-navigation/bottom-tabs
npx expo install react-native-screens react-native-safe-area-context
npx expo install react-native-chart-kit react-native-svg
npx expo install expo-linear-gradient
```

### 3. Component Structure

```
src/
├── components/
│   ├── Navigation.js
│   ├── screens/
│   │   ├── HomeScreen.js
│   │   ├── ChatScreen.js
│   │   ├── ExercisesScreen.js
│   │   └── ProfileScreen.js
│   └── ui/
│       ├── Button.js
│       └── Input.js
├── assets/
│   └── images/
└── styles/
    └── globalStyles.js
```

## Capacitor Conversion (Web-to-Mobile)

### 1. Install Capacitor

```bash
npm install @capacitor/core @capacitor/cli
npm install @capacitor/ios @capacitor/android
```

### 2. Initialize and Configure

```bash
npx cap init TheraTalk com.yourcompany.theratalk
npm run build
npx cap add ios
npx cap add android
```

### 3. Mobile-Specific Adjustments

```javascript
// Add mobile-specific CSS
@media (max-width: 768px) {
  .mobile-frame {
    width: 100vw;
    height: 100vh;
    border: none;
    border-radius: 0;
  }
}

// Add touch-friendly interactions
.exercise-card {
  @apply transition-transform active:scale-95;
}
```

## Key Files to Convert

### 1. App.jsx → App.js (React Native)

```javascript
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'

import HomeScreen from './src/screens/HomeScreen'
import ChatScreen from './src/screens/ChatScreen'
import ExercisesScreen from './src/screens/ExercisesScreen'
import ProfileScreen from './src/screens/ProfileScreen'

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === 'Chat') {
              iconName = focused ? 'chatbubble' : 'chatbubble-outline'
            } else if (route.name === 'Exercises') {
              iconName = focused ? 'fitness' : 'fitness-outline'
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline'
            }
            
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#7ED321',
          tabBarInactiveTintColor: 'gray',
          headerStyle: {
            backgroundColor: '#7ED321',
          },
          headerTitleStyle: {
            fontFamily: 'System', // Use custom font here
            fontSize: 24,
            fontWeight: 'bold',
          },
          headerTitle: 'TheraTalk',
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Exercises" component={ExercisesScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
```

### 2. HomeScreen.js (React Native)

```javascript
import React from 'react'
import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native'
import { LineChart } from 'react-native-chart-kit'
import { Ionicons } from '@expo/vector-icons'

const { width } = Dimensions.get('window')

export default function HomeScreen() {
  const moodData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
    datasets: [
      {
        data: [6, 7, 5, 8, 6],
        strokeWidth: 3,
      },
    ],
  }

  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgba(126, 211, 33, ${opacity})`,
    strokeWidth: 3,
    barPercentage: 0.5,
  }

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Good morning, Sarah</Text>
      
      <View style={styles.moodSection}>
        <Text style={styles.sectionTitle}>Mood</Text>
        <LineChart
          data={moodData}
          width={width - 40}
          height={200}
          chartConfig={chartConfig}
          style={styles.chart}
        />
      </View>

      <View style={styles.journalSection}>
        <Text style={styles.sectionTitle}>Daily Journal</Text>
        <Text style={styles.description}>
          Keep track of your thoughts and feelings
        </Text>
        <TouchableOpacity style={styles.continueButton}>
          <Text style={styles.buttonText}>Continue Writing</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.quickActions}>
        <Text style={styles.sectionTitle}>Quick Actions</Text>
        <View style={styles.actionsGrid}>
          <TouchableOpacity style={styles.actionItem}>
            <View style={styles.actionIcon}>
              <Ionicons name="journal" size={24} color="white" />
            </View>
            <Text style={styles.actionText}>Journal</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionItem}>
            <View style={styles.actionIcon}>
              <Ionicons name="fitness" size={24} color="white" />
            </View>
            <Text style={styles.actionText}>Exercises</Text>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.actionItem}>
            <View style={styles.actionIcon}>
              <Ionicons name="library" size={24} color="white" />
            </View>
            <Text style={styles.actionText}>Library</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 20,
  },
  moodSection: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 12,
  },
  chart: {
    borderRadius: 8,
  },
  journalSection: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  description: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 16,
  },
  continueButton: {
    backgroundColor: '#7ED321',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  quickActions: {
    marginBottom: 20,
  },
  actionsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  actionItem: {
    alignItems: 'center',
    flex: 1,
  },
  actionIcon: {
    width: 48,
    height: 48,
    backgroundColor: '#7ED321',
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
  },
  actionText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#000000',
  },
})
```

## App Store Preparation

### 1. iOS Preparation

```bash
# For React Native
cd ios && pod install && cd ..
npx react-native run-ios

# For Expo
npx expo run:ios
```

### 2. Android Preparation

```bash
# For React Native
npx react-native run-android

# For Expo
npx expo run:android
```

### 3. Build for Production

```bash
# Expo
npx expo build:ios
npx expo build:android

# React Native
# Follow platform-specific build guides
```

## Testing Checklist

- [ ] All screens render correctly on different device sizes
- [ ] Navigation works smoothly between tabs
- [ ] Chat functionality works with text input
- [ ] Exercise modals open and close properly
- [ ] Profile screen displays user information
- [ ] App works on both iOS and Android
- [ ] Performance is smooth with no lag
- [ ] All interactive elements respond to touch
- [ ] App follows platform design guidelines

## Next Steps

1. Choose your preferred conversion method (React Native, Expo, or Capacitor)
2. Set up the development environment
3. Convert components one by one
4. Test on physical devices
5. Prepare app store assets (icons, screenshots, descriptions)
6. Submit to App Store and Play Store

This guide provides everything you need to convert the web app to a native mobile application ready for app store submission.

