import Link from 'next/link';

export default function ApplyTafakuur({darkBtn}) {
    return (
        <>
            <section className="book-seat-section pb-0">
                <div className="container custom-container section-padding pb-100 position-relative">
                    <img className="shape right top" src="https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/contact/shape.png" alt="Shape" />
                    <div className='row align-items-center'>
                        <div className='col-md-6 wow fadeInUp' data-wow-delay=".5s">
                            <div className='content'>
                                <h2>طبق منهاج تفكر مع أنوس في مؤسستك التعليمية</h2>
                                <p>تواصل مع فريق الاعتماد لإجابة جميع استفساراتك</p>
                            </div>
                        </div>
                        <div className='col-md-6 wow fadeInUp' data-wow-delay=".5s">
                            <div className='action-buttons text-center mt-5 mt-md-0'>
                                <Link href='https://wa.link/zab3la' target='_blank' className={`${darkBtn ? "hover-btn": "hover-outlined-btn"} me-3`}>
                                    تواصل مع فريق الاعتماد
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};
