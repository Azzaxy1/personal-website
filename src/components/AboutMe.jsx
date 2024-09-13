import aboutIcons from "../assets/icons/about-img.svg";
import shape from "../assets/shape.png";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="">
        <div className="flex flex-wrap justify-start xl:justify-center">
          <div className="self-center w-full px-6 lg:w-[54%]">
            <div className="relative mb-2 lg:mb-5">
              <img
                data-aos="zoom-in"
                src={shape}
                width={100}
                className="absolute -z-10 top-2 lg:w-48 "
              />
              <h1
                data-aos="zoom-in-right"
                className="font-bold text-left text-2xl lg:text-5xl text-[#357998]"
              >
                🧑‍💻 About Me
              </h1>
            </div>
            <p
              data-aos="fade-up-right"
              className="text-sm text-left lg:text-xl 2xl:text-2xl text-secondary"
            >
              I am a Bachelor of Informatics Engineering student at Banten Jaya
              University. I have a strong interest in Web Development,
              especially Front End Development using React Js, Next Js and
              TypeScript. My skills include problem solving, critical thinking,
              time work, time management, and a desire to explore new knowledge.
            </p>
          </div>
          <div data-aos="fade-up-left" className="px-6 lg:px-7">
            <img src={aboutIcons} alt="" width={350} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
