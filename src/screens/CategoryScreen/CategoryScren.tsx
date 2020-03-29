import { StackNavigationOptions } from '@react-navigation/stack';
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import HeaderMenuButton from '../../components/HeaderMenuButton';
import { CATEGORIES } from '../../data/dummy.data';
import { INavigatorProp } from '../../typings';
import { renderGridItem } from './RenderGridItem';

interface CategoryScreenProps extends INavigatorProp {}

const CategoryScreen: React.FC<CategoryScreenProps> = (props) => {
	props.navigation.setOptions(
		screenOptions({
			headerLeft: () => <HeaderMenuButton onPress={() => props.navigation.toggleDrawer()} />
		})
	);
	return <FlatList data={CATEGORIES} numColumns={2} renderItem={renderGridItem.bind(this, props)} />;
};

export default CategoryScreen;

const screenOptions = (optional: Partial<StackNavigationOptions> = {}): StackNavigationOptions => {
	return {
		...{
			title: 'Meal Categories'
		},
		...optional
	};
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center'
	}
});
