import Link from "next/link";
import VideoPopup from "../elements/VideoPopup";
import { getYouTubeVideoID } from "@/helpers";

export default function AnosWhyApplyMenhag({data}) {
    return (
        <>
            <section className="anos-dark-bg">
                <div className="container">
                    <h2 className="text-center white-txt mb-2">
                        أصالة ومعاصرة في بناء الشخصية المتكاملة وفق أحدث نظريات الدماغ
                    </h2>
                </div>
                <h2 className="en-txt text-center white-txt">Brain based learning
                </h2>
            </section>
            <section className='anos-why-apply-menhag'>
                <div className="image-full">
                    <div className="about-tafakkur-training-bg">
                        <div className="container h-100">
                            <img src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/contact/shape.png" className="shape top right" alt="shape" />
                            <div className="row g-4 align-items-center h-100">
                                <div className="col-lg-6 mb-4">
                                    <div className="about-tafakuur-content px-0 pe-lg-5 ps-lg-4">
                                        <h2 className="head-blue mb-4 mt-4">لماذا تطبق المؤسسات التعليمية
                                            منهاج تفكر ؟</h2>
                                        <p className="about-tafakuur-desc mb-5">
                                            إن سنوات الطفولة هي السنوات الحرجة في بناء الشخصية وتشكيل العقلية الإيجابية، وتنمية مهارات <span className="purple-txt">التفكير والإبداع</span>، وتعميق <span className="purple-txt">الوعي الذاتي</span>، وإثارة المشاعر الإيجابية التي تبعث التفاؤل والثقة، وتولد السلوك الأخلاقي، <span className="purple-txt">وتنمي حب الخير في الإنسان، لنفسه وللعالم أجمع</span>.
                                        </p>
                                        <p className="about-tafakuur-desc mb-5">
                                            من أجل ذلك عملنا في تفكر لأكثر من 25 عاماً لنقدم لكم منهجية تربوية متكاملة متسلسلة عبر سنوات الطفولة، تبني الشخصيةالإبداعية الأخلاقية التي تنهض بأوطانها.
                                        </p>

                                        <div className="action-buttons d-flex align-items-center flex-wrap">
                                            <VideoPopup customClasses="hover-outlined-btn d-inline-block py-1 me-3 mt-3" videoTitleIconFirsts="fa-play" title={"شاهد الفيديو"} style={2} videoId={data && data[0]?.video && getYouTubeVideoID(data[0].video)} />
                                            <Link className="hover-btn d-inline-block py-1 mt-3" href="#">
                                                طبق في مؤسستك
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 mt-0 slider-side pe-0">
                                    <div className="about-tafakuur-image h-100 video-wrapper">
                                        <img className='w-100 h-100 object-fit' src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/video.jpg" alt='image' />
                                        <VideoPopup shapeIcon={true} style={3} videoId={data && data[0]?.video && getYouTubeVideoID(data[0].video)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
