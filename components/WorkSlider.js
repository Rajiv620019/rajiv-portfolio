// work slider data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: "Dapp Email & Credit card Integration",
          path: "/emailIntegration.png",
          link: "",
          gitHub:
            "https://github.com/Rajiv620019/dapp-email-creditcard-integration",
        },
        {
          title: "NFT Staking Dapp",
          path: "/thumb2.jpg",
          link: "",
          gitHub: "https://github.com/Rajiv620019/nft-staking-dapp",
        },
        {
          title: "ICO Dapp",
          path: "/icoDapp.png",
          link: "",
          gitHub: "https://github.com/Rajiv620019/ico-dapp",
        },
        {
          title: "Sushi",
          path: "/sushi.png",
          link: "https://sushi-rajiv.vercel.app/",
          gitHub: "https://github.com/Rajiv620019/sushi",
        },
      ],
    },
    {
      images: [
        {
          title: "Nike",
          path: "/nike.png",
          link: "https://rajiv-nike.netlify.app/",
          gitHub: "https://github.com/Rajiv620019/nike",
        },
        {
          title: "Millow Real Estate Dapp",
          path: "/thumb1.jpg",
          link: "",
          gitHub: "https://github.com/Rajiv620019/millow-real-estate-Dapp",
        },
        {
          title: "Promptopia",
          path: "/prompt.png",
          link: "https://promptopia.vercel.app/",
          gitHub: "https://github.com/Rajiv620019/promptopia",
        },
        {
          title: "ColorFusion AI",
          path: "/colorFusion.png",
          link: "https://3dproductshirts.netlify.app/",
          gitHub: "https://github.com/Rajiv620019/ColorFusion-AI",
        },
      ],
    },
    {
      images: [
        {
          title: "PayTM",
          path: "/payTM.jpeg",
          gitHub: "https://github.com/Rajiv620019/paytm",
        },
        {
          title: "Medium",
          path: "/medium.jpeg",
          gitHub: "https://github.com/Rajiv620019/medium",
        },
        // {
        //   title: "Zerodha",
        //   path: "/zerodha.jpeg",
        //   gitHub: "https://github.com/Rajiv620019/medium",
        // },
      ],
    },
  ],
};

// import swiper react components
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

// icons
import { BsArrowRight } from "react-icons/bs";
// next image
import Image from "next/image";
import Link from "next/link";

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlider.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                    key={index}
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      {/* image */}
                      <Image src={image.path} width={500} height={300} alt="" />
                      {/* overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      {/* title */}
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <h4>{image.title}</h4>
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          {/* title part 1 */}
                          <a href={image.link} className="delay-100">
                            Live |
                          </a>
                          {/* title part 2 */}

                          <a
                            href={image.gitHub}
                            className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150"
                          >
                            GitHub
                          </a>
                          {/* icon */}
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
