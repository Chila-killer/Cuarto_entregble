import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { BASE_URL, EMPTY_FORM_VALUES } from "./constants/users";
import Modal from "./components/Modal";
import Header from "./components/Header";
import { useForm } from "react-hook-form";
import UserList from "./components/UserList";
import WarningModal from "./components/WarningModal";
import NoUser from "./components/NoUser";

function App() {
  const [isShowModal, setIsShowModal] = useState(false);
  const [isWarningModal, setIsWarningModal] = useState(false)
  const [userToDelete, setuserToDelete] = useState(null)
  const [users, setUsers] = useState([]);
  const [userToEdit, setUserToEdit] = useState(null);

  const { handleSubmit, register, reset, formState } = useForm();
  const { errors } = formState;
  const submit = (data) => {
    if (userToEdit) {
      updateUser(data);
    } else {
      createUser(data);
    }
  };

  const handleOpenModal = () => {
    setIsShowModal(true);
  };

  const handleClosedModal = () => {
    setIsShowModal(false);
    reset(EMPTY_FORM_VALUES);
    setUserToEdit(null);
  };

  const handleOpenWarningModal = (userInfo) => {
    setIsWarningModal(true);
    setuserToDelete(userInfo)
  };
  
  const handleCancelWarningModal = () => {
    setIsWarningModal(false);
  };

  const handleAcceptWarningModal = () => {
    setIsWarningModal(false);
    deleteUser(userToDelete.id)
  };

  const createUser = (data) => {
    axios
      .post(BASE_URL + "/users/", data)
      .then(() => {
        handleClosedModal();
        getAllUsers();
      })
      .catch((err) => console.log(err));
  };



  const deleteUser = (id) => {
    axios
      .delete(BASE_URL + `/users/${id}/`)
      .then(() => getAllUsers())
      .catch((err) => console.log(err));
  };

  const updateUser = (data) => {
    axios
      .put(BASE_URL + `/users/${userToEdit.id}/`, data)
      .then(() => {
        getAllUsers();
        handleClosedModal();
      })
      .catch((err) => console.log(err));
  };

  const getAllUsers = () => {
    axios
      .get(BASE_URL + "/users/")
      .then(({ data }) => setUsers(data))
      .catch((err) => console.log(err));
  };

  const handleClickUpdate = (userToUpdate) => {
    handleOpenModal();
    reset(userToUpdate);
    setUserToEdit(userToUpdate);
    console.log(userToUpdate);
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <main className="flex flex-col min-h-screen bg-[#101010] font-link">
      <Header 
      handleOpenModal={handleOpenModal}
      isShowModal={isShowModal} />
      <Modal
        isShowModal={isShowModal}
        handleClosedModal={handleClosedModal}
        handleSubmit={handleSubmit}
        submit={submit}
        register={register}
        userToEdit={userToEdit}
        errors={errors}
      />
      <WarningModal
        isWarningModal={isWarningModal}
        handleCancelWarningModal={handleCancelWarningModal}
        handleAcceptWarningModal={handleAcceptWarningModal}
        userToDelete={userToDelete}
      />
      {users.length === 0 ? 
      <NoUser /> :
      <UserList
        users={users}
        deleteUser={deleteUser}
        handleClickUpdate={handleClickUpdate}
        handleOpenWarningModal={handleOpenWarningModal}
        isShowModal={isShowModal}
      />
       
      }
      <img className="w-[min(90%,_503px)] fixed bottom-0 right-0 z-0" src="/Ellipse1.png" alt="" />
      <img className="w-[min(90%,_503px)] bottom-0 fixed z-0" src="/Ellipse.png" alt="" />
    </main>
  );
}

export default App;
