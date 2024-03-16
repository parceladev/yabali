import { statisticsData } from '../../content/homepageContent';

const Statistic = () => {
  return (
    <section>
      <div className="grid grid-cols-1 grid-rows-3 gap-8 p-4 sm:p-16 sm:gap-10 sm:grid-cols-3 sm:grid-rows-1 utofit">
        {statisticsData.map((statistic, index) => (
          <div
            key={index}
            className="flex items-center gap-4 p-5 shadow-md bg-secondary"
          >
            <h1 className="transition-transform transform font-gilroy1 text-7xl text-primary hover:-translate-y-1">
              {statistic.number}
            </h1>
            <div>
              <h4 className="font-gilroy2 text-[18px]">{statistic.title}</h4>
              <p className="font-gilroy1 text-[14px]">
                {statistic.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistic;
