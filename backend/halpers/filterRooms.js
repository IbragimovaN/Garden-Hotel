const filterRooms = (roomsList, filtersObj) => {
  let copyRoomsList = roomsList;
  if (filtersObj.canPets) {
    copyRoomsList = copyRoomsList.filter((room) => room.canPets);
  }

  if (filtersObj.hasWifi) {
    copyRoomsList = copyRoomsList.filter((room) => room.hasWifi);
  }

  if (filtersObj.hasConditioner) {
    copyRoomsList = copyRoomsList.filter((room) => room.hasConditioner);
  }
  if (filtersObj.canSmoke) {
    copyRoomsList = copyRoomsList.filter((room) => room.canSmoke);
  }
  if (filters.hasWorkSpace) {
    filteredItems = filteredItems.filter((room) => room.hasWorkSpace);
  }

  return copyRoomsList;
};
