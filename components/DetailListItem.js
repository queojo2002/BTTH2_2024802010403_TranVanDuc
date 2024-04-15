import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text, TouchableHighlight } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../utility/colors';

const DetailListItem = ({
    icon, title, subtitle
}) =>{
    return (
        <TouchableHighlight
            underlayColor={colors.grey}
            style={StyleSheet.container}
           

        >
            <View style={styles.container}>
                <Icon name={icon} size={24} style={{color: colors.black, marginRight: 20}} />
                <View style={styles.details}>
                <Text style={styles.name}>{title}</Text>
                <Text style={styles.phoneNumber}>{subtitle}</Text>
                </View>
            </View>
        </TouchableHighlight>

    );

}


export default DetailListItem;


DetailListItem.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },
    image: {
      width: 50,
      height: 50,
      borderRadius: 25,
      marginRight: 16,
    },
    details: {
      flex: 1,
    },
    name: {
      fontSize: 16,
      fontWeight: 'bold',
    },
    phoneNumber: {
      fontSize: 16,
      color: '#555',
    },
});