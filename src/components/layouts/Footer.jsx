import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 p-16 text-center text-white bg-green-500 md:grid-cols-2 lg:grid-cols-3 md:text-start">
        <div className="flex flex-col items-center justify-center md:col-span-2 lg:col-span-1 md:items-center">
          <img
            src="/public/logo/transparant-logo-yabali.png"
            alt="YABALI Logo"
          />
          <h1 className="text-4xl font-semibold">YABALI</h1>
          <h2 className="text-lg font-semibold">Yayasan Anak Bali Luih</h2>
        </div>
        <div className="flex flex-col gap-6 md:col-span-1">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold">Address</h3>
            <p>
              BTN Griya Sandan Sari Blok E/17, Banjar Anyar, Kecamatan Kediri,
              Kabupaten Tabanan, Provinsi Bali.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold">Contact Us</h3>
            <p>+62 81234567890</p>
            <p>yayasananakbaliluih@gmail.com</p>
            <p>08.00 - 21.00</p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:col-span-1">
          <div className="flex flex-col gap-3">
            <h3 className="font-bold">Feedback</h3>
            <p>
              Send us some feedback to improve our services to help those in
              need via email.
            </p>
          </div>
          <div className="flex gap-3">
            <input
              type="text"
              placeholder="Your Feedback..."
              className="flex-grow p-2 rounded-md"
            />
            <button className="px-3 py-2 bg-green-800 rounded-md">Send</button>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="font-bold">Social Media</h3>
            <div className="flex justify-center gap-5 md:justify-start">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="text-2xl text-white hover:text-gray-300" />
              </a>
              <a
                href="https://www.tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTiktok className="text-2xl text-white hover:text-gray-300" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="text-2xl text-white hover:text-gray-300" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter className="text-2xl text-white hover:text-gray-300" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaYoutube className="text-2xl text-white hover:text-gray-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="py-3 text-sm text-center text-white bg-gray-900">
        <p>
          Copyright &copy; All Rights Reserved | 2024 | Yayasan Anak Bali Luih -
          Yabali.
        </p>
      </div>
    </div>
  );
};

export default Footer;
