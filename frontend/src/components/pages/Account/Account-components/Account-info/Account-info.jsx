export const AccountInfo = () => {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  return (
    <div>
      {currentUser.firstName}
      {currentUser.secondName}
      {currentUser.email}
    </div>
  );
};
