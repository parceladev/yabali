import {
  Jumbotron,
  KnowAboutUs,
  Statistic,
  WhatWeDo,
  Activity,
} from '../../components/homes';
const HomePage = () => {
  return (
    <div className="w-full h-full">
      <Jumbotron />
      <div className="relative">
        <KnowAboutUs />
        <Statistic />
        <WhatWeDo />
        <Activity />
      </div>
    </div>
  );
};

export default HomePage;
