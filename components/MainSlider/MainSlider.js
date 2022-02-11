import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { SliderContainer } from "./styles";

// import Banners
import banners from "../../assets/banners/banners";

// import swiper slider
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

function MainSlider() {
    const [mainSliderContent, setMainSliderContent] = useState([]);
    const router = useRouter();

    SwiperCore.use([Navigation, Autoplay]);

    let arrayWithBanners = banners;

    const getMainSliderContent = (param) => {
        setMainSliderContent((currentList) => [...currentList, param]);
    };

    useEffect(() => {
        for (let i = 0; i < arrayWithBanners.length; i++) {
            getMainSliderContent(arrayWithBanners[i]);
        }
    }, []);

    return (
        <SliderContainer>
            <Swiper
                spaceBetween={100}
                slidesPerView={1}
                loop="true"
                navigation
                autoplay={{ delay: 6000 }}
                centeredSlides="true"
            >
                {mainSliderContent.length &&
                    mainSliderContent.map((banner, index) => {
                        if (index == 0 || index == 5 || index == 6) {
                            return (
                                <SwiperSlide key={`content__${banner.name}`}>
                                    <div
                                        className="content"
                                        onClick={(e) =>
                                            router.push(
                                                `/content?name=${banner.name
                                                    .toLowerCase()
                                                    .replace(/([ :])/g, "-")}`
                                            )
                                        }
                                    >
                                        <img
                                            src={banner.banner}
                                            width="100%"
                                            height="100%"
                                            alt={`${banner.name} Banner`}
                                        ></img>
                                        <img
                                            src={banner.logo}
                                            className="overlay"
                                            width="100%"
                                            height="100%"
                                            alt={`${banner.name} Logo`}
                                        ></img>
                                    </div>
                                </SwiperSlide>
                            );
                        } else
                            return (
                                <SwiperSlide key={`content__${banner.name}`}>
                                    <div
                                        className="content"
                                        onClick={(e) =>
                                            router.push(
                                                `/content?name=${banner.name
                                                    .toLowerCase()
                                                    .replace(/([ :])/g, "-")}`
                                            )
                                        }
                                    >
                                        <img
                                            src={banner.banner}
                                            width="100%"
                                            height="100%"
                                            alt={`${banner.name} Banner`}
                                        ></img>
                                        <img
                                            src={banner.logo}
                                            width="100%"
                                            height="100%"
                                            alt={`${banner.name} Logo`}
                                        ></img>
                                    </div>
                                </SwiperSlide>
                            );
                    })}
            </Swiper>
        </SliderContainer>
    );
}

export default MainSlider;
