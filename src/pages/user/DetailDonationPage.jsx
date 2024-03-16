import { LinkButton } from './../../components/generals';

const DetailDonationPage = () => {
  return (
    <div>
      <section>
        <div className="flex flex-col items-center justify-center w-full h-auto gap-12 p-5 text-center md:justify-start md:items-start md:text-left md:flex-row md:p-16">
          <div className="h-80 w-80">
            <img
              src="/src/assets/user/donation/barcode_qris_yabali.jpeg"
              alt="barcode qris yabali"
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col w-full gap-12 md:gap-56 md:flex-1">
            <div className="flex flex-col gap-3 mb-auto">
              <h1 className="text-3xl font-bold">Yayasan Anak Bali Luih</h1>
              <p className="text-lg uppercase">Nmid : ID2021065207775A01</p>
            </div>
            <div className="justify-center md:self-end">
              <LinkButton text="Send Proof of Your Donation"></LinkButton>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DetailDonationPage;
