import { GoalsAndMissionsContent } from "../../content/profileContent";
const GoalsAndMissions = () => {
  return (
    <section>
      <div className="w-full max-w-[1000px] flex  justify-between mt-[200px] ">
        {GoalsAndMissionsContent.map((content, index) => (
          <div key={index} className="max-w-[400px] mx-[60px]">
            <p className="font-paragraph font-bold text-[14px] uppercase">
              {content.title}
            </p>
            <h1 className="font-paragraph font-bold text-[20px] my-5">
              {content.heading}
            </h1>
            <p className="font-paragraph text-[11px]">{content.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GoalsAndMissions;
