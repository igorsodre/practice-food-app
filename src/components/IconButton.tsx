import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import {
	HeaderButton as HButton,
	HeaderButtonProps as HBProps,
	HeaderButtons,
	Item
} from 'react-navigation-header-buttons';
import Colors from '../constants/Colors';

interface HeaderButtonProps extends HBProps {
	color?: string;
}
const HeaderButton: React.FC<HeaderButtonProps> = (props) => {
	const color = props.color || (Platform.OS === 'android' ? 'white' : Colors.primaryColor);
	return <HButton {...props} IconComponent={Ionicons} iconSize={23} color={color} />;
};

interface IconButtonProps {
	title?: string;
	onPress?: () => void;
	iconName: string;
	color?: string;
}
const IconButton: React.FC<IconButtonProps> = (props) => {
	return (
		<HeaderButtons HeaderButtonComponent={HeaderButton}>
			<Item
				color={props.color}
				title={props.title || Math.random().toString()}
				iconName={props.iconName}
				onPress={props.onPress}
			/>
		</HeaderButtons>
	);
};
const styles = StyleSheet.create({
	container: {}
});
export default IconButton;
