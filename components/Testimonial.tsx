// import swinger and react  compoennts

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { IoMdQuote } from "react-icons/io";

const testimonials = [
  {
    message:
      "The coffee here is absolutely amazing! The baristas are skilled and the atmosphere is perfect for both work and relaxation.",
    name: "Alice Johnson",
    proffession: "Graphic Designer",
  },
  {
    message:
      "I love coming to this cafe. The pastries are always fresh, and the staff is incredibly friendly. It's my go-to spot for meetings.",
    name: "Michael Lee",
    proffession: "Freelance Writer",
  },
  {
    message:
      "A hidden gem! The ambiance is cozy, and the menu offers a great variety. The chai latte is a must-try!",
    name: "Samantha Green",
    proffession: "Marketing Specialist",
  },
];

const Testimonial = () => {
  return (
    <section className="h-[60vh] xl:h-[70vh] container mx-auto">
      <div className="flex  h-full">
        <Swiper navigation={true} modules={[Navigation]} className="h-[400px]">
          {testimonials.map((person, index) => {
            return (
              <SwiperSlide key={index} className="h-full w-full">
                <div className="flex justify-center h-full xl:pt-14">
                  <div className="max-w-[60%] text-primary">
                    <IoMdQuote className="text-6xl text-primary mb-12 mx-auto" />
                    <p className="text-center font-secondary text-2xl mb-8">
                      {person.message}
                    </p>
                    <div className="text-center">
                      <p className="text-xl font-bold mb-1">{person.name}</p>
                      <p className="text-secondary">{person.proffession}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
