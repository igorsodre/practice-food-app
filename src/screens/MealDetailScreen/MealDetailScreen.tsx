import { StackNavigationOptions } from '@react-navigation/stack';
import * as React from 'react';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DefaultText from '../../components/DefaultText';
import IconButton from '../../components/IconButton';
import Colors from '../../constants/Colors';
import Meal from '../../models/Meal.model';
import { toggleFavorite } from '../../store/actions/meals';
import { TRootState } from '../../store/reducers';
import { INavigatorProp } from '../../typings';
import MealListItem from './MealListItem';

interface MealDetailsRouteParams {
	meal: Meal;
}
type MealDetailScreenProps = INavigatorProp<any, MealDetailsRouteParams>;

const MealDetailScreen: React.FC<MealDetailScreenProps> = (props) => {
	const { meal } = props.route.params;
	const availableMeals = useSelector((state: TRootState) => state.meals.favoriteMeals);
	const isFavorite = availableMeals.some((el) => el.id === meal.id);
	const dispatch = useDispatch();

	props.navigation.setOptions(
		screenOptions({
			title: meal.title,
			headerRight: () => {
				return (
					<IconButton
						iconName='ios-star'
						color={isFavorite ? Colors.accentColor : 'white'}
						onPress={() => {
							dispatch(toggleFavorite(meal.id));
						}}
					/>
				);
			}
		})
	);
	return (
		<View style={styles.container}>
			<ScrollView style={{ flex: 1, width: '100%' }}>
				<View style={styles.imageContainer}>
					<Image style={styles.imageStyle} source={{ uri: meal.imageUrl }} />
				</View>

				<View style={styles.info}>
					<DefaultText>{meal.duration}m</DefaultText>
					<DefaultText>{meal.complexity}</DefaultText>
					<DefaultText>{meal.affordability}</DefaultText>
				</View>

				<DefaultText style={styles.ingredientsTitle}>Ingredients</DefaultText>
				{meal.ingredients.map((el) => (
					<MealListItem key={el}>{el}</MealListItem>
				))}

				<DefaultText style={styles.ingredientsTitle}>Steps</DefaultText>
				{meal.steps.map((el) => (
					<MealListItem key={el}>{el}</MealListItem>
				))}
			</ScrollView>
		</View>
	);
};

const screenOptions = (optional: Partial<StackNavigationOptions> = {}): StackNavigationOptions => {
	return {
		...{
			title: 'Category Meal'
		},
		...optional
	};
};

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center'
	},
	imageContainer: {
		flex: 1,
		maxWidth: '100%'
	},
	imageStyle: {
		width: '100%',
		minHeight: 200,
		height: '100%'
	},
	info: {
		flexDirection: 'row',
		padding: 15,
		justifyContent: 'space-around'
	},
	ingredientsTitle: {
		fontSize: 22,
		textAlign: 'center',
		fontWeight: 'bold',
		padding: 10
	}
});

export default MealDetailScreen;
