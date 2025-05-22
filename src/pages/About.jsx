function About() {
  return (
    <div className="bg-green-900 relative w-full h-screen">
      {/* Video Section */}
      <div className="relative w-full h-1/2">
        <video
          src="src\assets\Images\video_herbal_website.mp4"
          autoPlay
          loop
          //   muted
          className="w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg text-center">
            The Finest Herbal Supplements on Earth
          </h1>
        </div>
      </div>

      {/* Additional Content */}
      <div className="p-8 text-center">
        <h2 className="text-3xl text-white font-semibold my-4">
          About Ananta Pure
        </h2>
        <p className="text-lg leading-relaxed text-white">
          We are passionate about offering the best herbal products that promote
          wellness and health. Our commitment to purity, sustainability, and
          quality ensures that you receive the finest natural supplements.
        </p>
      </div>
    </div>
  );
}

export default About;
