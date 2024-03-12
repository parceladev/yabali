import { useState, useEffect, useRef } from "react";
import { Button } from "@material-tailwind/react";
import { CSSTransition } from "react-transition-group";

const KnowAboutUs = () => {
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
    <section className="grid items-center gap-12 lg:grid-cols-2 ">
      <div>
        <div ref={ref}>
          <CSSTransition in={isMounted} timeout={1000} classNames="fade" appear>
            <div className="flex items-center gap-5">
              <div className="h-0.5 bg-primary w-[40px] hidden sm:block"></div>
              <p className="font-paragraph text-[13px] font-bold leading-3 hidden sm:block">
                KETAHUI KAMI LEBIH LANJUT
              </p>
            </div>
          </CSSTransition>
        </div>
        <div className="ml-[45px]">
          <h1 className="font-heading font-bold text-4xl my-10">
            Tentang Kami
          </h1>
          <p className="font-paragraph font-regular text-[12px] mb-10 max-w-[400px]">
            Kami percaya bahwa setiap anak memiliki potensi untuk bersinar. Kami
            berdedikasi untuk menerangi jalan anak-anak yang kurang beruntung
            dengan memberikan dukungan, pendidikan, dan kasih sayang yang mereka
            butuhkan untuk tumbuh dan berkembang. Kami tidak hanya membantu
            mereka mencapai impian mereka tetapi juga memastikan mereka memiliki
            kehidupan yang layak, penuh dengan kesetaraan dan keadilan.
          </p>
          <Button
            variant="gradient"
            size="md"
            className="bg-primary text-white drop-shadow-md px-5 py-3 text-[12px] font-heading font-medium rounded-[2px] shadow-md"
          >
            Learn More
          </Button>
        </div>
      </div>
      <div className="mb-12 lg:mb-0 drop-shadow-md">
        <video
          className="mx-auto w-[450px] h-[550px] rounded-lg shadow-lg dark:shadow-black/20 object-cover object-center "
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
    </section>
  );
};

export default KnowAboutUs;
