import React, { useContext } from "react";
import s from "./Hero.module.scss";
import rating from "../../assets/toprated.svg";
import homePageContext from "../../context/home-page";

export default function HeroBanner() {
  const { hero } = useContext(homePageContext);

  return (
    <div className={s.heroBottomBanner}>
      <div className={s.btmBannerTrusted}>
        <img src={rating} alt="rating icon" />
        <div className={s.bannerText}>
          <h2>Top Rated</h2>
          <p>and trusted amongst our customers</p>
        </div>
      </div>
      <div className={s.divider}></div>
      <div className={s.companiesWrapper}>
        <div className={s.image}>
          {hero.map((item) => {
            const { id, companyImg } = item;
            return <img key={id} src={companyImg} alt="company logo" />;
          })}
        </div>
      </div>
    </div>
  );
}
