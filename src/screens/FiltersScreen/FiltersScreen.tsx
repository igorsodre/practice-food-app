import { StackNavigationOptions } from '@react-navigation/stack';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultText from '../../components/DefaultText';
import HeaderMenuButton from '../../components/HeaderMenuButton';
import { INavigatorProp } from '../../typings';
import FilterSwitch from './FilterSwitch';
import IconButton from '../../components/IconButton';
import { setFilters } from '../../store/actions/meals';
import { useDispatch } from 'react-redux';

interface FiltersScreenRouteParams {}
interface FiltersScreenScreenProps extends INavigatorProp<any, FiltersScreenRouteParams> {}

const FiltersScreenScreen: React.FC<FiltersScreenScreenProps> = (props) => {
	const dispatch = useDispatch();
	props.navigation.setOptions(
		screenOptions({
			headerLeft: () => <HeaderMenuButton onPress={() => props.navigation.toggleDrawer()} />,
			headerRight: () => (
				<IconButton
					iconName='ios-save'
					onPress={() =>
						dispatch(
							setFilters({
								glutenFree: isGlutenFree,
								lactoreFree: isLactoseFree,
								vegan: isVegan,
								vegetarian: isVegetarian
							})
						)
					}
				/>
			)
		})
	);
	const [isGlutenFree, setIsGlutenFree] = useState(false);
	const [isLactoseFree, setIsLactoseFree] = useState(false);
	const [isVegan, setIsVegan] = useState(false);
	const [isVegetarian, setIsVegetarian] = useState(false);

	return (
		<View style={styles.screenContainer}>
			<DefaultText style={styles.title}>Filters and Restrictions</DefaultText>
			<FilterSwitch
				label='Gluten-free'
				switchValue={isGlutenFree}
				onChangeValue={(val) => setIsGlutenFree(val)}
			/>
			<FilterSwitch
				label='Lactose-free'
				switchValue={isLactoseFree}
				onChangeValue={(val) => setIsLactoseFree(val)}
			/>
			<FilterSwitch label='Vegan' switchValue={isVegan} onChangeValue={(val) => setIsVegan(val)} />
			<FilterSwitch label='Vegetarian' switchValue={isVegetarian} onChangeValue={(val) => setIsVegetarian(val)} />
		</View>
	);
};

const screenOptions = (optional: Partial<StackNavigationOptions> = {}): StackNavigationOptions => {
	return {
		...{
			title: 'FiltersScreen'
		},
		...optional
	};
};

const styles = StyleSheet.create({
	screenContainer: {
		flex: 1,
		alignItems: 'center',
		width: '100%'
	},
	title: {
		fontWeight: 'bold',
		fontSize: 22,
		margin: 20,
		textAlign: 'center'
	},
	filterConainer: {
		flexDirection: 'row',
		width: '80%',
		justifyContent: 'space-between',
		alignItems: 'center'
	}
});

export default FiltersScreenScreen;
