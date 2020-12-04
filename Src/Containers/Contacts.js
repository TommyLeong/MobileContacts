import React, {Component, useState, useEffect, useLayoutEffect} from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {getContactData, updateContactData} from '../Redux/Actions';
import {useSelector, useDispatch} from 'react-redux';
import {SearchBar} from 'react-native-elements';
import ContactCard from '../Components/ContactCard';
import Icon from 'react-native-vector-icons/AntDesign';
import AppConfig from '../Configs/AppConfig';

const Contacts = ({navigation}) => {
  const general = useSelector((state) => state.general);
  const [contactData, setContactData] = useState(general.contactData);
  const [isLoading, setIsLoading] = useState(general.loading);
  const [displaySB, setSB] = useState(false);
  const [searchContact, setSearchContact] = useState('');

  const dispatch = useDispatch();

  const dispatchAction = (action) => {
    dispatch(action());
  };

  useEffect(() => {
    handleRefresh();
  }, []);

  useEffect(() => {
    setContactData(general.contactData);
  }, [general]);

  const updateSearch = (text) => {
    setSearchContact(text);
  };

  const renderSearchBar = (showSearchBar) => {
    if (showSearchBar)
      return (
        <SearchBar
          lightTheme
          placeholder="Search contacts..."
          onChangeText={updateSearch}
          value={searchContact}
          // onSubmitEditing={searchContacts}
          onClear={() => {
            setSB((prevState) => !prevState);
            // Clear the search
            // Reset the list back to existing values
          }}
        />
      );
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{paddingLeft: 15}}
          onPress={() => {
            setSB((prevState) => !prevState);
          }}>
          <Icon name="search1" size={25} color={AppConfig.themeColor} />
        </TouchableOpacity>
      ),
      headerRight: () => (
        <TouchableOpacity
          style={{paddingRight: 15}}
          onPress={() => {
            navigation.navigate('ContactDetails', {navigation: navigation});
          }}>
          <Icon name="plus" size={25} color={AppConfig.themeColor} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  const renderItem = ({item}) => (
    <ContactCard contactInfo={item} navigation={navigation} />
  );

  const handleRefresh = () => {
    dispatchAction(getContactData);
  };

  return (
    <View>
      {renderSearchBar(displaySB)}
      <FlatList
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={handleRefresh} />
        }
        data={contactData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default Contacts;
