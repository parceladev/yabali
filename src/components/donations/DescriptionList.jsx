import { WhyNeedUsContent } from "../../content/donationContent";

const DescriptionList = () => {
  return (
    <section className="grid grid-cols-1 gap-4 text-justify md:grid-cols-3 md:gap-8 md:text-left">
      {WhyNeedUsContent.map((list, index) => (
        <div key={index}>
          <p className="max-w-[300px]">{list.description}</p>
        </div>
      ))}
    </section>
  );
};


export default DescriptionList;
