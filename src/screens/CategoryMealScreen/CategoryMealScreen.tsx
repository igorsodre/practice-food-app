import { StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { renderMealItem } from '../../components/RenderMealItem';
import Category from '../../models/Category.model';
import Meal from '../../models/Meal.model';
import { TRootState } from '../../store/reducers';
import { INavigatorProp } from '../../typings';
import DefaultText from '../../components/DefaultText';

interface CategoryMealRouteParams {
	category: Category;
}
interface CategoryMealScreenProps extends INavigatorProp<any, CategoryMealRouteParams> {}

const CategoryMealScreen: React.FC<CategoryMealScreenProps> = (props) => {
	const { category } = props.route.params;
	props.navigation.setOptions(screenOptions({ title: category.title }));

	const availabeMeals = useSelector((state: TRootState) => state.meals.filteredMeals);
	const displayedMeals = availabeMeals.filter((meal) => meal.categoryIds?.includes(category.id));
	if (!displayedMeals || displayedMeals.length == 0)
		return (
			<View style={styles.container}>
				<DefaultText>No meals found with the current filter settings.</DefaultText>
			</View>
		);

	return (
		<View style={styles.container}>
			<FlatList
				data={displayedMeals}
				renderItem={renderMealItem.bind(this, (meal: Meal) => {
					props.navigation.navigate('MealDetail', { meal });
				})}
				style={{ width: '100%', flex: 1 }}
			/>
		</View>
	);
};

export default CategoryMealScreen;

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
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		width: '100%'
	}
});
