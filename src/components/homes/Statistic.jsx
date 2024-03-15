import { statisticsData } from "../../content/homepageContent";

const Statistic = () => {
  return (
    <section className="sm:grid grid grid-cols-3 autofit gap-10 ">
      {statisticsData.map((statistic, index) => (
        <div
          key={index}
          className="flex items-center gap-4 p-5 bg-secondary shadow-md"
        >
          <h1 className="font-gilroy1 text-7xl text-primary transition-transform transform hover:-translate-y-1">
            {statistic.number}
          </h1>
          <div>
            <h4 className="font-gilroy2 text-[18px]">{statistic.title}</h4>
            <p className="font-gilroy1 text-[14px]">{statistic.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Statistic;
