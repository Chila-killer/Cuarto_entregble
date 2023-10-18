const Header = ({ handleOpenModal, isShowModal }) => {
  return (
    <header className={`flex flex-col pt-24 gap-12 z-10 ${isShowModal ? "invisible opacity-0" : "visible opacity-100"}`}>
      <h1 className="text-xl font-bold mx-auto text-[#8EFF8B]">Lista de Usuarios</h1>
      <button
        onClick={handleOpenModal}
        className="bg-[#CBFFDA] mx-auto max-w-max w-[345px] minQ:max-w-[345px] text-[#302F2F] p-2 px-4 font-semibold rounded-md hover:bg-[#b1e0be] transition-colors"
      >
        Agregar usuario
      </button>
    </header>
  );
};
export default Header;
