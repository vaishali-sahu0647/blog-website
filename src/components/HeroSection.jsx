function HeroSection() {
  return (

    <div
      className="h-[400px] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://wikilovesfolklore.org/wp-content/uploads/2026/01/Inle_Floating_market.webp')",
      }}
    >

      <div className="w-full h-full flex items-center justify-center bg-black/40">

        <div
          className="w-4/5 mx-auto bg-black/80 text-white p-6 text-center rounded"
          style={{
            animation: "drop 1s ease forwards"
          }}
        >

          <h2 className="text-3xl font-bold mb-2">
            Welcome To Our Blog
          </h2>

          <p className="text-gray-200">
            Read Amazing Stories From Around The World
          </p>

        </div>

      </div>

      <style>
        {`
        @keyframes drop{
          0%{
            transform:translateY(-200px);
            opacity:0;
          }
          100%{
            transform:translateY(0);
            opacity:1;
          }
        }
        `}
      </style>

    </div>

  )
}

export default HeroSection

