import { BigTitle} from "../../components/generals";
import {
  DonaturTable,
  DonationBanner1,
  WhyNeedUs,
  WhereDonationGo
} from "./../../components/donations";

const DonationPage = () => {
  return (
    <div>
      <DonationBanner1 />
      <WhyNeedUs />
      < WhereDonationGo/>
      <section className="Donatur dan Transparansi">
        <div className="p-5 md:p-16">
          <div className="flex flex-col items-center gap-5 md:gap-16">
            <div className="flex flex-col gap-5 text-center max-w-[600px]">
              <BigTitle text="Donatur dan Transparansi"></BigTitle>
              <p>
                Transparansi kepada donatur adalah prioritas kami. Kami
                berkomitmen untuk menyediakan laporan berkala yang menunjukkan
                bagaimana donasi Anda telah digunakan untuk membuat dampak
                positif. Kami juga menjaga setiap Transparansi para donatur yang
                tidak ingin memberikan tanda informasi pribadi.
              </p>
            </div>
            <DonaturTable></DonaturTable>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;
