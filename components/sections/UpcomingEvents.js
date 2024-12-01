import { useState, useEffect } from 'react'
import ImageSlider from "../slider/ImagesSlider";
const imageArr = ["https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/publishers/image1.jpg", "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/publishers/image2.jpg", "https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/publishers/image3.jpg"]
import { getUrlParams } from '@/helpers';

export default function UpcomingEvents({ data }) {
    const [urlParams, setUrlParams] = useState("");

    useEffect(() => {
        
        const storedParams = getUrlParams();
        setUrlParams(storedParams || "");
    }, []);

    return (
        <div className="upcoming-events-wrapper push-to-top">
            <div className="upcoming-events-bg">
                <div className="container custom-container">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-6 content">
                            <i className="fa-regular fa-calendar calendar"></i>
                            <h2 className="head-blue mt-4 mb-4">معارض كتاب قادمة يشارك بها تفكر ناشرون</h2>
                            <div dangerouslySetInnerHTML={{ __html: data }} />
                            <a href={`#${urlParams}`} className="mt-4 d-block inform-btn">أعلمني عند توفر الإصدارات في  معارض الكتاب <i className="fa-solid fa-arrow-left ms-2"></i></a>
                        </div>
                        <div className="col-12 col-md-6 slider-side p-0">
                            <div className="col-12 col-md-6 position-relative w-100 h-100">
                                <img className="shape" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/versions/shape.png" alt="sahpe" />
                                <ImageSlider images={imageArr} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
