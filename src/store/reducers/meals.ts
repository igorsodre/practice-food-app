import { MEALS } from '../../data/dummy.data';
import Meal from '../../models/Meal.model';
import { MealActionType, TOGGLE_FAVORITE, SET_FILTERS } from '../actions/meals';

export interface IMealsState {
	meals: Meal[];
	filteredMeals: Meal[];
	favoriteMeals: Meal[];
}
const initialState: IMealsState = {
	meals: MEALS,
	filteredMeals: MEALS,
	favoriteMeals: []
};

const mealsReducer = (state: IMealsState = initialState, action: MealActionType): IMealsState => {
	switch (action.type) {
		case TOGGLE_FAVORITE:
			const existingIndex = state.favoriteMeals.findIndex((el) => el.id === action.mealId);
			let newFavoriteMeals: Meal[] = [...state.favoriteMeals];
			if (existingIndex !== -1) newFavoriteMeals.splice(existingIndex, 1);
			else {
				const favMeal = state.meals.find((el) => el.id === action.mealId);
				favMeal && newFavoriteMeals.push(favMeal);
			}
			return {
				...state,
				favoriteMeals: newFavoriteMeals
			};
		case SET_FILTERS:
			const appliedFilters = action.filterSettings;
			const updatedFilteredMeals = state.meals.filter((el) => {
				const { glutenFree, lactoreFree, vegan, vegetarian } = appliedFilters;
				const { isGlutenFree, isLactoreFree, isVegan, isVegetarian } = el;
				return (
					!(glutenFree && !isGlutenFree) &&
					!(lactoreFree && !isLactoreFree) &&
					!(vegan && !isVegan) &&
					!(vegetarian && !isVegetarian)
				);
			});

			return {
				...state,
				filteredMeals: updatedFilteredMeals
			};
		default:
			return state;
	}
};

export default mealsReducer;
