import { EMAIL_VALIDATIONS, FIRSTNAME_VALIDATIONS, LASTNAME_VALIDATIONS, PASSWORD_VALIDATIONS } from "../constants/formValidations";

const Modal = ({
  isShowModal,
  handleClosedModal,
  handleSubmit,
  register,
  submit,
  userToEdit,
  errors,
}) => {

console.log(userToEdit?.image_url);
  return (
    <section
      className={`z-20 fixed top-0 bottom-0 left-0 right-0 bg-[#FFFFFF99] flex justify-center items-center px-3 transition-all duration-300 ${
        isShowModal ? "visible opacity-100" : "invisible opacity-0"}`}
    >
      <span className={`z-20 w-[100px] h-[100px] minQ:w-[140px] minQ:h-[140px] rounded-full top-2 fixed mx-auto bg-slate-200 ${userToEdit ? `bg-[url('${userToEdit.image_url}')]` : 'bg-[url("/user1.png")]'} bg-cover bg-center`}></span>
      
      <form
        onSubmit={handleSubmit(submit)}
        className="bg-[#3C3C3D] p-12 pb-4 pt-[65px] mt-16 rounded-md grid gap-5 w-[min(100%,_495px)] relative"
      >
        
        <div className="grid gap-1">
          <label className="font-light text-[#8EFF8B]" htmlFor="email">
            Email
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm bg-[#3C3C3D] text-white"
            placeholder="ejemplo@email.com"
            id="email"
            type="text"
            {...register("email", EMAIL_VALIDATIONS)}
          />
          {errors.email && (
            <span className="text-xs text-red-500">{errors.email.message}</span>
          )}
        </div>
        <div className="grid gap-1">
          <label className="font-light text-[#8EFF8B]" htmlFor="password">
            Contraseña
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm bg-[#3C3C3D] text-white"
            placeholder="Introducir contraseña"
            id="password"
            type="password"
            {...register("password", PASSWORD_VALIDATIONS)}
          />
        </div>
        <div className="grid gap-1">
          <label className="font-light text-[#8EFF8B]" htmlFor="first_name">
            Nombre
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm bg-[#3C3C3D] text-white"
            placeholder="Introducir nombre"
            id="first_name"
            type="text"
            {...register("first_name", FIRSTNAME_VALIDATIONS)}
          />
        </div>
        <div className="grid gap-1">
          <label className="font-light text-[#8EFF8B]" htmlFor="last_name">
            Apellido
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm bg-[#3C3C3D] text-white"
            placeholder="Introducir apellido"
            id="last_name"
            type="text"
            {...register("last_name", LASTNAME_VALIDATIONS)}
          />
        </div>
        <div className="grid gap-1">
          <label className="font-light text-[#8EFF8B]" htmlFor="birthday">
            Fecha de Nacimiento
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm bg-[#3C3C3D] text-white"
            // defaultValue="null"
            id="birthday"
            type="date"
            {...register("birthday")}
          />
        </div>
        <div className="grid gap-1">
          <label className="font-light text-[#8EFF8B]" htmlFor="image_url">
            URL de Imagen
          </label>
          <input
            className="outline-none border px-2 py-1 rounded-sm bg-[#3C3C3D] text-white"
            placeholder="Introducir Url de Imagen"
            // defaultValue="null"
            id="image_url"
            type="text"
            {...register("image_url")}
          />
        </div>
        <button
          className="bg-[#CBFFDA] text-[#302F2F] p-2 px-4 mt-4 uppercase font-semibold rounded-sm"
          type="submit"
        >
          {userToEdit ? "Guardar cambios" : "Crear"}
        </button>
        <button
          onClick={handleClosedModal}
          type="button"
          className="text-red-500 hover:text-red-600 hover:scale-95 active:scale-105 transition p-2 px-4 w-min mx-auto"
        >
          Cancelar
        </button>
      </form>
    </section>
  );
};
export default Modal;
