import React, {Component, useLayoutEffect, useState} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Keyboard,
  ScrollView,
} from 'react-native';
import {connect} from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';
import {getContactData, updateContactData} from '../Redux/Actions';
import EditContactInfo from '../Components/EditContactInfo';
import styles from './Styles/ContactDetailsStyle';

const ContactDetails = (props) => {
  let email = '';
  let firstName = '';
  let lastName = '';
  let phone = '';
  let id = '';

  if (props.route.params && props.route.params.specificDetails) {
    email = props.route.params.specificDetails.email;
    firstName = props.route.params.specificDetails.firstName;
    lastName = props.route.params.specificDetails.lastName;
    phone = props.route.params.specificDetails.phone;
    id = props.route.params.specificDetails.id;
  }

  const [updatedFirstName, setUpdatedFirstName] = useState(firstName);
  const [updateLastName, setUpdatedlastName] = useState(lastName);
  const [updatedEmail, setUpdatedEmail] = useState(email);
  const [updatedPhone, setUpdatedPhone] = useState(phone);
  const [hasError, setHasError] = useState({});
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{paddingLeft: 10}}
          onPress={() => {
            props.navigation.goBack();
          }}>
          <Text style={styles.headerText}>Cancel</Text>
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{paddingRight: 10}}
          onPress={() => {
            // Save new information into Redux
            saveUpdatedContactData();
          }}>
          <Text style={styles.headerText}>Save</Text>
        </TouchableOpacity>
      ),
    });
  }, [props.navigation]);

  saveUpdatedContactData = () => {
    if (updatedFirstName.length < 1 || updateLastName.length < 1) {
      setHasError({
        'First Name': updatedFirstName.length < 1 ? true : false,
        'Last Name': updateLastName.length < 1 ? true : false,
      });
      return;
    }

    setHasError({}); // Reset error to empty obj
    const updatedContactData = {
      id: id,
      firstName: updatedFirstName,
      lastName: updateLastName,
      email: updatedEmail,
      phone: updatedPhone,
    };
    let listOfContacts = props.contactData;

    // Get the index of the specific contact and update contact info
    const indexValue = listOfContacts.findIndex((contact) => contact.id === id);
    listOfContacts.splice(indexValue, 1, updatedContactData);

    dispatch(updateContactData(listOfContacts));

    Keyboard.dismiss();
  };

  collectMainInfo = (info) => {
    setUpdatedFirstName(info['First Name']);
    setUpdatedlastName(info['Last Name']);
  };

  collectSubInfo = (info) => {
    setUpdatedPhone(info['Phone']);
    setUpdatedEmail(info['Email']);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
      style={styles.container}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <View style={styles.logoContainer}>
              <View style={styles.logo} />
            </View>
            <EditContactInfo
              title="Main Information"
              firstInputTitle="First Name"
              secondInputTitle="Last Name"
              firstValue={firstName}
              secondValue={lastName}
              callback={(info) => {
                collectMainInfo(info);
              }}
              error={hasError}
            />
            <EditContactInfo
              title="Sub Information"
              firstInputTitle="Email"
              secondInputTitle="Phone"
              firstValue={email}
              secondValue={phone}
              callback={(info) => {
                collectSubInfo(info);
              }}
              error={hasError}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      <View style={{height: 60}} />
    </KeyboardAvoidingView>
  );
};

const mapStateToProps = ({general}) => ({
  contactData: general.contactData,
});

export default connect(mapStateToProps, {
  getContactData,
})(ContactDetails);
