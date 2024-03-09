import { BigTitle } from '../../components/generals';
import Button from '../../components/generals/Button';
import LineSpan from './../../components/generals/LineSpan';

const DonationPage = () => {
  return (
    <div className="flex gap-12 p-16">
      <div className="flex w-1/2">
        <LineSpan></LineSpan>
        <div className="flex flex-col gap-7">
          <h5>Donasi</h5>
          <BigTitle text="Mulai Memberi Sekarang" />
          <p>
            Kami optimis memberikan segalanya untuk menopang harapan mereka
            untuk meraih kebahagiaan. Namun, segala kompleksitas dan
            keterbatasan membuat kami mengerti bahwa tidak perlu menjadikan
            anak-anak menjadi sangat hebat, cukup dengan mereka mendapatkan
            kehidupan yang layak, teman, lingkungan, dan perhatian. Dukungan
            Anda membantu kami mewujudkan dunia di mana setiap anak bisa
            mendapatkan kesempatan yang sama untuk tumbuh, belajar, dan
            bersinar.
          </p>
          <Button text="Donate Now" bgColor="bg-green-500" />
        </div>
      </div>
      <div className="w-1/2 p-10">
        <img
          src="/public/donation/donation-donate.png"
          className="h-full"
          alt="donation-donate"
        />
      </div>
    </div>
  );
};

export default DonationPage;
