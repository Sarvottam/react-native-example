import Home from "../screens/home"
import { createStackNavigator } from "@react-navigation/stack";
const DefaultStack = createStackNavigator();
const AuthStack = createStackNavigator();
const RootStack = createStackNavigator();

return (
    <>
    <Home/>
    const ProductStackScreen = () => (
  <DefaultStack.Navigator>
    <DefaultStack.Screen name="Product Search" component={Home} />
    <DefaultStack.Screen name="ProductInfo" component={Login} />
  </DefaultStack.Navigator>

  <AuthStack.Navigator>
    <AuthStack.Screen name="Product Search" component={Home} />
    <AuthStack.Screen name="ProductInfo" component={Login} />
    <AuthStack.Screen name="ProductInfo" component={Signup} />

  </AuthStack.Navigator>

  export const RootStackScreen = ({ login }) => (
  <RootStack.Navigator headerMode="none">
    {login ? (
      <RootStack.Screen
        name="App"
        component={DefaultStack}
        options={{
          animationEnabled: false,
        }}
      />
    ) : (
      <RootStack.Screen
        name="Auth"
        component={AuthStackScreen}
        options={{
          animationEnabled: false,
        }}
      />
    )}
  </RootStack.Navigator>
);

);


const RootNavigator = (props) => {
  return (
    <NavigationContainer>
      <DefaultStack login={props.login} />
    </NavigationContainer>
  );
};
    </>
)