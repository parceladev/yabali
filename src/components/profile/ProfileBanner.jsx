const Banner = () => {
  return (
    <section>
      <video
        className="h-[450px] w-full object-cover object-center rounded-md shadow-md"
        autoPlay
        loop
        muted
      >
        <source
          src="https://docs.material-tailwind.com/demo.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
    </section>
  );
};

export default Banner;
