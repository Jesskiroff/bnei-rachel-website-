import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './HeroSlider.css';

// Import your images here
// import photo1 from './assets/farmPic.jpeg';
import photo2 from './assets/bry_w_wall.jpeg';
import photo3 from './assets/kidsMatzahBaking.jpeg';
import photo4 from './assets/rabbiMatzahBaking.jpeg';
import photo5 from './assets/rabbiClass.jpeg';
import photo6 from './assets/kids_israeli_flags.jpeg';
import photo7 from './assets/twoBoys.jpeg';
import photo8 from './assets/visitorPic.jpeg';




const images = [photo2, photo3, photo4, photo5, photo6, photo7, photo8];

function HeroSlider() {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        loop={true}
        speed={1000}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <img src={img} alt={`slide-${index}`} className="slide-image" />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Optional text overlay like "Feel at home" */}
      <div className="hero-text">
        
      </div>
    </div>
  );
}

export default HeroSlider;