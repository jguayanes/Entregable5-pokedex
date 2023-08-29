import { useDispatch } from "react-redux";
import { logOut } from "../../store/slices/trainer.slice";

const NavbarPokeball = () => {
  const dispatch = useDispatch();
  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <section>
      <div className="h-16 bg-red-600 relative">
        <div className="w-[180px] absolute bottom-0 left-5">
          <img src="/images/banner.png" alt="" />
        </div>
      </div>
      <div className="h-10 bg-black relative">
        <button
          onClick={handleLogOut}
          className="h-16 bg-white aspect-square rounded-full absolute right-1 -translate-x-1/2 -top-3 border-[8px] border-black after:block after:content-[''] after:h-8 after:aspect-square after:bg-gray-800 after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-4 after:border-black transitions-colors hover:bg-red-500 cursor-pointer"
        ></button>
        <div className="absolute right-6 bottom-8 ">
          <img src="/images/logf1.png" className="w-[86px]"></img>
        </div>
      </div>
    </section>
  );
};

export default NavbarPokeball;
