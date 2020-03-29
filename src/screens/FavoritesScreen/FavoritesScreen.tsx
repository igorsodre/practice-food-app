import { StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import DefaultText from '../../components/DefaultText';
import HeaderMenuButton from '../../components/HeaderMenuButton';
import { renderMealItem } from '../../components/RenderMealItem';
import Meal from '../../models/Meal.model';
import { TRootState } from '../../store/reducers';
import { INavigatorProp } from '../../typings';

interface FavoriteScreenRouteParams {}
interface FavoriteScreenScreenProps extends INavigatorProp<any, FavoriteScreenRouteParams> {}

const FavoriteScreenScreen: React.FC<FavoriteScreenScreenProps> = (props) => {
	props.navigation.setOptions(
		screenOptions({
			headerLeft: () => <HeaderMenuButton onPress={() => props.navigation.toggleDrawer()} />
		})
	);

	const favMeals = useSelector((state: TRootState) => state.meals.favoriteMeals);
	if (!favMeals || favMeals.length == 0)
		return (
			<View style={styles.container}>
				<DefaultText>No favorite meals found. Start adding some!</DefaultText>
			</View>
        );

	return (
		<View style={styles.container}>
			<FlatList
				data={favMeals}
				renderItem={renderMealItem.bind(this, (meal: Meal) => {
					props.navigation.navigate('MealDetail', { meal });
				})}
				style={{ width: '100%', flex: 1 }}
			/>
		</View>
	);
};

const screenOptions = (optional: Partial<StackNavigationOptions> = {}): StackNavigationOptions => {
	return {
		...{
			title: 'Your Favorites'
		},
		...optional
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%'
	}
});

export default FavoriteScreenScreen;
