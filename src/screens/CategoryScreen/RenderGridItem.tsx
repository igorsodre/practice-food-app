import React from "react";
import { ListRenderItemInfo, StyleSheet, TouchableOpacity, View } from "react-native";
import Category from "../../models/Category.model";
import { INavigatorProp } from "../../typings";
import Fonts from '../../constants/Fonts';
import DefaultText from '../../components/DefaultText';

export const renderGridItem = (navigator: INavigatorProp<any>, itemData: ListRenderItemInfo<Category>) => {
    const dynamicStyle = StyleSheet.create({
        dym: {
            backgroundColor: itemData.item.color
        }
    });
    return (
        <TouchableOpacity
            style={{ ...styles.gridItem, ...dynamicStyle.dym }}
            onPress={() => {
                navigator.navigation.navigate('CategoryMeals', {
                    category: itemData.item
                });
            }}>
            <View>
                <DefaultText style={styles.textStyle} numberOfLines={2} >{itemData.item.title}</DefaultText>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        margin: 10,
        padding: 15,
        height: 100,
        borderRadius: 10,
        elevation: 3
    },
    textStyle: {
        fontFamily: Fonts.openSansBold,
        fontSize: 18,
        textAlign: 'right'
    }
});
