import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './Styles/ContactCardStyle';

const ContactCard = (props) => {
  const {firstName, lastName} = props.contactInfo;
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate('ContactDetails', {
          specificDetails: props.contactInfo,
        });
      }}>
      <View style={styles.container}>
        <View style={styles.contactLogo} />
        <View style={styles.contactName}>
          <Text
            style={styles.contactNameText}>{`${firstName} ${lastName}`}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ContactCard;
