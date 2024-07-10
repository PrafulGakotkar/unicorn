'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
}

export default function ClientSlider2() {
    return (
        <>
            <Swiper {...swiperOptions} className="theme_carousel owl-theme">
                <SwiperSlide className="clients-logo-box">
                    <Link href="/"><img src="/assets/images/resource/client-28.png" alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide className="clients-logo-box">
                    <Link href="/"><img src="/assets/images/resource/client-31.png" alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide className="clients-logo-box">
                    <Link href="/"><img src="/assets/images/resource/client-32.png" alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide className="clients-logo-box">
                    <Link href="/"><img src="/assets/images/resource/client-29.png" alt="" /></Link>
                </SwiperSlide>
                <SwiperSlide className="clients-logo-box">
                    <Link href="/"><img src="/assets/images/resource/client-28.png" alt="" /></Link>
                </SwiperSlide>
            </Swiper>
        </>
    )
}
