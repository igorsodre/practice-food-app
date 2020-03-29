import React from 'react';
import { StyleSheet } from 'react-native';
import IconButton from './IconButton';

interface HeaderMenuButtonProps {
	onPress: () => void;
}
const HeaderMenuButton: React.FC<HeaderMenuButtonProps> = (props) => {
	return <IconButton iconName='ios-menu' onPress={props.onPress} />;
};

const styles = StyleSheet.create({
	container: {}
});

export default HeaderMenuButton;
