const WarningModal = ({isWarningModal, handleCancelWarningModal, handleAcceptWarningModal, userToDelete}) => {
    return (
        <div className={`z-20 fixed top-0 bottom-0 left-0 right-0 bg-[#FFFFFF99] flex justify-center items-center transition-all duration-300 ${isWarningModal ? "visible opacity-100" : "invisible opacity-0"}`}>

            <div className="bg-[#3C3C3D] text-white gap-8 p-6 left-1/2 top-1/2 w-[444px] rounded-[10px] flex flex-col items-center text-[22px] m-3">
                <h5 className="text-center" >¿Seguro que deseas eliminar a {userToDelete?.first_name}?</h5>

                <div className="grid gap-5">
                    <button onClick={handleAcceptWarningModal} className="bg-[#D85D5D] rounded-md text-slate-200 px-8 py-1 text-base">Aceptar</button>
                    <button onClick={handleCancelWarningModal} className=" text-[#CBFFD9] text-base">Cancelar</button>
                </div>

            </div>

        </div>
    )
}

export default WarningModal