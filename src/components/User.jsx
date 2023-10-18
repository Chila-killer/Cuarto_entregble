import { IconEditCircle, IconTrash } from "@tabler/icons-react";

const User = ({ userInfo, handleOpenWarningModal, handleClickUpdate }) => {

  return (
    <article className="border-2 px-4 pt-4 pb-6 rounded-lg grid gap-3 bg-white/50 grid-cols-4 h-max text-sm medQ:text-lg mx-3">
        <div className="flex gap-5 col-span-3 pb-2">
          <img className="rounded-[100%] bg-cover bg-center w-[50px] h-[50px] medQ:w-[65px] medQ:h-[65px]" src={`${userInfo.image_url}`} alt="Imagen de Usuario" />
          <h5 className="flex max gap-2 items-center  font-bold min-w-min text-[#0F0F2D]">
            {userInfo.first_name} {userInfo.last_name}
          </h5>
        </div>
        <hr className="col-span-3" />
        <ul className="gap-5 medQ:gap-9 text-white flex col-span-4">
          <li>
            <span className="font-semibold block text-[#D3D3D3]">Email</span>
            <span>{userInfo.email}</span>
          </li>
          <li>
            <span className="font-semibold block text-[#D3D3D3]">Fecha de Nacimiento</span>
            <span>{userInfo.birthday}</span>
          </li>
        </ul>
      
      <div className="flex gap-2 justify-end row-start-1 row-end-1 col-start-4 col-end-4">
        <button
          onClick={() => handleOpenWarningModal(userInfo)}
          className="flex justify-center items-center bg-red-500 hover:bg-red-600 hover:scale-95 active:scale-105 transition text-white p-2 medQ:p-3 rounded-md h-[30px] w-[30px] medQ:h-[43px] medQ:w-[43px]"
        >
          <IconTrash size={24} />
        </button>
        <button
          onClick={() => handleClickUpdate(userInfo)}
          className="flex justify-center items-center bg-[#BDBDBD] hover:bg-[#9b9b9b] hover:scale-95 active:scale-105 transition text-white p-2 medQ:p-3 rounded-md h-[30px] w-[30px] medQ:h-[43px] medQ:w-[43px]"
        >
          <IconEditCircle size={24} />
        </button>
      </div>
    </article>
  );
};
export default User;
