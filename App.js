import * as React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import About from './Navigation/About';
import Tickers from './Navigation/Tickers';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faChartArea,
  faChartLine,
  faMobile,
  faMobileAlt,
} from '@fortawesome/free-solid-svg-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color, size}) => {
              let iconName;

              if (route.name === 'О приложении') {
                iconName = focused ? faMobile : faMobileAlt;
              } else if (route.name === 'Котировки') {
                iconName = focused ? faChartArea : faChartLine;
              }

              return (
                <FontAwesomeIcon icon={iconName} size={size} color={color} />
              );
            },
          })}>
          <Tab.Screen name="О приложении" component={About} />
          <Tab.Screen name="Котировки" component={Tickers} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}
