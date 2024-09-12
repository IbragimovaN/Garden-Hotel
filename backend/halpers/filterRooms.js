const filterRooms = (roomsList, filtersObj) => {
  let copyRoomsList = roomsList;

  Object.keys(filtersObj).map((filterKey) => {
    if (filterKey === "maxAdult" || filterKey === "maxChildren") {
      copyRoomsList = copyRoomsList.filter(
        (room) => room[filterKey] >= filtersObj[filterKey]
      );
    } else {
      copyRoomsList = copyRoomsList.filter((room) => room[filterKey]);
    }
  });

  return copyRoomsList;
};

module.exports = filterRooms;
