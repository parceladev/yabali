import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import { Button } from "@material-tailwind/react";

const Jumbotron = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative">
      <img
        className="h-[450px] w-full object-cover object-center"
        src="/src/assets/user/homepage/Jumbotron.png"
        alt="Jumbotron Image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute inset-1 flex flex-col justify-center items-center">
        <CSSTransition in={isMounted} timeout={1000} classNames="fade" appear>
          <h1 className="text-white text-4xl font-bold mb-4 font-heading xs:text-5xl">
            Yayasan Anak Bali Luih
          </h1>
        </CSSTransition>
        <CSSTransition in={isMounted} timeout={1000} classNames="fade" appear>
          <h3 className="text-white text-1xl mb-[50px] max-w-[170px] text-center">
            Save from Poverty, Exploitation and Violence
          </h3>
        </CSSTransition>
        <Button
          variant="gradient"
          size="md"
          className="bg-primary text-white drop-shadow-md px-5 py-3 text-[13px] font-heading font-medium rounded-[2px] shadow-md"
        >
          What We Do
        </Button>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white text-center flex justify-between gap-2x ">
        <p className="text-[11px] m-auto w-[20%] font-paragraph">
          230 children under our care
        </p>
        <div className="h-0.5 bg-white w-full m-auto"></div>
        <p className="text-[11px] w-[20%] m-auto font-paragraph">
          58 donations collected
        </p>
      </div>
    </section>
  );
};

export default Jumbotron;
