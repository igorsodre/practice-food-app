export const TOGGLE_FAVORITE = 'TOGGLE_FAVORITE';
export const SET_FILTERS = 'SET_FILTERS';

interface IToggleFavoriteAction {
	type: typeof TOGGLE_FAVORITE;
	mealId: string;
}

interface IFilteredSetting {
	glutenFree: boolean;
	lactoreFree: boolean;
	vegan: boolean;
	vegetarian: boolean;
}
interface ISetFiltersAction {
	type: typeof SET_FILTERS;
	filterSettings: IFilteredSetting;
}
export type MealActionType = IToggleFavoriteAction | ISetFiltersAction;

export const toggleFavorite = (id: string): MealActionType => {
	return {
		type: TOGGLE_FAVORITE,
		mealId: id
	};
};

export const setFilters = (filterSettings: IFilteredSetting): MealActionType => {
	return {
		type: SET_FILTERS,
		filterSettings: filterSettings
	};
};
