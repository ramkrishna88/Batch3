import {useEffect, useState} from 'react';
import {Button} from 'react-native';
import {PersistanceHelper} from '../helpers';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {EventRegister} from 'react-native-event-listeners';
import {
  TestFlexScreen,
  TestStatePropsScreen,
  Dashboard,
  Login,
  TestPureComponent,
  TestPropsScreen,
  TestReduxScreen,
  TestReduxClassScreen,
  ListScreen,
  CartScreen,
  ListApiScreen,
  TestRefScreen,
} from '../screens';

const Stack = createNativeStackNavigator();

const Navigator = props => {
  const navigation = useNavigation();

  const [isUserLoggedin, setIsUserLoggedin] = useState(true);

  useEffect(() => {
    fetchUserEmail();

    let event = EventRegister.addEventListener('LoginEvent', data => {
      fetchUserEmail();
    });

    return () => {
      EventRegister.removeEventListener(event);
    };
  }, []);

  const fetchUserEmail = async () => {
    const userEmail = await PersistanceHelper.getValue('userEmail');

    if (userEmail && userEmail.length > 0) {
      setIsUserLoggedin(true);
    } else {
      setIsUserLoggedin(false);
    }
  };

  const getMainStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="testRefScreen"
          component={TestRefScreen}
          options={{title: 'Test Ref Screen'}}
        />
        <Stack.Screen
          name="listApiScreen"
          component={ListApiScreen}
          options={{title: 'List Api Screen'}}
        />
        <Stack.Screen
          name="listScreen"
          component={ListScreen}
          options={{
            title: 'List Screen',
            headerRight: () => (
              <Button
                onPress={() => {
                  navigation.navigate('cartScreen');
                }}
                title="Cart"
                color="red"
              />
            ),
          }}
        />
        <Stack.Screen
          name="cartScreen"
          component={CartScreen}
          options={{title: 'Cart Screen'}}
        />
        <Stack.Screen
          name="testReduxScreen"
          component={TestReduxScreen}
          options={{title: 'Test Reduc func Component'}}
        />
        <Stack.Screen
          name="testReduxClassScreen"
          component={TestReduxClassScreen}
          options={{title: 'Test Redux class Component'}}
        />

        <Stack.Screen
          name="testPropsScreen"
          component={TestPropsScreen}
          options={{title: 'Test Props Component'}}
        />
        <Stack.Screen
          name="testPureComponent"
          component={TestPureComponent}
          options={{title: 'Test Pure Component'}}
        />
        <Stack.Screen
          name="testStateProps"
          component={TestStatePropsScreen}
          options={{title: 'Test State and Props'}}
        />
        <Stack.Screen
          name="dashboard"
          component={Dashboard}
          options={{title: 'Dashboard'}}
        />
        <Stack.Screen
          name="testFlex"
          component={TestFlexScreen}
          options={{title: 'Testing Flex System'}}
        />
      </Stack.Group>
    );
  };

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="login"
          component={Login}
          options={{title: 'Login'}}
        />
      </Stack.Group>
    );
  };

  return <Stack.Navigator>{getMainStack()}</Stack.Navigator>;
};

export default Navigator;
