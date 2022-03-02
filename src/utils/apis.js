import {passengerApi, passengerPatch} from './config';

//get data of passengers
const getData = props => {
  const {
    offset,
    loading,
    isListEnd,
    setOffset,
    setListData,
    setLoading,
    setIsListEnd,
    listData,
  } = props;
  if (!loading && !isListEnd) {
    setLoading(true);
    fetch(passengerApi(offset))
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.data.length > 0) {
          setOffset(offset + 1);
          setListData([...listData, ...responseJson.data]);
          setLoading(false);
        } else {
          setIsListEnd(true);
          setLoading(false);
        }
      })
      .catch(error => {
        setLoading(false);
        console.error(error);
      });
  }
};

//patch request to update passenger name
const patchName = props => {
  const {id, newName} = props;
  fetch(passengerPatch(id), {
    //requires an id to patch
    method: `PATCH`,
    body: JSON.stringify({
      name: newName,
    }),
    headers: {'Content-type': `application/json; charset=UTF-8`},
  }).then(response => {
    console.log('Successfully updated passenger name');
  });
};

export {getData, patchName};
