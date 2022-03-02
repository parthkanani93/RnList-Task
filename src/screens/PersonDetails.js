import React, {useState} from 'react';
import {StyleSheet, View, DeviceEventEmitter} from 'react-native';
import LButton from '../components/common/LButton';
import LText from '../components/common/LText';
import LTextInput from '../components/common/LTextInput';
import {patchName} from '../utils/apis';

const PersonDetails = ({route}) => {
  const {item} = route.params;
  const [name, setName] = useState(item.name);
  const [newName, setNewName] = useState('');
  const [isEdit, setIsEdit] = useState(false);

  const onPressEditButton = () => {
    setIsEdit(!isEdit);
  };
  const onPressDone = () => {
    patchName({id: item._id, newName});
    setName(newName);
    DeviceEventEmitter.emit('event.patch', {newName});
    setIsEdit(false);
  };
  return (
    <View style={styles.mainContainer}>
      <View style={styles.nameContainer}>
        <LText title={name} />
        <LButton btnText={'Edit Name'} onPress={onPressEditButton} />
      </View>
      {isEdit && (
        <View style={styles.inputContainer}>
          <LTextInput value={newName} onChangeText={setNewName} />
          <LButton btnText={'Done'} onPress={onPressDone} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
    padding: 40,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default PersonDetails;
