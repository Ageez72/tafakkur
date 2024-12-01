import Link from "next/link"

export default function SupervisoryCommittee() {
    return (
        <section className="supervisory-committee">
            <div className="container section-padding position-relative">
                <img className="shape top right" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/contact/shape.png" alt="shape" />
                <h2 className="head-blue text-center mb-2">لجنة الإشراف الشرعي والتربوي </h2>
                <p className="text-center">نخبة من العلماء والمختصين</p>
                <div className="row">
                    <div className="col-12 col-md-6 equal-width-div text-center mt-5">
                        <div className="person-img">
                            <img src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/person1.png" alt="Person" />
                        </div>
                        <div className="content mt-3">
                            <h3 className="person-name">أ.د. محمد نبيل العمري</h3>
                            <p className="person-desc">دكتوراة في العقيدة والفلسفة</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 equal-width-div text-center mt-5">
                        <div className="person-img">
                            <img src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/person2.png" alt="Person" />
                        </div>
                        <div className="content mt-3">
                            <h3 className="person-name">معالي أ.د. بسام العموش</h3>
                            <p className="person-desc">دكتوراة في العقيدة والمذاهب
                                المعاصرة</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 equal-width-div text-center mt-5">
                        <div className="person-img">
                            <img src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/person3.png" alt="Person" />
                        </div>
                        <div className="content mt-3">
                            <h3 className="person-name">أ.د. فتحي جروان</h3>
                            <p className="person-desc">دكتوراة في علم النفس التربوي /
                                تعليم الموهوبين</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 equal-width-div text-center mt-5">
                        <div className="person-img">
                            <img src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/person4.png" alt="Person" />
                        </div>
                        <div className="content mt-3">
                            <h3 className="person-name">د. محمد بكر نوفل</h3>
                            <p className="person-desc">دكتوراة في علم النفس التربوي/
                                تعلم وتعليم</p>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 equal-width-div text-center mt-5">
                        <div className="person-img">
                            <img src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/anos/person5.jpeg" alt="Person" />
                            {/* <img src="/assets/img/anos/person5.jpeg" alt="Person" /> */}
                        </div>
                        <div className="content mt-3">
                            <h3 className="person-name">د. عبدالسلام فندي</h3>
                            <p className="person-desc">
                                دكتوراة في الحديث الشريف وعلومه
                                </p>
                        </div>
                    </div>
                </div>
                <h2 className="mt-5 pb-4">
                    {/* <Link href="/ministerial-supervision-licenses" className="supervisory-details">
                        <span>
                        اطلع إلى تفاصيل الإشراف والتراخيص الوزارية
                        </span>
                        <i className="fa-solid fa-arrow-left ms-2"></i>
                    </Link> */}
                </h2>
            </div>
        </section>
    )
}
