import { NewsContent } from "../../content/informationContent";
import { Button } from "@material-tailwind/react";
const News = () => {
  return (
    <section className="mt-20 ">
      <div className="flex items-center gap-5 mb-10">
        <div className="h-0.5 bg-primary w-[40px] hidden sm:block"></div>
        <p className="font-paragraph text-[13px] font-bold leading-3 hidden sm:block ">
          BERITA TERBARU
        </p>
      </div>
      <div className="grid items-center gap-12 lg:grid-cols-2 ">
        <div className="ml-[45px]">
          <h1 className="font-heading font-bold text-4xl my-10">
            Tujuan kami adalah memberikan pengasuhan inklusif bagi anak
          </h1>
          <p className="font-paragraph font-regular text-[12px] mb-10 max-w-[400px]">
            Menjadi yayasan terdepan dalam menyediakan layanan perwatan inklusif
            dan berkualitas bagi anak-anak di Bali.
          </p>
          <Button
            variant="gradient"
            size="md"
            className="bg-primary text-white drop-shadow-md px-5 py-3 text-[12px] font-heading font-medium rounded-[2px] shadow-md"
          >
            Read More
          </Button>
        </div>
        <div className="mb-12 lg:mb-0 drop-shadow-md flex flex-col gap-2">
          {NewsContent.map((news, index) => (
            <div key={index} className="flex gap-5 items-start">
              <img
                src={news.image}
                alt=""
                className="h-[150px] w-[150px] object-cover object-center rounded-2xl"
              />
              <div className="overflow-hidden">
                <h2 className="font-paragraph font-bold text-[18px] max-w-[300px]">
                  {news.heading}
                </h2>
                <p className="font font-paragraph font-bold text-secondary text-[12px] opacity-[50%]">
                  {news.date}
                </p>
                <p className="font-paragraph font-normal  text-secondary text-[14px] opacity-[70%] line-clamp-2 leading-normal">
                  {news.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
