import {StyleSheet} from 'react-native';
import AppConfig from '../../Configs/AppConfig';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    backgroundColor: 'orange',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  headerText: {
    color: AppConfig.themeColor,
    fontSize: 16,
  },
});

export default styles;
