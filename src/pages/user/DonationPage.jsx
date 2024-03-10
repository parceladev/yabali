import { BigTitle } from '../../components/generals';
import Button from '../../components/generals/Button';
import LineSpan from './../../components/generals/LineSpan';
import { useState, useEffect } from 'react';

const formatDate = (dateString) => {
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  };
  return new Date(dateString).toLocaleDateString('id-ID', options);
};

const formatCurrency = (amount) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0,
  }).format(amount);
};

const DonationPage = () => {
  const [dataDonatur, setDataDonatur] = useState([]);

  useEffect(() => {
    fetch('/api/donatur')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const formattedData = data.map((item) => ({
          ...item,
          date: formatDate(item.date),
          total_donate: formatCurrency(item.total_donate),
        }));
        setDataDonatur(formattedData);
      })
      .catch((error) =>
        console.error('Ada kesalahan dalam mengambil data: ', error)
      );
  }, []);

  return (
    <div>
      <section className="Donate">
        <div className="flex gap-12 p-16">
          <div className="flex w-1/2">
            <LineSpan margin="mr-8"></LineSpan>
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
      <section className="Why They Need to Help ?">
        <div className="flex flex-col gap-16 p-16">
          <div className="flex gap-12">
            <div className="w-3/5">
              <img src="/public/donation/why-need-support.png" alt="" />
            </div>
            <div className="flex w-2/5">
              <div className="flex flex-col items-end w-full gap-5 text-end">
                <h5>Mengapa Harus Mulai Peduli</h5>
                <BigTitle text="Kenapa Mereka Butuh Dukungan Kita?"></BigTitle>
              </div>
              <LineSpan margin="ml-8"></LineSpan>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8">
            <div className="flex flex-col gap-3">
              <div>
                <i></i>
                <h3 className="text-lg font-bold">Masalah Psikologis</h3>
              </div>
              <p>
                Banyak anak mengalami trauma atau masalah psikologis akibat
                kondisi lingkungan atau kejadian yang mereka alami. Dukungan
                terapeutik dan psikososial sangat penting untuk membantu mereka
                pulih dan bangkit kembali.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <i></i>
                <h3 className="text-lg font-bold">
                  Kekerasan, Eksploitasi, dan Pengabaian
                </h3>
              </div>
              <p>
                Setiap anak berhak atas lingkungan yang aman dan mendukung. Kami
                berjuang untuk melindungi anak-anak dari kekerasan, eksploitasi,
                dan pengabaian, namun upaya ini memerlukan sumber daya yang
                tidak sedikit.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <i></i>
                <h3 className="text-lg font-bold">
                  Kurang Perhatian dan Dukungan
                </h3>
              </div>
              <p>
                Banyak anak yang kami dukung berasal dari keluarga kurang mampu,
                daerah terpencil, atau lingkungan yang tidak mendukung
                pertumbuhan dan pengembangan mereka secara optimal.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <i></i>
                <h3 className="text-lg font-bold">
                  Masalah Gizi dan Biaya Perobatan
                </h3>
              </div>
              <p>
                Untuk tumbuh kembang yang optimal, setiap anak memerlukan asupan
                gizi dan akses ke layanan kesehatan yang memadai. Sayangnya, hal
                ini masih menjadi barang langka dengan biaya yang besar bagi
                sebagian besar anak yang kami layani.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <i></i>
                <h3 className="text-lg font-bold">
                  Kurangnya Akses Pendidikan
                </h3>
              </div>
              <p>
                Pendidikan adalah senjata paling ampuh yang bisa digunakan untuk
                mengubah dunia. Namun, tidak semua anak mendapatkan kesempatan
                untuk bersekolah, apalagi menerima pendidikan berkualitas.
              </p>
            </div>
            <div className="flex flex-col gap-3">
              <div>
                <i></i>
                <h3 className="text-lg font-bold">
                  Kurangnya Akses Pendidikan
                </h3>
              </div>
              <p>
                Pendidikan adalah senjata paling ampuh yang bisa digunakan untuk
                mengubah dunia. Namun, tidak semua anak mendapatkan kesempatan
                untuk bersekolah, apalagi menerima pendidikan berkualitas.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="Where Your Donation Go">
        <div className="flex gap-12 p-16 bg-orange-100">
          <div className="flex w-1/2">
            <LineSpan margin="mr-8"></LineSpan>
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
      <section className="Donatur dan Transparansi">
        <div className="p-16">
          <div className="flex flex-col items-center gap-16">
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
            <div className="relative w-full overflow-x-auto rounded-lg shadow-md">
              <table className="w-full text-sm text-left text-gray-500 border border-gray-600">
                <thead className="text-xs text-gray-900 uppercase border border-gray-600 bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th
                      scope="col"
                      className="w-5 px-6 py-3 border border-gray-600"
                    >
                      No.
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border border-gray-600"
                    >
                      Nama Donatur
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border border-gray-600"
                    >
                      Hari dan Tanggal
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border border-gray-600"
                    >
                      Total Donasi
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 border border-gray-600"
                    >
                      Pesan
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {dataDonatur.map((donatur, index) => (
                    <tr
                      key={donatur.id}
                      className="text-gray-700 bg-white hover:bg-gray-50 dark:hover:bg-gray-600"
                    >
                      <td className="px-6 py-4 border border-gray-600">
                        {index + 1}{' '}
                        {/* Menampilkan nomor urut berdasarkan index */}
                      </td>
                      <td className="px-6 py-4 border border-gray-600">
                        {donatur.donatur_name}
                      </td>
                      <td className="px-6 py-4 border border-gray-600">
                        {donatur.date}
                      </td>
                      <td className="px-6 py-4 border border-gray-600">
                        {donatur.total_donate}
                      </td>
                      <td className="max-w-xs px-6 py-4 truncate border border-gray-600">
                        {donatur.message}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;
