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

const DonaturTable = () => {
  const [dataDonatur, setDataDonatur] = useState([]);
  const currentMonth = new Date().getMonth() + 1; // Mendapatkan bulan saat ini
  const formattedCurrentMonth = currentMonth.toString().padStart(2, '0'); // Format bulan saat ini menjadi dua digit
  const currentYear = new Date().getFullYear(); // Mendapatkan tahun saat ini
  const [bulanFilter, setBulanFilter] = useState(formattedCurrentMonth); // Set bulan saat ini sebagai default filter
  const [tahunFilter, setTahunFilter] = useState(currentYear.toString()); // Set tahun saat ini sebagai default filter

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

  const filteredData = dataDonatur.filter((donatur) => {
    const date = new Date(donatur.date);
    const bulanData = date.getMonth() + 1;
    const tahunData = date.getFullYear();
    return (
      (bulanFilter
        ? bulanFilter === bulanData.toString().padStart(2, '0')
        : true) && (tahunFilter ? tahunFilter === tahunData.toString() : true)
    );
  });

  return (
    <div className="relative w-full overflow-x-auto rounded-lg shadow-md">
      <div className="flex gap-3 mb-4">
        <select
          id="bulanFilter"
          value={bulanFilter}
          onChange={(e) => setBulanFilter(e.target.value)}
          className="bg-gray-50 border border-gray-300 w-fit text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        >
          <option value="01">Januari</option>
          <option value="02">Februari</option>
          <option value="03">Maret</option>
          <option value="04">April</option>
          <option value="05">Mei</option>
          <option value="06">Juni</option>
          <option value="07">Juli</option>
          <option value="08">Agustus</option>
          <option value="09">September</option>
          <option value="10">Oktober</option>
          <option value="11">November</option>
          <option value="12">Desember</option>
        </select>
        <select
          id="tahunFilter"
          value={tahunFilter}
          onChange={(e) => setTahunFilter(e.target.value)}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
        >
          <option value="2023">2023</option>
          <option value="2024">2024</option>
        </select>
      </div>
      <table className="w-full text-sm text-left text-gray-500 border border-gray-600">
        <thead className="text-xs text-gray-900 uppercase border border-gray-600 bg-gray-50 dark:bg-gray-700">
          <tr>
            <th scope="col" className="w-5 px-6 py-3 border border-gray-600">
              No.
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-600">
              Nama Donatur
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-600">
              Hari dan Tanggal
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-600">
              Total Donasi
            </th>
            <th scope="col" className="px-6 py-3 border border-gray-600">
              Pesan
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((donatur, index) => (
            <tr
              key={donatur.id}
              className="text-gray-700 bg-white hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              <td className="px-6 py-4 border border-gray-600">{index + 1}</td>
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
  );
};

export default DonaturTable;
