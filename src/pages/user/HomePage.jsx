import { Jumbotron, KnowAboutUs, Statistic } from "../../components/homes";
const HomePage = () => {
  return (
    <div className="flex my-8 flex-col mx-auto min-h-screen w-full h-[5000px]">
      <Jumbotron />
      <div className="flex flex-col mx-auto min-h-screen w-full max-w-[1150px] my-[50px] gap-14 ">
        <KnowAboutUs />
        <Statistic />
      </div>
    </div>
  );
};

export default HomePage;
