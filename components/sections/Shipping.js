import Link from 'next/link'
import { useState, useEffect } from 'react'
import { getUrlParams } from '@/helpers';

export default function Shipping({versionsTitles}) {
    const [urlParams, setUrlParams] = useState(null);

    useEffect(() => {
        
        const storedParams = getUrlParams();
        setUrlParams(storedParams || "");
    }, []);

    return (
        <div className='shipping-wrapper section-padding pb-5'>
            <div className='row align-items-center'>
                <div className='col-md-7 mb-5 mb-md-0'>
                    <h2 className='head-blue mb-2'>احصل على نسخة طفلك بأقل كلفة شحن!</h2>
                    <p>تواصل معنا الآن للطلب أو للحصول على المساعدة</p>
                    <div className="action-buttons mt-4 pt-3">
                        {
                            versionsTitles ? (
                                <>
                                <a target="_blank" className="hover-outlined-btn me-3" href={`#${urlParams}`}>دعنا نساعدك بالاختيار</a>
                                <a target="_blank" className="hover-btn " href={`#${urlParams}`}>
                                    <i className="fa-brands fa-whatsapp me-3"></i>
                                    اطلب الأن
                                </a>
                                </>
                            ) : (
                                <>
                                <Link className="hover-outlined-btn me-3" href="/contact-us">تواصل معنا</Link>
                                <a target="_blank" className="hover-btn " href={`#${urlParams}`}>سجل الآن</a>
                                </>
                            )
                        }
                    </div>
                </div>
                <div className='col-md-5 mt-md-0'>
                    <div className=' mt-5'>
                        <img className='w-100' src='https://d329sg0poh8k4h.cloudfront.net/tafakkur-website/versions/shipping.png' />
                    </div>
                </div>
            </div>
        </div>
    )
}


