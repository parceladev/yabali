import { Button } from "@material-tailwind/react";
import { GalleryContent } from "../../content/informationContent";

const GalleryCard = () => {
  return (
    <section className="my-[40px]">
      <h1 className="text-center mb-5 font-paragraph font-bold text-[35px]">
        Aktivitas Kami
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 container ">
        {GalleryContent.map((item) => (
          <div
            key={item.id}
            className={`border-2 border-color-${item.id} Div-${item.id} relative rounded-[15px]`}
          >
            <div className="absolute inset-0 bg-black opacity-40 rounded-[15px] "></div>
            {item.id === 3 ? (
              <div className="relative">
                <div className="absolute inset-0 bg-black opacity-40 rounded-[15px]"></div>
                <img
                  src={item.imageUrl}
                  alt={`Image ${item.id} `}
                  className="object-cover object-center h-[300px] w-full rounded-[15px]"
                />

                <div className="absolute inset-0 flex flex-col justify-center items-start text-left p-5">
                  <h1 className="font-paragraph font-bold text-[20px] text-white">
                    Kumpulan Mingguan
                  </h1>
                  <p className="font-paragraph text-[11px] font-normal text-white w-full mt-3">
                    Setiap hari Minggu, YABALI mengadakan kehiatan kumpul
                    mingguan untuk anak-anak yang berada di Yayasan.
                  </p>
                  <Button className="mt-10 bg-white text-black drop-shadow-md px-5 py-3 text-[12px] font-heading font-medium rounded-[2px] shadow-md">
                    <a href={document.link}>Learn More</a>
                  </Button>
                </div>
              </div>
            ) : (
              <img
                src={item.imageUrl}
                alt={`Image ${item.id} `}
                className="object-cover object-center h-full w-full rounded-[15px]"
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default GalleryCard;
