const Navbar = () => {
  return (
    <div className="flex justify-between">
      <div>
        <a href="/">Logo</a>
      </div>
      <div className="flex gap-10">
        <a href="/">Home</a>
        <a href="/user/profil">Profile</a>
        <a href="/user/informasi">Information</a>
        <a href="/user/program">Program</a>
        <a href="/user/donasi">Donasi</a>
        {/* <div>
          <a href="/auth/sign-up">Sign Up</a>
          <a href="/auth/sign-in">Sign In</a>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
