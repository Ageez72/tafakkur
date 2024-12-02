"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useAppContext } from "@/context/AppContext";
import Image from "next/image";

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
                                                        <h5>
                                                            <Image
                                                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide1/تعديل-السلوك-في-منهاج-تفكر-مع-أنوس.png"
                                                                width={352}
                                                                height={56}
                                                                alt="image"
                                                                className="w-100 h-100 object-fit border-radius-8"
                                                            />
                                                        </h5>
                                                    </div>
                                                    <div className="col-9 img-side">
                                                        <Image
                                                            src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide1/طفل-تفكر-في-الصف.jpg"
                                                            width={352}
                                                            height={223}
                                                            alt="image"
                                                            className="w-100 object-fit border-radius-8"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row align-items-center bottom-side mt-4">
                                                    <div className="col-6 img-side">
                                                        <Image
                                                            src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide1/أطفال-تفكر-مدرسة-إناث.jpg"
                                                            width={352}
                                                            height={56}
                                                            alt="image"
                                                            className="w-100 object-fit border-radius-8"
                                                        />
                                                    </div>
                                                    <div className="col-6 txt-side txt-side-bottom">
                                                        <h5>
                                                            <Image
                                                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide1/تحسين-إساءة-السلوك-منهاج-تفكر-مع-أنوس.png"
                                                                width={228}
                                                                height={145}
                                                                alt="image"
                                                                className="w-100 h-100"
                                                            />
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
                                                <h3>منهاج متكامل لبناء شخصية طلابك يحقق لك..</h3>
                                                <h2 className="head-blue mt-3 mb-4">نقلة نوعية في سلوك الطلاب</h2>
                                                <Link href="#" className="hover-btn d-inline-flex align-items-center">
                                                    طبق في مؤسستك
                                                </Link>
                                            </div>
                                            <div className="col-12 col-lg-6 left-side">
                                                <div className="row flex-nowrap align-items-center top-side">
                                                    <div className="col-3 txt-side txt-side-right">
                                                        <h5>
                                                            <Image
                                                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide2/ارتفاع-نسب-مهارات-الإبداع-في-منهاج-تفكر-مع-أنوس.png"
                                                                width={352}
                                                                height={56}
                                                                alt="image"
                                                                className="w-100 h-100 object-fit border-radius-8"
                                                            />
                                                        </h5>
                                                    </div>
                                                    <div className="col-9 img-side">
                                                        <Image
                                                            src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide2/طفلة-في-نشاط-تفكر-مع-أنوس.png"
                                                            width={352}
                                                            height={223}
                                                            alt="image"
                                                            className="w-100 object-fit border-radius-8"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row align-items-center bottom-side mt-4">
                                                    <div className="col-6 img-side">
                                                        <Image
                                                            src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide2/طفل-السعودية-تفكر-مع-أنوس.png"
                                                            width={352}
                                                            height={56}
                                                            alt="image"
                                                            className="w-100 object-fit border-radius-8"
                                                        />
                                                    </div>
                                                    <div className="col-6 txt-side txt-side-bottom">
                                                        <h5>
                                                            <Image
                                                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide2/برنامج-رعاية-الموهوبين-المبدعين.png"
                                                                width={228}
                                                                height={145}
                                                                alt="image"
                                                                className="w-100 h-100"
                                                            />
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
                                                <h3>منهاج متكامل لبناء شخصية طلابك يحقق لك..</h3>
                                                <h2 className="head-blue mt-3 mb-4">نقلة نوعية في سلوك الطلاب</h2>
                                                <Link href="#" className="hover-btn d-inline-flex align-items-center">
                                                    طبق في مؤسستك
                                                </Link>
                                            </div>
                                            <div className="col-12 col-lg-6 left-side">
                                                <div className="row flex-nowrap align-items-center top-side">
                                                    <div className="col-3 txt-side txt-side-right">
                                                        <h5>
                                                            <Image
                                                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide3/تنمية-الذكاء-في-منهاج-تفكر-مع-أنوس.png"
                                                                width={352}
                                                                height={56}
                                                                alt="image"
                                                                className="w-100 h-100 object-fit border-radius-8"
                                                            />
                                                        </h5>
                                                    </div>
                                                    <div className="col-9 img-side">
                                                        <Image
                                                            src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide3/دليل-المعلم-منهاج-تفكر-مع-أنوس.png"
                                                            width={352}
                                                            height={223}
                                                            alt="image"
                                                            className="w-100 object-fit border-radius-8"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row align-items-center bottom-side mt-4">
                                                    <div className="col-6 img-side">
                                                        <Image
                                                            src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide3/تدريب-تفكر-مع-أنوس-أونلاين.png"
                                                            width={352}
                                                            height={56}
                                                            alt="image"
                                                            className="w-100 object-fit border-radius-8"
                                                        />
                                                    </div>
                                                    <div className="col-6 txt-side txt-side-bottom">
                                                        <h5>
                                                            <Image
                                                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide3/تدريب-المعلمين-على-كشف-الذكاءات.png"
                                                                width={228}
                                                                height={145}
                                                                alt="image"
                                                                className="w-100 h-100"
                                                            />
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
                                                <h3>منهاج متكامل لبناء شخصية طلابك يحقق لك..</h3>
                                                <h2 className="head-blue mt-3 mb-4">نقلة نوعية في سلوك الطلاب</h2>
                                                <Link href="#" className="hover-btn d-inline-flex align-items-center">
                                                    طبق في مؤسستك
                                                </Link>
                                            </div>
                                            <div className="col-12 col-lg-6 left-side">
                                                <div className="row flex-nowrap align-items-center top-side">
                                                    <div className="col-3 txt-side txt-side-right">
                                                        <h5>
                                                            <Image
                                                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide4/بيئة-صفية-خالية-من-التنمر.png"
                                                                width={352}
                                                                height={56}
                                                                alt="image"
                                                                className="w-100 h-100 object-fit border-radius-8"
                                                            />
                                                        </h5>
                                                    </div>
                                                    <div className="col-9 img-side">
                                                        <Image
                                                            src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide4/أطفال-في-الصف-منهاج-تفكر-مع-أنوس.jpg"
                                                            width={352}
                                                            height={223}
                                                            alt="image"
                                                            className="w-100 object-fit border-radius-8"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row align-items-center bottom-side mt-4">
                                                    <div className="col-6 img-side">
                                                        <Image
                                                            src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide4/كتاب-معايير-التميز-منهاج-تفكر-مع-أنوس.png"
                                                            width={352}
                                                            height={56}
                                                            alt="image"
                                                            className="w-100 object-fit border-radius-8"
                                                        />
                                                    </div>
                                                    <div className="col-6 txt-side txt-side-bottom">
                                                        <h5>
                                                            <Image
                                                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide4/معايير-أداء-معلم-الإبداع.png"
                                                                width={228}
                                                                height={145}
                                                                alt="image"
                                                                className="w-100 h-100"
                                                            />
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
                                                <h3>منهاج متكامل لبناء شخصية طلابك يحقق لك..</h3>
                                                <h2 className="head-blue mt-3 mb-4">نقلة نوعية في سلوك الطلاب</h2>
                                                <Link href="#" className="hover-btn d-inline-flex align-items-center">
                                                    طبق في مؤسستك
                                                </Link>
                                            </div>
                                            <div className="col-12 col-lg-6 left-side">
                                                <div className="row flex-nowrap align-items-center top-side">
                                                    <div className="col-3 txt-side txt-side-right">
                                                        <h5>
                                                            <Image
                                                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide5/تعلم-طويل-المدى-تفكر-مع-أنوس.png"
                                                                width={352}
                                                                height={56}
                                                                alt="image"
                                                                className="w-100 h-100 object-fit border-radius-8"
                                                            />
                                                        </h5>
                                                    </div>
                                                    <div className="col-9 img-side">
                                                        <Image
                                                            src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide5/أطفال-تفكر-مع-أنوس-في-الصف.png"
                                                            width={352}
                                                            height={223}
                                                            alt="image"
                                                            className="w-100 object-fit border-radius-8"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row align-items-center bottom-side mt-4">
                                                    <div className="col-6 img-side">
                                                        <Image
                                                            src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide5/أطفال-تفكر-مع-أنوس-في-الطبيعة.png"
                                                            width={352}
                                                            height={56}
                                                            alt="image"
                                                            className="w-100 object-fit border-radius-8"
                                                        />
                                                    </div>
                                                    <div className="col-6 txt-side txt-side-bottom">
                                                        <h5>
                                                            <Image
                                                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide5/تعلم-ممتع-في-منهاج-تفكر-مع-أنوس.png"
                                                                width={228}
                                                                height={145}
                                                                alt="image"
                                                                className="w-100 h-100"
                                                            />
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
                                                <h3>منهاج متكامل لبناء شخصية طلابك يحقق لك..</h3>
                                                <h2 className="head-blue mt-3 mb-4">نقلة نوعية في سلوك الطلاب</h2>
                                                <Link href="#" className="hover-btn d-inline-flex align-items-center">
                                                    طبق في مؤسستك
                                                </Link>
                                            </div>
                                            <div className="col-12 col-lg-6 left-side">
                                                <div className="row flex-nowrap align-items-center top-side">
                                                    <div className="col-3 txt-side txt-side-right">
                                                        <h5>
                                                            <Image
                                                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide6/برنامج-تطوير-وتعزيز-انتماء-المعلمين.png"
                                                                width={352}
                                                                height={56}
                                                                alt="image"
                                                                className="w-100 h-100 object-fit border-radius-8"
                                                            />
                                                        </h5>
                                                    </div>
                                                    <div className="col-9 img-side">
                                                        <Image
                                                            src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide6/فريق-الدعم-الفني-تفكر-مع-أنوس.png"
                                                            width={352}
                                                            height={223}
                                                            alt="image"
                                                            className="w-100 object-fit border-radius-8"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="row align-items-center bottom-side mt-4">
                                                    <div className="col-6 img-side">
                                                        <Image
                                                            src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide6/معلمة-تفكر-مع-أنوس-في-الفصل.png"
                                                            width={352}
                                                            height={56}
                                                            alt="image"
                                                            className="w-100 object-fit border-radius-8"
                                                        />
                                                    </div>
                                                    <div className="col-6 txt-side txt-side-bottom">
                                                        <h5>
                                                            <Image
                                                                src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/Slide6/برنامج-تطوير-المعلين-تفكر-مع-أنوس.png"
                                                                width={228}
                                                                height={145}
                                                                alt="image"
                                                                className="w-100 h-100"
                                                            />
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
