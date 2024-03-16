import { useState, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import { JumbotronImg } from '../../assets/user/homepage';
import LinkButton from './../generals/LinkButton';

const Jumbotron = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <section className="relative">
      <img
        className="object-cover object-center w-full h-screen"
        src={JumbotronImg}
        alt="Jumbotron Image"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70"></div>
      <div className="absolute flex flex-col items-center justify-center inset-1">
        <CSSTransition in={isMounted} timeout={1000} classNames="fade" appear>
          <h1 className="mb-4 text-4xl font-bold text-white font-heading sm:text-5xl">
            Yayasan Anak Bali Luih
          </h1>
        </CSSTransition>
        <CSSTransition in={isMounted} timeout={1000} classNames="fade" appear>
          <h3 className="text-white text-1xl mb-[50px] max-w-[190px] text-center">
            Save from Poverty, Exploitation and Violence
          </h3>
        </CSSTransition>
        <LinkButton
          bgColor="bg-primary py-3 px-4 uppercase font-heading"
          text="What We Do"
        ></LinkButton>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-between p-6 text-center text-white gap-2x ">
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
