import shape from "../assets/shape.png";
import CardExperience from "./CardExperience";
import { experience } from "../utils/index";

const Experience = () => {
  return (
    <section id="experience" className="bg-gray-800 py-14">
      <div>
        <div className="flex justify-center mb-8">
          <div data-aos="zoom-in-down" className="self-center px-6 lg:w-[70%]">
            <div className="relative flex justify-center mb-2 lg:mb-5">
              <img
                src={shape}
                width={100}
                className="absolute left-16 sm:left-52 md:left-64 lg:left-44 xl:left-64 2xl:left-[30rem] -z-10 top-2 lg:w-48 "
              />
              <h1 className="z-10 text-2xl font-bold text-left text-white lg:text-5xl sm:text-3xl md:text-4xl ">
                🏢 Experience
              </h1>
            </div>
            <p className="text-sm text-center text-gray-400 lg:text-xl 2xl:text-2xl sm:text-base md:text-lg">
              I have gained valuable experience by actively participating in
              various activities that have contributed to my growth as a
              front-end developer.
            </p>
          </div>
        </div>
        <div>
          <div className="flex flex-wrap justify-center gap-3">
            {experience.map((item, index) => (
              <CardExperience
                key={index}
                image={item.image}
                name={item.name}
                companyName={item.companyName}
                date={item.date}
                position={item.position}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
