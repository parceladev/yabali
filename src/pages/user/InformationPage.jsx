import { GalleryCard, News } from "../../components/informations";
const InformationPage = () => {
  return (
    <section>
      <div className="flex flex-col min-h-screen max-w-[1150px] mx-auto ">
        <News />
      </div>
      <div className="flex flex-col  w-full bg-secondary relative p-5 mt-7">
        <GalleryCard />
      </div>
    </section>
  );
};

export default InformationPage;
