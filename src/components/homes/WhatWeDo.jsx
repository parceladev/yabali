import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { whatWeDoContent } from "../../content/homepageContent";
import { Banner1 } from "../../assets/user/homepage";

const WhatWeDo = () => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsMounted(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section className="grid items-center gap-12 lg:grid-cols-2 shadow-md bg-secondary p-6">
      <div>
        <div ref={ref}>
          <CSSTransition in={isMounted} timeout={1000} classNames="fade" appear>
            <div className="flex items-center gap-5">
              <div className="h-0.5 bg-primary w-[40px] hidden sm:block"></div>
              <p className="font-paragraph text-[13px] font-bold leading-3 hidden sm:block">
                WHAT WE DO
              </p>
            </div>
          </CSSTransition>
        </div>
        <div className="ml-[45px]">
          <h1 className="font-heading font-bold text-4xl my-10">
            Layanan kami untuk anak-anak
          </h1>
          <p className="font-paragraph font-regular text-[12px] mb-10 ">
            Di YABALI, setiap hari adalah kesempatan untuk menyalakan
            bintang-bintang kecil di langit masa depan anak-anak yang
            membutuhkan. Melalui serangkaian layanan yang kami rancang khusus,
            kami berusaha memberikan lebih dari sekadar bantuan - kami
            memberikan harapan, dukungan, dan kesempatan. Berikut adalah inti
            dari apa yang kami berikan:
          </p>
          <div className="border-l-2 border-primary">
            {whatWeDoContent.map((content, index) => (
              <div key={index} className="flex px-3 items-start gap-4  ">
                <img src={content.icon} alt="Family Icon" />
                <div>
                  <h3 className="font-heading font-bold text-[18px]">
                    {content.title}
                  </h3>
                  <p className="font-paragraph font-regular text-[14px] mb-10 ">
                    {content.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mb-12 lg:mb-0 drop-shadow-md bg">
        <img
          className="mx-auto w-[450px] h-[740px] rounded-lg shadow-lg dark:shadow-black/20 object-cover object-center"
          src={Banner1}
          alt="What We Do Banner"
        />
      </div>
    </section>
  );
};

export default WhatWeDo;
