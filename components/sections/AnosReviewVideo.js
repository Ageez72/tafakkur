import VideoPopup from "../elements/VideoPopup";
import { getYouTubeVideoID } from "@/helpers";

export default function AnosReviewVideo({ data }) {    
    return (
        <div className="effects-results anos-review-video section-padding">
            <div className="shape top container w-100 center p-0">
                <img src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/contact/shape.png" alt="shape" />
            </div>
            <div className="overlay"></div>
            <div className="container custom-container content text-center position-relative">
                <h2>نشرك الأهل في العملية التعليمية بمنهجية مدروسة وممتعة</h2>
                <p> رضا عالي من أهالي الطلاب عن النتائج بفضل الله</p>
                <div>
                    <VideoPopup color={"fff"} style={3} videoId={data && data[2]?.video && getYouTubeVideoID(data[2].video)} />
                    <p className="d-inline-block ms-3">شاهد الفيديو</p>
                </div>
            </div>
        </div>
    )
}
