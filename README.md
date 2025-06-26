# TheraTalk Mobile App

A mental health and therapy companion mobile application built with React. This app provides users with therapeutic tools, chat functionality, exercises, and profile management to help track their mental health journey.

## Features

### 🏠 Home Screen
- Personalized greeting with user's name
- Interactive mood tracking chart with weekly data visualization
- Daily journal section with call-to-action
- Quick actions for easy access to key features (Journal, Exercises, Library)

### 💬 Chat Screen
- Real-time conversational interface with AI therapist
- Message bubbles with distinct styling for user and system messages
- Text input with microphone and send functionality
- Automatic AI responses to user messages

### 🧘 Exercises Screen
- Grid layout of 6 therapeutic exercises:
  - Breathing Exercise
  - Mindfulness Meditation
  - Gratitude Practice
  - Progressive Muscle Relaxation
  - Cognitive Restructuring
  - Journaling Prompts
- Interactive exercise cards with detailed modal popups
- Step-by-step instructions for each exercise
- Duration estimates and "Start Exercise" functionality

### 👤 Profile Screen
- User profile with photo and name display
- Settings menu with 7 options:
  - Personal Information
  - Therapy Goals
  - Progress Summary
  - Notification Settings
  - Privacy & Security
  - Help & Support
  - Sign Out

## Design System

### Color Palette
- **Primary Green**: #7ED321 (headers, active states, buttons)
- **Background**: #FFFFFF (clean white)
- **Text Primary**: #000000 (main text)
- **Text Secondary**: #666666 (secondary text)
- **Message Bubbles**: Green for user, light gray for system

### Typography
- **App Title**: Custom script font for "TheraTalk" branding
- **Headers**: Bold sans-serif for section titles
- **Body Text**: Regular sans-serif for content
- **Navigation**: Medium weight sans-serif for tabs

### Layout
- Mobile-first responsive design
- iPhone-style frame with rounded corners
- Consistent green header across all screens
- Bottom navigation with 4 tabs
- Card-based content sections with subtle shadows

## Technical Stack

- **Frontend Framework**: React 18
- **Styling**: Tailwind CSS with custom components
- **Icons**: Lucide React icons
- **Charts**: Recharts for data visualization
- **Routing**: React Router DOM
- **UI Components**: shadcn/ui components
- **Build Tool**: Vite

## Converting to Mobile App

### Option 1: React Native (Recommended)
1. **Install React Native CLI**:
   ```bash
   npm install -g @react-native-community/cli
   ```

2. **Create new React Native project**:
   ```bash
   npx react-native init TheraTalkMobile
   ```

3. **Port Components**: 
   - Convert React components to React Native equivalents
   - Replace HTML elements with React Native components:
     - `div` → `View`
     - `button` → `TouchableOpacity` or `Button`
     - `input` → `TextInput`
     - `img` → `Image`

4. **Styling Migration**:
   - Convert Tailwind CSS to React Native StyleSheet
   - Use Flexbox for layouts (similar to current implementation)
   - Implement responsive design with Dimensions API

5. **Navigation**:
   - Replace React Router with React Navigation
   - Use Bottom Tab Navigator for main navigation

6. **Charts**:
   - Replace Recharts with react-native-chart-kit or Victory Native

### Option 2: Expo (Easier Setup)
1. **Install Expo CLI**:
   ```bash
   npm install -g @expo/cli
   ```

2. **Create Expo project**:
   ```bash
   npx create-expo-app TheraTalkMobile
   ```

3. **Follow similar component migration as React Native**

### Option 3: Capacitor (Web-to-Mobile)
1. **Install Capacitor**:
   ```bash
   npm install @capacitor/core @capacitor/cli
   npm install @capacitor/ios @capacitor/android
   ```

2. **Initialize Capacitor**:
   ```bash
   npx cap init TheraTalk com.yourcompany.theratalk
   ```

3. **Build and add platforms**:
   ```bash
   npm run build
   npx cap add ios
   npx cap add android
   npx cap sync
   ```

## Key Components to Port

### 1. Navigation Component
- Bottom tab navigation with 4 tabs
- Active/inactive state management
- Icon integration

### 2. Home Component
- Mood chart with interactive data points
- Daily journal section
- Quick actions grid

### 3. Chat Component
- Message list with scrolling
- Input field with send functionality
- Real-time message updates

### 4. Exercises Component
- Grid layout of exercise cards
- Modal popup for exercise details
- Interactive card selection

### 5. Profile Component
- User profile display
- Settings menu list
- Navigation to sub-pages

## App Store Submission Requirements

### iOS App Store
1. **Apple Developer Account** ($99/year)
2. **App Icons**: Multiple sizes (20x20 to 1024x1024)
3. **Screenshots**: Various device sizes
4. **Privacy Policy**: Required for health apps
5. **App Store Guidelines**: Follow health app guidelines
6. **TestFlight**: Beta testing before release

### Google Play Store
1. **Google Play Console Account** ($25 one-time)
2. **App Bundle**: .aab format
3. **Store Listing**: Screenshots, descriptions
4. **Privacy Policy**: Required
5. **Content Rating**: Health & Fitness category
6. **Target API Level**: Latest Android requirements

## Additional Considerations

### Health Data Privacy
- Implement secure data storage
- Add encryption for sensitive information
- Comply with HIPAA if applicable
- Clear privacy policy and data handling

### Performance Optimization
- Implement lazy loading for components
- Optimize images and assets
- Use React.memo for expensive components
- Implement proper state management

### Accessibility
- Add screen reader support
- Implement proper contrast ratios
- Add keyboard navigation
- Include accessibility labels

### Testing
- Unit tests for components
- Integration tests for user flows
- Device testing on multiple screen sizes
- Performance testing

## File Structure
```
src/
├── components/
│   ├── Navigation.jsx
│   ├── Home.jsx
│   ├── Chat.jsx
│   ├── Exercises.jsx
│   ├── Profile.jsx
│   ├── ExerciseDetail.jsx
│   └── ui/
│       ├── button.jsx
│       └── input.jsx
├── assets/
│   └── sarah-profile.jpg
├── App.jsx
├── App.css
└── main.jsx
```

## Getting Started

1. **Clone/Download** the project files
2. **Install dependencies**: `npm install`
3. **Run development server**: `npm run dev`
4. **Build for production**: `npm run build`
5. **Choose mobile conversion method** (React Native, Expo, or Capacitor)
6. **Follow platform-specific setup guides**
7. **Test on physical devices**
8. **Submit to app stores**

## Support

For questions about mobile app conversion or app store submission, refer to:
- [React Native Documentation](https://reactnative.dev/)
- [Expo Documentation](https://docs.expo.dev/)
- [Apple Developer Guidelines](https://developer.apple.com/app-store/guidelines/)
- [Google Play Console Help](https://support.google.com/googleplay/android-developer/)

---

**Note**: This is a complete, functional React web application that closely matches your original design. The code is ready for conversion to a native mobile app using any of the suggested methods above.

