import React from 'react';
import { ImageBackground, ListRenderItemInfo, StyleSheet, TouchableOpacity, View } from 'react-native';
import DefaultText from '../components/DefaultText';
import Fonts from '../constants/Fonts';
import Meal from '../models/Meal.model';

export const renderMealItem = (onSelectMeal: (meal: Meal) => void, itemData: ListRenderItemInfo<Meal>) => {
	return (
		<View style={styles.container}>
			<TouchableOpacity onPress={() => onSelectMeal(itemData.item)} style={{ width: '100%' }}>
				<View style={{ ...styles.mealRow, ...styles.mealHeader }}>
					<ImageBackground source={{ uri: itemData.item.imageUrl }} style={styles.bgImage}>
						<DefaultText numberOfLines={1} style={styles.title}>
							{itemData.item.title}
						</DefaultText>
					</ImageBackground>
				</View>

				<View style={{ ...styles.mealRow, ...styles.mealDetail }}>
					<DefaultText>{itemData.item.duration}m</DefaultText>
					<DefaultText>{itemData.item.complexity}</DefaultText>
					<DefaultText>{itemData.item.affordability}</DefaultText>
				</View>
			</TouchableOpacity>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		height: 200,
		width: '95%',
		minWidth: 300,
		backgroundColor: '#f5f5f5',
		alignSelf: 'center',
		borderRadius: 25,
		overflow: 'hidden',
		paddingVertical: 5
	},
	mealRow: {
		flexDirection: 'row',
		justifyContent: 'space-evenly',
		alignItems: 'center'
	},
	mealHeader: {
		height: '85%'
	},
	mealDetail: {
		height: '15%'
	},
	bgImage: {
		width: '100%',
		height: '100%',
		justifyContent: 'flex-end'
	},
	title: {
		fontFamily: Fonts.openSansBold,
		fontSize: 20,
		color: 'white',
		backgroundColor: 'rgba(0,0,0,0.4)',
		paddingVertical: 5,
		textAlign: 'center'
	},
});
