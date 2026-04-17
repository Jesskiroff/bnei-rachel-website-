import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import './HeroSlider.css';

// Import your images here
import photo1 from './assets/farmPic.jpeg';
import photo2 from './assets/hachnasatSeferTorah.jpeg';
import photo3 from './assets/kidsMatzahBaking.jpeg';
import photo4 from './assets/rabbiMatzahBaking.jpeg';
import photo5 from './assets/rabbiClass.jpeg';


const images = [photo1, photo2, photo3, photo4, photo5];

function HeroSlider() {
  return (
    <div className="hero-slider">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
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