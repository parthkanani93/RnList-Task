const passengerApi = offset => {
  return (
    'https://api.instantwebtools.net/v1/passenger?page=' + offset + '&size=10'
  );
};

const passengerPatch = id => {
  return 'https://api.instantwebtools.net/v1/passenger/' + id;
};

export {passengerApi, passengerPatch};
