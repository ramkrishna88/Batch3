import AsyncStorage from '@react-native-async-storage/async-storage';

class PersistanceHelper {
  setValue = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);

      console.log('written successfully');
    } catch (exception) {
      console.log('write error: ' + exception);
    }
  };

  getValue = async key => {
    try {
      const value = await AsyncStorage.getItem(key);

      return value;
    } catch (ex) {
      console.log('write error: ' + exception);
    }
  };

  setObject = (key, value) => {
    if (typeof value === 'object' || typeof value === 'array') {
      const serializedObject = JSON.stringify(value);

      this.setValue(key, serializedObject);
    }
  };

  getObject = async key => {
    const serializedObject = await this.getValue(key);

    return JSON.parse(serializedObject);
  };
}

export default new PersistanceHelper();
