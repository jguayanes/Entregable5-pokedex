import { useDispatch } from "react-redux";
import FooterPokeball from "../components/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const trainerName = e.target.trainerName.value;
    dispatch(loginTrainer(trainerName));
    navigate("/pokedex");
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto]">
      <section className="grid items-center p-3">
        <article className="grid justify-center place-items-center gap-4">
          <div>
            <img src="/images/banner.png" alt="" />
          </div>
          <div className="grid place-items-center">
            <h2 className="text-[#FE1936] font-bold text-[30px]">
              ¡Hello Trainer!
            </h2>
            <p className="text-[#302F2F] font-bold text-[17px]">
              To start, give me your name
            </p>
          </div>
          <form onSubmit={handleSubmit} className="shadow-xl ">
            <input
              id="trainerName"
              className="outline-none w-[190px] h-[40px]"
              placeholder=" Your name..."
              type="text"
              required
              autoComplete="off"
            />
            <button className="bg-[#fe1936] text-white w-[60px] h-[40px]">
              Start
            </button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};

export default Home;
