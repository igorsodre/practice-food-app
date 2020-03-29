import React from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import Colors from '../../constants/Colors';

interface FilterSwitchProps {
	switchValue: boolean;
	onChangeValue: (value: boolean) => void;
	label: string;
}
const FilterSwitch: React.FC<FilterSwitchProps> = (props) => {
	return (
		<View style={styles.filterConainer}>
			<Text>{props.label}</Text>
			<Switch
				trackColor={{ true: Colors.accentColor, false: '#ccc' }}
				thumbColor={Colors.primaryColor}
				value={props.switchValue}
				onValueChange={props.onChangeValue}
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	filterConainer: {
		flexDirection: 'row',
		width: '80%',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginVertical: 10
	}
});

export default FilterSwitch;
