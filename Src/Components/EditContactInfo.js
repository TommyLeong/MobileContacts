import React, {useRef, useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import styles from './Styles/EditContactInfoStyle';

const EditContactInfo = (props) => {
  const [firstValue, setFirstValue] = useState(props.firstValue);
  const [secondValue, setSecondValue] = useState(props.secondValue);
  let callBackObj = {};
  const secondInputRef = useRef(null);
  let type = 'default';

  const typeIdentifier = (text) => {
    switch (text) {
      case 'Email':
        type = 'email-address';
        break;
      case 'Phone':
        type = 'phone-pad';
        break;
      default:
        type = 'default';
    }
    return type;
  };

  const firstType = typeIdentifier(props.firstInputTitle);
  const secondType = typeIdentifier(props.secondInputTitle);
  let firstColor = 'lightgray';
  let secondColor = 'lightgray';

  if (props.error !== undefined) {
    firstColor = props.error[props.firstInputTitle] ? 'red' : 'lightgray';
    secondColor = props.error[props.secondInputTitle] ? 'red' : 'lightgray';
  }

  return (
    <View style={styles.container}>
      <View style={styles.titleRow}>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View style={styles.inputRow}>
        <View style={styles.inputRow_titleView}>
          <Text style={styles.inputFieldTitle}>{props.firstInputTitle}</Text>
        </View>
        <View style={styles.inputRow_inputView}>
          <TextInput
            onChangeText={(text) => {
              setFirstValue(text);
              callBackObj[props.firstInputTitle] = text;
              callBackObj[props.secondInputTitle] = secondValue;
              props.callback(callBackObj);
            }}
            value={firstValue}
            style={[styles.inputField, {borderColor: firstColor}]}
            onSubmitEditing={() => {
              secondInputRef.current.focus();
            }}
            keyboardType={firstType}
          />
        </View>
      </View>
      <View style={styles.inputRow}>
        <View style={styles.inputRow_titleView}>
          <Text style={styles.inputFieldTitle}>{props.secondInputTitle}</Text>
        </View>
        <View style={styles.inputRow_inputView}>
          <TextInput
            onChangeText={(text) => {
              setSecondValue(text);
              callBackObj[props.firstInputTitle] = firstValue;
              callBackObj[props.secondInputTitle] = text;
              props.callback(callBackObj);
            }}
            value={secondValue}
            style={[styles.inputField, {borderColor: secondColor}]}
            ref={secondInputRef}
            keyboardType={secondType}
          />
        </View>
      </View>
    </View>
  );
};

export default EditContactInfo;
