import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons'

const ContactThumbnail = ({
    name, phone, avatar, textColor, onPress,
}) =>{
    
    const colorStyle = {
        color: textColor,
    };

    const ImageComponent = onPress ? TouchableOpacity : View;

    return (
        <View style={styles.container}>
            <ImageComponent onPress={onPress}>
                <Image 
                    source={{uri: avatar,}} 
                    style={styles.avatar}
            
                />
            </ImageComponent>

            {
                name !== '' && <Text style={[styles.name, colorStyle]}>{name}</Text>
            }

            {
                phone !== '' && (
                    <View style={styles.phoneSection}>      
                        <Icon name="phone" size={16} style={{color: textColor}} /> 
                        <Text style={[styles.phone, colorStyle]}>
                            {phone}
                        </Text>
                    </View>
                )
            }

        
            
        </View>
    );
}


ContactThumbnail.propTypes = {
    name: PropTypes.string,
    avatar: PropTypes.string,
    phone: PropTypes.string,
    onPress: PropTypes.func,
};

ContactThumbnail.defaultProps = {
    name: '',
    phone: '',
    textColor: 'white',
    onPress: null,
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center', 
        paddingHorizontal: 15,
        paddingVertical: 30,
    },
    avatar: {
        width: 90,
        height: 90,
        borderRadius: 45,
        borderColor: 'white',
        borderWidth: 2,
    },
    details: {
        flex: 1,
    },
    name: {
        fontSize: 20,
        marginTop: 24,
        marginBottom: 2,
        fontWeight: 'bold',
    },
    phone: {
        marginLeft: 4,
        fontSize: 16,
        fontWeight: 'bold',
    },

    phoneSection: {
        flexDirection: 'row',
        marginTop: 4,
        alignItems: "center",
        justifyContent: "center",
    },
});


export default ContactThumbnail;
