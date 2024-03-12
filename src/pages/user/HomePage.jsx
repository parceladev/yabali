import {
  Jumbotron,
  KnowAboutUs,
  Statistic,
  WhatWeDo,
  Activity,
} from "../../components/homes";
const HomePage = () => {
  return (
    <div className="flex flex-col mx-auto min-h-screen w-full">
      <Jumbotron />
      <div className="relative flex flex-col mx-auto min-h-screen w-full max-w-[1150px] my-[50px] gap-14 ">
        <KnowAboutUs />
        <Statistic />
        <WhatWeDo />
        <Activity />
      </div>
    </div>
  );
};

export default HomePage;
