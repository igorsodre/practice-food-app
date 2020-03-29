import React from 'react';
import { StyleSheet, View } from 'react-native';
import DefaultText from '../../components/DefaultText';

interface MealListItemProps {}
const MealListItem: React.FC<MealListItemProps> = (props) => {
	return (
		<View style={styles.container}>
			<DefaultText style={styles.text}>{props.children}</DefaultText>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		marginVertical: 10,
		marginHorizontal: 10,
        borderWidth: 1,
        padding: 5
	},
	text: {
		fontWeight: 'bold',
		textAlign: 'center'
	}
});

export default MealListItem;
