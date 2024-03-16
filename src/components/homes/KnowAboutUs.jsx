import { useState, useEffect, useRef } from 'react';
import LineSpan from './../generals/LineSpan';
import LinkButton from './../generals/LinkButton';
import BigTitle from './../generals/BigTitle';
import LittleTitle from './../generals/LittleTitle';

const KnowAboutUs = () => {
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
      <div className="grid w-full h-full grid-cols-1 gap-0 p-4 sm:pt-16 sm:px-16 sm:grid-cols-3 sm:gap-16">
        <div className="order-2 w-full h-full sm:col-span-2 sm:order-1">
          <div className="flex h-full gap-5">
            <div className="hidden sm:flex">
              <LineSpan></LineSpan>
            </div>
            <div className="flex flex-col gap-8 pt-1">
              <LittleTitle text="Ketahui Kami Lebih Lanjut"></LittleTitle>
              <BigTitle text="Tentang Kami"></BigTitle>
              <p className="text-base text-justify font-paragraph">
                Kami percaya bahwa setiap anak memiliki potensi untuk bersinar.
                Kami berdedikasi untuk menerangi jalan anak-anak yang kurang
                beruntung dengan memberikan dukungan, pendidikan, dan kasih
                sayang yang mereka butuhkan untuk tumbuh dan berkembang. Kami
                tidak hanya membantu mereka mencapai impian mereka tetapi juga
                memastikan mereka memiliki kehidupan yang layak, penuh dengan
                kesetaraan dan keadilan.
              </p>
              <LinkButton
                bgColor="bg-primary uppercase"
                text="Learn More"
              ></LinkButton>
            </div>
          </div>
        </div>
        <div className="order-1 w-full h-full sm:col-span-1 sm:order-2 drop-shadow-md">
          <video
            className="object-cover object-center w-full h-full rounded-lg shadow-lg sm:h-[500px] dark:shadow-black/20"
            autoPlay
            loop
            muted
          >
            <source
              src="https://docs.material-tailwind.com/demo.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
};

export default KnowAboutUs;
