import { LineSpan, LinkButton, BigTitle } from "../generals";

const DonationBanner1 = () => {
  return (
    <section className="Donate">
      <div className="grid grid-cols-1 gap-10 px-4 py-8 lg:max-w-[1150px] lg:grid-cols-2 mx-auto">
        <div className="flex order-2 lg:order-1">
          <div className="hidden lg:flex">
            <LineSpan margin="lg:mr-8"></LineSpan>
          </div>
          <div className="flex flex-col gap-7">
            <h5>Donasi</h5>
            <BigTitle text="Mulai Memberi Sekarang" />
            <p className="text-justify">
              Kami optimis memberikan segalanya untuk menopang harapan mereka
              untuk meraih kebahagiaan. Namun, segala kompleksitas dan
              keterbatasan membuat kami mengerti bahwa tidak perlu menjadikan
              anak-anak menjadi sangat hebat, cukup dengan mereka mendapatkan
              kehidupan yang layak, teman, lingkungan, dan perhatian. Dukungan
              Anda membantu kami mewujudkan dunia di mana setiap anak bisa
              mendapatkan kesempatan yang sama untuk tumbuh, belajar, dan
              bersinar.
            </p>
            <LinkButton
              href="/user/donasi/detail-donasi"
              text="Donate Now"
              bgColor="bg-green-500"
            />
          </div>
        </div>
        <div className="order-1 w-full p-0 lg:order-2">
          <img
            src="/public/donation/donation-donate.png"
            className="object-cover w-full h-full"
            alt="donation-donate"
          />
        </div>
      </div>
    </section>
  );
};

export default DonationBanner1;
