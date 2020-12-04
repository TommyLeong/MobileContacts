import {StyleSheet} from 'react-native';
import AppConfig from '../../Configs/AppConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginLeft: 15,
    padding: 5,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: 'black',
  },
  contactLogo: {
    backgroundColor: AppConfig.themeColor,
    height: 50,
    width: 50,
    borderRadius: 30,
  },
  contactName: {
    flex: 4,
    paddingLeft: 10,
  },
  contactNameText: {
    fontSize: 16,
  },
});

export default styles;
