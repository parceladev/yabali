import { BigTitle } from '../../components/generals';
import Button from '../../components/generals/Button';
import LineSpan from './../../components/generals/LineSpan';

const DonationPage = () => {
  return (
    <div>
      <section className="Donate">
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
      </section>
      <section className="Where Your Donation Go">
        <div className="flex gap-12 p-16 bg-orange-100">
          <div className="flex w-1/2">
            <LineSpan></LineSpan>
            <div className="flex flex-col gap-7">
              <h5>Bagaimana Donasi Digunakan</h5>
              <BigTitle text="Bagaimana kami menggunakan donasi Anda" />
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">
                  Dukungan Langsung Kepada Anak dan Keluarga
                </h3>
                <p>
                  Sebagian besar dari donasi yang kami terima digunakan untuk
                  memberikan dukungan langsung kepada anak-anak dan keluarga
                  mereka. Ini termasuk bantuan finansial untuk kebutuhan
                  sehari-hari, akses ke layanan kesehatan, nutrisi, dan dukungan
                  pendidikan.
                </p>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-lg font-bold">Operasional Yayasan</h3>
                <p>
                  Sebuah bagian kecil dari donasi digunakan untuk operasional
                  harian yayasan, memastikan kami dapat terus menjalankan misi
                  kami secara efektif. Kami berusaha keras untuk meminimalkan
                  biaya administrasi agar lebih banyak dana yang dapat langsung
                  diperuntukkan bagi anak-anak yang membutuhkan.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col w-1/2 gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Pengembangan dan Pelatihan</h3>
              <p>
                Sebagian dari donasi digunakan untuk mengembangkan program dan
                pelatihan bagi anak-anak dan keluarga, termasuk workshop
                keterampilan hidup, pendidikan keuangan, dan seminar parenting.
                Ini adalah investasi dalam pemberdayaan jangka panjang.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">
                Layanan Kesehatan dan Terapi
              </h3>
              <p>
                Donasi Anda membantu kami menyediakan akses ke layanan kesehatan
                dasar dan spesialis, termasuk terapi fisik, terapi wicara, dan
                dukungan psikologis untuk anak-anak yang memerlukannya.
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-bold">Advokasi dan Perlindungan</h3>
              <p>
                Kami juga menggunakan sebagian dana untuk advokasi hak anak dan
                upaya perlindungan anak dari kekerasan, eksploitasi, dan
                pengabaian. Ini termasuk program kesadaran masyarakat dan
                kemitraan dengan pihak berwenang untuk menciptakan lingkungan
                yang lebih aman bagi anak-anak.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;
