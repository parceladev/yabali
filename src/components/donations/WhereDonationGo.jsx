import {
  WhereDonationGoContent1,
  WhereDonationGoContent2,
} from "../../content/donationContent";
import { LineSpan } from "../generals";
const WhereDonationGo = () => {
  return (
    <section className="gap-12 p-4 bg-orange-100 md:p-16">
      <div className="flex flex-wrap w-full md:w-1/2">
        <LineSpan margin="hidden lg:flex mr-8"></LineSpan>
        <h5>Bagaimana Donasi Digunakan</h5>
      </div>
      <div className="flex w-full md:gap-7 md:flex-row items-center">
        <div className="flex-flex-col">
          <h1 className="font-paragraph font-bold text-5xl max-w-[380px] mb-6">
            Bagaimana kami menggunakan donasi Anda
          </h1>
          <div className=" w-full ">
            {WhereDonationGoContent1.map((donation, index) => (
              <div key={index} className="flex flex-col gap-3">
                <h1 className="font-paragraph font-bold text-[14px]">
                  {donation.heading}
                </h1>
                <p>{donation.description}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full gap-8 ">
          {WhereDonationGoContent2.map((donation, index) => (
            <div key={index} className="flex flex-col w-full gap-7">
              <h1 className="font-paragraph font-bold text-[14px]">
                {donation.heading}
              </h1>
              <p>{donation.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhereDonationGo;
