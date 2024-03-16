import { BigTitle, LineSpan } from "../generals";
import DescriptionList from "./DescriptionList";

const WhyNeedUs = () => {
  return (
    <section className="p-4 md:p-16">
      <div className="flex flex-col gap-0 md:gap-16">
        <div className="flex flex-col gap-4 md:flex-row md:gap-12">
          <div className="md:w-3/5">
            <img
              src="/public/donation/why-need-support.png"
              alt=""
              className="w-full"
            />
          </div>
          <div className="flex flex-col justify-center text-start md:flex-row md:text-end md:w-2/5">
            <div className="flex flex-col items-end gap-5">
              <h5>Mengapa Harus Mulai Peduli</h5>
              <BigTitle text="Kenapa Mereka Butuh Dukungan Kita?"></BigTitle>
            </div>
            <LineSpan margin="md:ml-8 hidden md:flex"></LineSpan>
          </div>
        </div>
          <DescriptionList/>
        
      </div>
    </section>
  );
};

export default WhyNeedUs;
