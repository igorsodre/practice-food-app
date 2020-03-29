import React from 'react';
import { StyleSheet, Text, TextStyle, TextProps } from 'react-native';
import Fonts from '../constants/Fonts';

interface DefaultTextProps extends TextProps {
	style?: TextStyle;
}
const DefaultText: React.FC<DefaultTextProps> = (props) => {
	return <Text style={{ ...styles.container, ...props.style }}>{props.children}</Text>;
};

const styles = StyleSheet.create({
	container: {
		fontFamily: Fonts.openSans
	}
});

export default DefaultText;
