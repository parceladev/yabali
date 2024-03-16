import { useState, useEffect, useRef } from 'react';
import { activityContent } from '../../content/homepageContent';
import { Button } from '@material-tailwind/react';
import { LineSpan, BigTitle } from './../generals/';
import LittleTitle from './../generals/LittleTitle';

const Activity = () => {
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
      <div className="flex gap-4 p-4 sm:p-16 sm:gap-8">
        <div className="hidden sm:flex">
          <LineSpan></LineSpan>
        </div>
        <div className="flex flex-col gap-4 pt-1 sm:gap-8">
          <LittleTitle text="Kegiatan Yang Kita Lakukan"></LittleTitle>
          <BigTitle text="Membangun Aktivitas Tumbuh-Kembang Anak"></BigTitle>
          <div className="grid grid-cols-1 grid-rows-3 gap-4 sm:gap-8 sm:grid-cols-3 sm:grid-rows-1 autofit">
            {activityContent.map((activity, index) => (
              <div key={index} className="relative shadow-md rounded-[15px]">
                <img
                  className="object-cover object-center w-full h-full"
                  src={activity.image}
                  alt="Activity Image"
                />
                <div className="absolute inset-0 bg-black opacity-40 rounded-[15px]"></div>
                <div className="absolute bottom-0 p-9 inset-1 top-10">
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
        </div>
      </div>
    </section>
  );
};

export default Activity;
