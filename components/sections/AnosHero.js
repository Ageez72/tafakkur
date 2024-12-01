"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppContext } from "@/context/AppContext";
const swiperOptions = {
    modules: [Autoplay, EffectFade],
    effect: 'fade',  // Ensure fade effect is enabled
    slidesPerView: 1,
    spaceBetween: 0,
    speed: 1300,
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        clickable: false,
    },
};

export default function AnosHero() {
    const { state } = useAppContext();
    const [data, setData] = useState(null);

    const handleSlideChange = (swiper) => {
        setTimeout(() => {
            // Add animation to active slide's .txt-side elements
            const ElementsRight = document.querySelectorAll('.swiper-slide-active .txt-side-right');
            const elementsBottom = document.querySelectorAll('.swiper-slide-active .txt-side-bottom');

            ElementsRight.forEach((el) => {
                el.classList.add('hero-animate');
            });

            elementsBottom.forEach((el) => {
                el.classList.add('hero-animate-bottom');
            });
        }, 1000);
    };

    return (
        <>
            <div className="anos-hero-slider-wrapper fix hero-1 section-padding square-swiper-pagination">
                <div className="testimonial-bg">
                    <div className="container custom-container">
                        <div className="swiper testimonial-slider">
                            <Swiper
                                {...swiperOptions}
                                className="swiper-wrapper wow fadeInUp"
                                data-wow-delay=".5s"
                                onSlideChange={handleSlideChange} // Attach slide change handler here
                            >
                                <SwiperSlide>
                                    <div className="testimonial-content">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-lg-6 mb-4">
                                                <img className="title-image" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/title.jpg" alt="avatar image" />
                                                <h3>منهاج متكامل لبناء شخصية طلابك يحقق لك..</h3>
                                                <h2 className="head-blue mt-3 mb-4">نقلة نوعية في سلوك الطلاب</h2>
                                                <Link href="#" className="hover-btn d-inline-flex align-items-center">
                                                    طبق في مؤسستك
                                                </Link>
                                            </div>
                                            <div className="col-12 col-lg-6 left-side">
                                                <div className="row flex-nowrap align-items-center top-side">
                                                    <div className="col-3 txt-side txt-side-right">
                                                        <div className="overlay"></div>
                                                        <h5>
                                                            <span className="en-txt">70%</span> تطور في السلوك
                                                        </h5>
                                                    </div>
                                                    <div className="col-9 img-side">
                                                        <img className="w-100" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/top.jpg" alt="image" />
                                                    </div>
                                                </div>
                                                <div className="row align-items-center bottom-side mt-4">
                                                    <div className="col-6 img-side">
                                                        <img className="w-100" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/bottom.jpg" alt="image" />
                                                    </div>
                                                    <div className="col-6 txt-side txt-side-bottom">
                                                        <div className="overlay"></div>
                                                        <h5>
                                                            <span className="en-txt">70%</span> تطور في السلوك
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <div className="testimonial-content">
                                        <div className="row align-items-center">
                                            <div className="col-12 col-lg-6 mb-4">
                                                <img className="title-image" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/title.jpg" alt="avatar image" />
                                                <h3>طبق منهاج تفكر في بيتك</h3>
                                                <h2 className="head-blue mt-3 mb-4">رؤيتنا في بناء الجيل الأخلاقي المبدع</h2>
                                                <Link href="#" className="hover-btn d-inline-flex align-items-center">
                                                    طبق في مؤسستك
                                                </Link>
                                            </div>
                                            <div className="col-12 col-lg-6 left-side">
                                                <div className="row flex-nowrap align-items-center top-side">
                                                    <div className="col-3 txt-side txt-side-right">
                                                        <div className="overlay"></div>
                                                        <h5>
                                                            <span className="en-txt">90%</span> تطور في السلوك
                                                        </h5>
                                                    </div>
                                                    <div className="col-9 img-side">
                                                        <img className="w-100" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/top.jpg" alt="image" />
                                                    </div>
                                                </div>

                                                <div className="row align-items-center bottom-side mt-4">
                                                    <div className="col-6 img-side">
                                                        <img className="w-100" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/bottom.jpg" alt="image" />
                                                    </div>
                                                    <div className="col-6 txt-side txt-side-bottom">
                                                        <div className="overlay"></div>
                                                        <h5>
                                                            <span className="en-txt">80%</span> تطور في السلوك
                                                        </h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
