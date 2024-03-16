import {
  BigTitle,
  LinkButton,
  LineSpan,
  LittleTitle,
} from '../../components/generals';
import { DonaturTable } from './../../components/donations';
import DescriptionList from './../../components/donations/DescriptionList';

const DonationPage = () => {
  return (
    <div>
      <section className="Donate">
        <div className="grid grid-cols-1 gap-12 px-4 py-8 lg:p-16 lg:grid-cols-2">
          <div className="flex order-2 lg:order-1">
            <div className="hidden lg:flex">
              <LineSpan margin="lg:mr-8"></LineSpan>
            </div>
            <div className="flex flex-col gap-7">
              <LittleTitle text="Donasi"></LittleTitle>
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
              src="/src/assets/user/donation/donation-donate.png"
              className="object-cover w-full h-full"
              alt="donation-donate"
            />
          </div>
        </div>
      </section>

      <section className="p-4 md:p-16">
        <div className="flex flex-col gap-0 md:gap-16">
          <div className="flex flex-col gap-4 md:flex-row md:gap-12">
            <div className="md:w-3/5">
              <img
                src="/src/assets/user/donation/why-need-support.png"
                alt=""
                className="w-full"
              />
            </div>
            <div className="flex flex-col justify-center text-start md:flex-row md:text-end md:w-2/5">
              <div className="flex flex-col items-end gap-5">
                <LittleTitle text="Mengapa Harus Mulai Peduli"></LittleTitle>
                <BigTitle text="Kenapa Mereka Butuh Dukungan Kita?"></BigTitle>
              </div>
              <LineSpan margin="md:ml-8 hidden md:flex"></LineSpan>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 text-justify md:grid-cols-3 md:gap-8 md:text-left">
            <DescriptionList
              icon=""
              title="Masalah Psikologis"
              text="Banyak anak mengalami trauma atau masalah psikologis akibat
              kondisi lingkungan atau kejadian yang mereka alami. Dukungan
              terapeutik dan psikososial sangat penting untuk membantu mereka
              pulih dan bangkit kembali."
            ></DescriptionList>
            <DescriptionList
              icon=""
              title="Kekerasan, Eksploitasi, dan Pengabaian"
              text="Setiap anak berhak atas lingkungan yang aman dan mendukung. Kami
              berjuang untuk melindungi anak-anak dari kekerasan, eksploitasi,
              dan pengabaian, namun upaya ini memerlukan sumber daya yang
              tidak sedikit."
            ></DescriptionList>
            <DescriptionList
              icon=""
              title="Kurang Perhatian dan Dukungan"
              text="Banyak anak yang kami dukung berasal dari keluarga kurang mampu,
              daerah terpencil, atau lingkungan yang tidak mendukung
              pertumbuhan dan pengembangan mereka secara optimal."
            ></DescriptionList>
            <DescriptionList
              icon=""
              title="Masalah Gizi dan Biaya Perobatan"
              text="Untuk tumbuh kembang yang optimal, setiap anak memerlukan asupan
              gizi dan akses ke layanan kesehatan yang memadai. Sayangnya, hal
              ini masih menjadi barang langka dengan biaya yang besar bagi
              sebagian besar anak yang kami layani."
            ></DescriptionList>
            <DescriptionList
              icon=""
              title="Kurangnya Akses Pendidikan"
              text="Pendidikan adalah senjata paling ampuh yang bisa digunakan untuk
              mengubah dunia. Namun, tidak semua anak mendapatkan kesempatan
              untuk bersekolah, apalagi menerima pendidikan berkualitas."
            ></DescriptionList>
          </div>
        </div>
      </section>
      <section className="Where Your Donation Go">
        <div className="flex flex-wrap gap-12 p-4 bg-orange-100 md:p-16">
          <div className="flex flex-col w-full md:gap-7 md:flex-row">
            <div className="flex w-full md:w-1/2">
              <LineSpan margin="hidden lg:flex mr-8"></LineSpan>
              <div className="flex flex-col gap-7">
                <LittleTitle text="Bagaimana Donasi Digunakan"></LittleTitle>
                <BigTitle text="Bagaimana kami menggunakan donasi Anda" />
                <DescriptionList
                  icon=""
                  title="Dukungan Langsung Kepada Anak dan Keluarga"
                  text="Sebagian besar dari donasi yang kami terima digunakan untuk memberikan dukungan langsung kepada anak-anak dan keluarga mereka. Ini termasuk bantuan finansial untuk kebutuhan sehari-hari, akses ke layanan kesehatan, nutrisi, dan dukungan pendidikan."
                ></DescriptionList>
                <DescriptionList
                  icon=""
                  title="Advokasi dan Perlindungan"
                  text="Kami juga menggunakan sebagian dana untuk advokasi hak anak dan upaya perlindungan anak dari kekerasan, eksploitasi, dan pengabaian. Ini termasuk program kesadaran masyarakat dan kemitraan dengan pihak berwenang untuk menciptakan lingkungan yang lebih aman bagi anak-anak."
                ></DescriptionList>
              </div>
            </div>
            <div className="flex flex-col w-full gap-8 md:w-1/2">
              <DescriptionList
                icon=""
                title="Pengembangan dan Pelatihan"
                text="Sebagian dari donasi digunakan untuk mengembangkan program dan pelatihan bagi anak-anak dan keluarga, termasuk workshop keterampilan hidup, pendidikan keuangan, dan seminar parenting. Ini adalah investasi dalam pemberdayaan jangka panjang."
              ></DescriptionList>
              <DescriptionList
                icon=""
                title="Layanan Kesehatan dan Terapi"
                text="Donasi Anda membantu kami menyediakan akses ke layanan kesehatan dasar dan spesialis, termasuk terapi fisik, terapi wicara, dan dukungan psikologis untuk anak-anak yang memerlukannya."
              ></DescriptionList>
              <DescriptionList
                icon=""
                title="Operasional Yayasan"
                text="Sebuah bagian kecil dari donasi digunakan untuk operasional harian yayasan, memastikan kami dapat terus menjalankan misi kami secara efektif. Kami berusaha keras untuk meminimalkan biaya administrasi agar lebih banyak dana yang dapat langsung diperuntukkan bagi anak-anak yang membutuhkan."
              ></DescriptionList>
            </div>
          </div>
        </div>
      </section>
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
