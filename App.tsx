import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import StackNavigator from './src/routes/Stack';
import { StatusBar } from 'react-native';
import { AuthProvider } from './src/context/AuthContext';
import color from './src/styles/colors';

const Stack = createStackNavigator();

export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={color.bg} />
        <StackNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}