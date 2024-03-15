import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import { activityContent } from "../../content/homepageContent";
import { Button } from "@material-tailwind/react";
const Activity = () => {
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
    <section>
      <div ref={ref}>
        <CSSTransition in={isMounted} timeout={1000} classNames="fade" appear>
          <div className="flex items-center gap-5">
            <div className="h-0.5 bg-primary w-[40px] hidden sm:block"></div>
            <p className="font-paragraph text-[13px] font-bold leading-3 hidden sm:block">
              KEGITAN YANG KITA LAKUKAN
            </p>
          </div>
        </CSSTransition>
      </div>
      <h1 className="font-heading font-bold text-4xl my-10 ml-[55px] max-w-[500px]">
        We are creating a place where children with special needs can thrive{" "}
      </h1>
      <div className="sm:grid grid grid-cols-3 autofit gap-10">
        {activityContent.map((activity, index) => (
          <div key={index} className="relative shadow-md rounded-[15px]">
            <img
              className="object-cover object-center"
              src={activity.image}
              alt="Activity Image"
            />
            <div className="absolute inset-0 bg-black opacity-40 rounded-[15px]"></div>
            <div className="p-9 absolute inset-1 bottom-0 top-10">
              <h1 className="font-paragraph font-bold text-[24px] text-white mb-6">
                {activity.title}
              </h1>
              <p className="font-paragraph text-[12px] text-white">
                {activity.description}
              </p>
              <Button className="mt-10 bg-white text-black drop-shadow-md px-5 py-3 text-[12px] font-heading font-medium rounded-[2px] shadow-md">
                <a href={activity.link}>Learn More</a>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activity;
