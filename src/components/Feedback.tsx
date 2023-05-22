import Card from "./common/Card"
import FeedbackData from '../data/feedback.json'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper";

const Feedback = () => {
    return (
        <div className="w-full mt-[75px]">
            <h3 className=" [text-align-last:center] text-4xl">What Client Say</h3>
            <p className="[text-align-last:center] text-justify py-5">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics </p>

            <div className="max-w-[80%] m-auto mt-16">
                <Swiper
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    slidesPerView={2.5}
                    spaceBetween={15}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },

                        1024: {
                            slidesPerView: 2.5,
                            spaceBetween: 50,
                        },
                    }}
                    freeMode={true}
                    pagination={false}
                    modules={[FreeMode, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {FeedbackData.map((item) => {
                        return (
                            <SwiperSlide>
                                <Card name={item.name} rating={item.star.toString()} description={item.description} designation={item.designation} />
                            </SwiperSlide>

                        )
                    })}

                </Swiper>
            </div>


        </div >
    )
}

export default Feedback