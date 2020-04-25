import React from "react";

export default function Home() {
  return (
    <section className="home-front-section">
      <div className="home-main">
        <div className="home-main-desc">
          <div className="home-main-desc-text">
            Hi! My name is
            <br /> <span>Mykola Marchuk</span>,<br /> I&apos;m an Android
            Developer
            <br /> and UI/UX Designer
            <br /> based in Rzeszów, Poland
          </div>
          <div className="learn-more-btn">
            <span className="learn-more-btn-text">Learn more</span>&nbsp;&nbsp;
            <svg
              width="24"
              height="14"
              viewBox="0 0 24 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.869 0.690002L15.808 1.751L20.308 6.251H0.75V7.751H20.308L15.808 12.251L16.869 13.312L23.18 7.002L16.869 0.692002V0.690002Z"
                fill="#4F4F4F"
              />
            </svg>
          </div>
        </div>
        <div className="home-main-image">
          <img src="../../../public/images/Group 32.png"></img>
        </div>
      </div>
      <div className="scroll-icon-block">
        <svg
          width="24"
          height="34"
          viewBox="0 0 24 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.9583 33.6667H12C18.4317 33.6667 23.6667 28.4333 23.6667 22V12C23.6667 5.59834 18.455 0.376677 12.0317 0.333344H11.9317C5.53168 0.37001 0.333344 5.59501 0.333344 12V22C0.333344 28.4333 5.54834 33.6667 11.9583 33.6667ZM3.66668 12C3.66974 9.79514 4.54527 7.68108 6.10201 6.11966C7.65874 4.55824 9.77016 3.67636 11.975 3.66668C16.5833 3.67668 20.3333 7.41501 20.3333 12V22C20.3333 26.595 16.595 30.3333 12 30.3333H11.9583C7.31001 30.3333 3.66668 26.6733 3.66668 22V12Z"
            fill="#4F4F4F"
          />
          <path
            d="M10.3333 8.66667C10.3333 7.74619 11.0795 7 12 7C12.9205 7 13.6667 7.74619 13.6667 8.66667V15.3333C13.6667 16.2538 12.9205 17 12 17C11.0795 17 10.3333 16.2538 10.3333 15.3333V8.66667Z"
            fill="#4F4F4F"
          />
        </svg>
        <p>scrolls</p>
      </div>
    </section>
  );
}
