import User from "./User";

const UserList = ({ users, deleteUser, handleClickUpdate, handleOpenWarningModal, isShowModal }) => {
  console.log(isShowModal);
  return (
    <section className={`z-10 grid w-[min(100%,_503px)] justify-center max-w-[1000px] mx-auto gap-5 py-16 ${isShowModal ? "invisible opacity-0" : "visible opacity-100"}`}>
      {users.map((user) => (
        <User
          key={user.id}
          userInfo={user}
          deleteUser={deleteUser}
          handleClickUpdate={handleClickUpdate}
          handleOpenWarningModal={handleOpenWarningModal}
        />
      ))}
    </section>
  );
};
export default UserList;
