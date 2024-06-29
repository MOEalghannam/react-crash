import React from 'react'
import Card from './Card'
import SlidingCards from './SlidingCards';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faSnapchat, faTiktok, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
const HomeCards = () => {
  return (
    <>
      {/* <!-- Developers and Employers --> */}
      <section className="py-4" dir='rtl'>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
          <Card>
              <h2 className='text-2xl font-bold m-3'>من نحن؟</h2>
              <p>عالم المحاكاة عبارة عن مؤسسة تجارية مختصّة بتقديم خدمات ترفيهية بجاهزية عالية المستوى وبتقنيات متقدمة ومتطورة كتقنية المحاكاة والواقع الافتراضي والواقع المعزز داخل بيئة امنه وصحية.</p>
            </Card>
            <Card>
              <h2 className='text-2xl font-bold m-3'>خبرتنا</h2>
              <p>
                في عالم المحاكاة لدينا قرابة الخمس سنوات من الخبرة في مجال تقنية الألعاب بإعتبارنا من اوائل المختصين بأجهزة والعاب المحاكاة والواقع الإفتراضي و الواقع المعزز في المملكة العربية السعودية.
              </p>
            </Card>
            <SlidingCards/>
            
            <Card>
                <h2 className="text-2xl font-bold m-3">موقعنا</h2>
                <div className='rounded-lg'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3583.773446226914!2d44.024553299999994!3d26.073659500000012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1581edcf6592f0d5%3A0xeea9c87a98c186ad!2z2LfYsdmK2YIg2KfZhNiq2K3Yr9mKQ2hhbGxlbmdlIHdheSAo2YUu2LnYp9mE2YUg2KfZhNmF2K3Yp9mD2KfYqSk!5e0!3m2!1sen!2ssa!4v1719502203580!5m2!1sen!2ssa" width="100%" height="50%" style={{border: 0}}  loading="lazy" ></iframe>
                </div>
            </Card>
            <Card>
              <h2 className="text-2xl font-bold">حسابتنا</h2>
              <a
                target="_blank"
                href="https://www.tiktok.com/@simwoorld?_t=8nYFBYCIJtv&_r=1"
                className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 m-1 "
              >
                <FontAwesomeIcon icon={faTiktok} />
              </a>
              <a
                target="_blank"
                href="https://www.snapchat.com/add/sw.vr1"
                className="inline-block bg-yellow-500 text-white rounded-lg px-4 py-2 hover:bg-yellow-600 m-1"
              >
                <FontAwesomeIcon icon={faSnapchat} />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/Challenge.way"
                className="inline-block bg-red-500 text-white rounded-lg px-4 py-2 hover:bg-red-600 m-1"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a
                target="_blank"
                href="https://api.whatsapp.com/send/?phone=966506621778"
                className="inline-block bg-green-500 text-white rounded-lg px-4 py-2 hover:bg-green-600 m-1"
              >
                <FontAwesomeIcon icon={faWhatsapp} />
              </a>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomeCards