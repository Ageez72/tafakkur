"use client";
import { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

export default function AnosExperienceSlider({ cols }) {
    const [data, setData] = useState(null);

    const swiperOptions = {
        modules: [Pagination, Autoplay],
        slidesPerGroup: 1,
        slidesPerView: 1,
        speed: 1300,
        loop: true,
        // centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        pagination: {
            clickable: true,
        },
    };
    // Render Swiper component only when data is available
    return (
        <>
            {/* {data && data.data && ( */}
            <div className="anos-experience-slider">
                <div className="overlay"></div>
                <div className="container custom-container">
                    <div className="swiper testimonial-slider">
                        <Swiper {...swiperOptions} className="swiper-wrapper wow fadeInUp pb-5" data-wow-delay=".5s">
                            {/* {data.data.map((brand, index) => ( */}
                            <SwiperSlide>
                                <div className="testimonial-content text-center">
                                    <img className="exp-img mb-2" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/exp1.jpg" alt="exp 1" />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="testimonial-content text-center">
                                    <img className="exp-img mb-2" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/exp1.jpg" alt="exp 1" />
                                </div>
                            </SwiperSlide>
                            {/* ))} */}
                        </Swiper>
                    </div>
                </div>
            </div>
            {/* )}*/}
        </>
    );
}
