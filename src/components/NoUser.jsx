const NoUser = () => {
  return (
    <div className="z-10 grid justify-center max-w-[1000px] mx-auto gap-5 py-16 text-[#AFAEAE]">
        <img className="w-[147px] h-[147px] rounded-full place-self-center bg-slate-100 p-3" src="/user1.png" alt="" />
        <p className="flex text-center">No hay ningun usuario en la lista <br />
            crea un nuevo usuario</p>
    </div> 
  )
}

export default NoUser