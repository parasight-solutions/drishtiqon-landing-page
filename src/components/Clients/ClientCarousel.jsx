
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "./Clients.css";


import "swiper/css";

const clients = [
  {
    id: 1,
    name: "Client 1",
    logo: "/clients/clientOne.png",
  },
  {
    id: 2,
    name: "Client 2",
    logo: "clients/clientF.png",
  },
  {
    id: 3,
    name: "Client 3",
    logo: "clients/clientfive.png",
  },
  {
    id: 4,
    name: "Client 4",
    logo: "clients/clientN.png",
  },
  {
    id: 5,
    name: "Client 5",
    logo: "clients/clientS.png",
  },
  {
    id: 6,
    name: "Client 5",
    logo: "clients/clientT.png",
  },
  {
    id: 7,
    name: "Client 5",
    logo: "clients/clientten.png",
  },
  {
    id: 8,
    name: "Client 5",
    logo: "clients/clientTwo.png",
  },
];

export default function ClientCarousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      spaceBetween={30}
      loop
      speed={5000}
      autoplay={{
        delay: 0,
        disableOnInteraction: false,
      }}
      breakpoints={{
    0: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 6,
    },
    1024: {
      slidesPerView: 7,
    },
  }}
    >
      {clients.map((client) => (
        <SwiperSlide key={client.id}>
          <div className="client-card">
            <img
              src={client.logo}
              alt={client.name}
              
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}