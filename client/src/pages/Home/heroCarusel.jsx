import React, { useEffect, useState } from 'react';
import './home.scss';

const heroData = [
  {
    title: "Ishonch va sifat – Klinikamizning asosiy tamoyillari!",
    subtitle: "Klinikamizda ishonch va sifat har doim eng yuqori darajada saqlanadi. Bizning professional jamoamiz soha bo'yicha eng yaxshi malaka va bilimlarga ega bo'lib, ular bemorlarimizga eng sifatli tibbiy parvarishni ta'minlash uchun doimo sa'y-harakat qiladi. Bizning asosiy maqsadimiz – sizning sog'lig'ingiz va farovonligingizni ta'minlash.",
    imageUrl: "/images/fon1.webp",
    textAlign: "left"
  },
  {
    title: "Sog‘lig‘ingiz uchun har kuni professional yondashuv!",
    subtitle: "Klinikamizda har bir bemor bilan shaxsiy va professional yondashiladi. Bizning tajribali doktorlarimiz har bir holatni diqqat bilan ko'rib chiqishadi va har bir bemorga individual reja asosida davolanishni taklif etishadi. Sog'lig'ingiz biz uchun eng muhimdir, shuning uchun sizga har kuni eng yaxshi parvarish va e'tiborni ta'minlaymiz.",
    imageUrl: "/images/fon2.webp",
    textAlign: "right"
  },
  {
    title: "Biz bilan sog‘lig‘ingiz xavfsiz qo‘llarda!",
    subtitle: "Sizning xavfsizligingiz va qulayligingiz biz uchun ustuvor vazifa hisoblanadi. Klinikamizda zamonaviy diagnostika va davolash usullari bilan jihozlangan, ishonchli va xavfsiz muhit yaratilgan. Bemorlarimiz bizga o'z sog'lig'ini ishonib topshirishlari mumkin, chunki biz ularga faqat eng yaxshi va eng xavfsiz tibbiy xizmatlarni taqdim etamiz.",
    imageUrl: "/images/fon3.webp",
    textAlign: "center"
  }
];

function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % heroData.length;
    setCurrentIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = (currentIndex - 1 + heroData.length) % heroData.length;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="home__carousel" style={{ backgroundImage: `url(${heroData[currentIndex].imageUrl})` }}>
      <div className={`home__content ${heroData[currentIndex].textAlign}`}>
        <h1>{heroData[currentIndex].title}</h1>
        <p>{heroData[currentIndex].subtitle}</p>
      </div>
      <button className="left-arrow" onClick={prevSlide}>&lsaquo;</button>
      <button className="right-arrow" onClick={nextSlide}>&rsaquo;</button>
    </div>
  );
}

export default HeroCarousel;
