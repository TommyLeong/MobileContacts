import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
  },
  titleRow: {
    backgroundColor: 'lightgray',
    padding: 3,
    paddingLeft: 15,
    marginBottom: 3,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  inputRow: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    paddingTop: 5,
    marginLeft: 15,
  },
  inputFieldTitle: {
    fontSize: 15,
    padding: 3,
    marginBottom: 3,
  },
  inputRow_titleView: {
    width: 100,
  },
  inputRow_inputView: {
    flex: 1,
    paddingRight: 10,
    paddingBottom: 5,
  },
  inputField: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 5,
    ...Platform.select({
      ios: {
        height: 30,
      },
    }),
  },
});

export default styles;
