import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';

export interface INavigatorProp<T = {}, U = {}> {
	navigation: StackNavigationProp<Record<string, T>> & DrawerNavigationProp<Record<string, T>>;
	route: { key: string; name: string; params: U };
}
