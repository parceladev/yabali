import { useState, useEffect, useRef } from 'react';
import { whatWeDoContent } from '../../content/homepageContent';
import { Banner1 } from '../../assets/user/homepage';
import LineSpan from './../generals/LineSpan';
import BigTitle from '../generals/BigTitle';
import LittleTitle from './../generals/LittleTitle';

const WhatWeDo = () => {
  const [setIsMounted] = useState(false);
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
        rootMargin: '0px',
        threshold: 0.5,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  });

  return (
    <section>
      <div className="grid justify-between w-full grid-cols-1 grid-rows-2 gap-0 p-4 shadow-md sm:gap-16 sm:p-16 sm:grid-cols-2 sm:grid-rows-1 bg-secondary">
        <div className="flex order-2 gap-5 sm:order-1">
          <div className="hidden sm:flex">
            <LineSpan></LineSpan>
          </div>
          <div className="flex flex-col gap-8 pt-1">
            <LittleTitle text="What We Do"></LittleTitle>
            <BigTitle text="Layanan kami untuk anak-anak kita"></BigTitle>
            <p className="text-md font-paragraph font-regular ">
              Di YABALI, setiap hari adalah kesempatan untuk menyalakan
              bintang-bintang kecil di langit masa depan anak-anak yang
              membutuhkan. Melalui serangkaian layanan yang kami rancang khusus,
              kami berusaha memberikan lebih dari sekadar bantuan - kami
              memberikan harapan, dukungan, dan kesempatan. Berikut adalah inti
              dari apa yang kami berikan:
            </p>
            <div className="flex">
              <span className="w-1 h-full bg-primary"></span>
              <div className="flex flex-col items-center justify-center gap-8">
                {whatWeDoContent.map((content, index) => (
                  <div key={index} className="flex items-start gap-5 px-5">
                    <img src={content.icon} alt="Family Icon" />
                    <div className="flex flex-col gap-2">
                      <h3 className="text-lg font-bold font-heading">
                        {content.title}
                      </h3>
                      <p className="text-sm font-paragraph font-regular">
                        {content.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="order-1 sm:order-2 sm:mb-0 drop-shadow-md">
          <img
            className="w-full sm:w-[450px] h-full rounded-lg shadow-lg dark:shadow-black/20 object-cover object-center"
            src={Banner1}
            alt="What We Do Banner"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
