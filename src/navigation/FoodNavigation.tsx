import { Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator, DrawerContentOptions } from '@react-navigation/drawer';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator, StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import Colors from '../constants/Colors';
import Fonts from '../constants/Fonts';
import CategoryMealsScreen from '../screens/CategoryMealScreen';
import CategoryScreen from '../screens/CategoryScreen';
import FavoriteScreen from '../screens/FavoritesScreen';
import FiltersScreen from '../screens/FiltersScreen';
import MealDetailScreen from '../screens/MealDetailScreen';

const Stack = createStackNavigator();
const stackScreenOptions: StackNavigationOptions = {
	headerTitleAlign: 'center',
	headerStyle: {
		backgroundColor: Colors.primaryColor
	},
	headerTitleStyle: {
		fontFamily: Fonts.openSansBold
	},
	headerBackTitleStyle: {
		fontFamily: Fonts.openSans
	},
	headerTintColor: 'white'
};

const MealsStackNavigator = () => (
	<Stack.Navigator screenOptions={stackScreenOptions}>
		<Stack.Screen name='Categories' component={CategoryScreen} />
		<Stack.Screen name='CategoryMeals' component={CategoryMealsScreen} />
		<Stack.Screen name='MealDetail' component={MealDetailScreen} />
	</Stack.Navigator>
);

const FavoriteMealsStackNavigator = () => (
	<Stack.Navigator screenOptions={stackScreenOptions}>
		<Stack.Screen name='Favorites' component={FavoriteScreen} />
		<Stack.Screen name='MealDetail' component={MealDetailScreen} />
	</Stack.Navigator>
);

const Tab = createMaterialBottomTabNavigator();
const tabNavOptions = {
	activeColor: Colors.accentColor,
	shifting: true
};
const MealsTabNavigator = () => (
	<Tab.Navigator {...tabNavOptions} screenOptions={{ tabBarColor: Colors.primaryColor }}>
		<Tab.Screen
			name='Meals'
			component={MealsStackNavigator}
			options={{
				tabBarIcon: (props) => {
					return <Ionicons name='ios-restaurant' size={25} color={props.color} />;
				}
			}}
		/>
		<Tab.Screen
			name='Favorites'
			component={FavoriteMealsStackNavigator}
			options={{
				tabBarIcon: (props) => {
					return <Ionicons name='ios-star' size={25} color={props.color} />;
				}
			}}
		/>
	</Tab.Navigator>
);

const FiltersStackNavigator = () => (
	<Stack.Navigator screenOptions={stackScreenOptions}>
		<Stack.Screen name='Filters' component={FiltersScreen} />
	</Stack.Navigator>
);

const Drawer = createDrawerNavigator();
const draweContentOpttions: DrawerContentOptions = {
	activeTintColor: Colors.accentColor,
	labelStyle: {
		fontFamily: Fonts.openSans
	}
};
const MealsDrawerNavigator = () => (
	<Drawer.Navigator screenOptions={stackScreenOptions} drawerContentOptions={draweContentOpttions}>
		<Drawer.Screen name='Food' component={MealsTabNavigator} />
		<Drawer.Screen name='Filters' component={FiltersStackNavigator} />
	</Drawer.Navigator>
);
export default MealsDrawerNavigator;
