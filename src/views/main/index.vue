<template>
  <div class="main-content">
    <section class="video-section">
      <div class="video-container">
        <video :src="flower" autoplay muted loop></video>
      </div>
      <div class="img-container">
        <img :src="windowPng" class="img" />
      </div>
      <div class="text-content">
        <div class="img_txt">
          <div class="title sm left">
            <span>between</span>
          </div>
          <div class="title bg left">
            <span>Reality</span>
          </div>
          <div class="title bg right n">
            <span>&</span>
          </div>
          <div class="title bg right">
            <span>Dream</span>
          </div>
        </div>
        <p class="txt-bottom">shots that will change your mind</p>
      </div>
      <div class="v_container">
        <div class="left-side">
          <div class="tv">
            <div class="bg">push</div>
            <div class="sm">the</div>
            <div class="bg bottom">envelope</div>
          </div>
          <div class="text-container">
            <p>
              Photography has become a big part of almost every element of our
              lives.
            </p>
            <p>
              It become widespread and diverse but we know that this is still a
              real form of art and magic.
            </p>
          </div>
        </div>
        <div class="right-side">
          <p>explore works <Right class="fa-arrow-right-long" /></p>
        </div>
      </div>
    </section>
    <section class="section">
      <div class="boxes-container">
        <div class="columns box1">
          <div class="col col-1">
            <img :src="bg1" />
            <img :src="bg2" />
          </div>
          <div class="col-2">
            <h1>Carolina</h1>
            <span>28 october 2025</span>
            <div class="line"></div>
            <div class="text-box">
              <p>
                This series is excellently showing that ordinary portrait
                photography still can be inspiring for you.
              </p>
              <p>
                Check the shots of beautiful Caroline in hat with red and green
                lights.
              </p>
            </div>
          </div>
          <div class="col col-3">
            <img :src="bg3" />
            <img :src="bg4" />
            <img :src="bg5" />
          </div>
        </div>
        <div class="columns box2">
          <div class="col col-1">
            <img :src="p1" />
            <img :src="p2" />
          </div>
          <div class="col-2">
            <h1>soul dance</h1>
            <span>17 september 2024</span>
            <div class="line"></div>
            <div class="text-box">
              <p>
                Beautiful dance of Hanna in neon ligths with retro effect. Pink
                lights, pretty women and sensuality.
              </p>
              <p>Inspiring vibes and invisible beautiful soul on this shots.</p>
            </div>
          </div>
          <div class="col col-3">
            <img :src="p3" />
            <img :src="p4" />
            <img :src="p5" />
          </div>
        </div>
        <div class="columns box3">
          <div class="col col-1">
            <img :src="b1" />
            <img :src="b2" />
            <img :src="b3" />
            <img :src="b4" />
          </div>
          <div class="col-2">
            <h1>80's vibes</h1>
            <span>1 september 2024</span>
            <div class="line"></div>
            <div class="text-box">
              <p>
                Retro nostagia can be sweet and sour at the same time. Christina
                helped us to make photos, that will give you this feelings.
              </p>
              <p>
                Drop in past times with this collection of 80's styled photos.
              </p>
            </div>
          </div>
          <div class="col col-3">
            <img :src="b5" />
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import flower from "@/assets/video/flower.mp4";
import windowPng from "@/assets/images/window.png";
import bg1 from "@/assets/images/1.jpeg";
import bg2 from "@/assets/images/2.jpeg";
import bg3 from "@/assets/images/3.webp";
import bg4 from "@/assets/images/4.jpeg";
import bg5 from "@/assets/images/5.jpeg";
import b1 from "@/assets/images/b1.jpeg";
import b2 from "@/assets/images/b2.webp";
import b3 from "@/assets/images/b3.jpeg";
import b4 from "@/assets/images/b4.jpeg";
import b5 from "@/assets/images/b5.webp";
import p1 from "@/assets/images/p1.jpeg";
import p2 from "@/assets/images/p2.webp";
import p3 from "@/assets/images/p3.jpeg";
import p4 from "@/assets/images/p4.jpeg";
import p5 from "@/assets/images/p5.jpeg";

import { onMounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  ScrollTrigger.defaults({
    toggleActions: "play none none reverse",
  });

  gsap.to(".img-container", {
    scale: 52,
    ease: "ease",
    scrollTrigger: {
      trigger: ".video-section",
      scrub: 1,
      start: "top top",
      end: "bottom",
      pin: true,
    },
  });

  gsap.to(".right", {
    autoAlpha: 0,
    x: 500,
    duration: 1.5,
    scrollTrigger: {
      start: 1,
    },
  });

  gsap.to(".left", {
    autoAlpha: 0,
    x: -500,
    duration: 1.5,
    scrollTrigger: {
      start: 1,
    },
  });

  gsap.to(".txt-bottom", {
    autoAlpha: 0,
    letterSpacing: -10,
    duration: 2,
    scrollTrigger: {
      start: 2,
    },
  });

  const tl = gsap.timeline();

  tl.from(".left-side div", {
    y: 150,
    opacity: 0,
    stagger: {
      amount: 0.4,
    },
    delay: 0.5,
  })
    .from(".right-side", { opacity: 0, duration: 2 }, 0.5)
    .to(".main-content", { x: -window.innerWidth });

  ScrollTrigger.create({
    animation: tl,
    trigger: ".main-content",
    start: "top top",
    end: "+=600",
    scrub: 1,
    pin: true,
    snap: {
      ease: "ease",
    },
  });

  gsap.utils.toArray(".col").forEach((image: any) => {
    gsap.fromTo(
      image,
      {
        opacity: 0.3,
        x: 0,
      },
      {
        opacity: 1,
        x: -50,
        scrollTrigger: {
          trigger: image,
          start: "10%",
        },
        stagger: {
          amount: 0.4,
        },
      }
    );
  });

  const timeline = gsap.timeline();

  timeline
    .from(".title span", {
      y: 150,
      skewY: 7,
      duration: 3,
    })
    .from(".txt-bottom", {
      letterSpacing: -10,
      opacity: 0,
      duration: 3,
    });
});
</script>

<style lang="less" scoped>
.main-content {
  color: #fff;
  background-color: #141414;
  display: flex;

  img {
    display: inline-block;
  }

  section {
    width: 100vw;
    flex-shrink: 0;
    overflow: hidden;
  }

  .video-section {
    .video-container {
      position: relative;
      z-index: -2;
      video {
        width: 100vw;
        height: 100vh;
        object-fit: cover;
      }
    }

    .img-container {
      position: absolute;
      top: 0;
      height: 100vh;
      width: 100vw;

      .img {
        object-fit: cover;
        height: 100%;
        width: 100%;
      }
    }

    .text-content {
      position: absolute;
      top: 0;
      height: 100vh;
      width: 100vw;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      p {
        transform: translateY(150px);
        text-transform: uppercase;
        font-size: 12px;
        letter-spacing: 12px;
        font-weight: 300;
      }
    }

    .title {
      width: 450px;
      position: relative;
      height: 130px;
      overflow: hidden;

      span {
        position: absolute;
      }
    }

    .bg {
      font-size: 100px;
    }

    .sm {
      font-size: 35px;
      height: 40px;
    }

    .left {
      left: -25%;
    }

    .right {
      top: 50px;
      left: 75%;
    }

    .n {
      z-index: -1;
    }

    .v_container {
      position: absolute;
      top: 0;
      height: 100vh;
      width: 100vw;
      display: grid;
      grid-template-columns: 2fr 1fr;
    }

    .left-side {
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 4rem;
      gap: 5rem;
    }

    .tv {
      display: flex;
      text-transform: capitalize;
    }

    .bottom {
      transform: translateY(70px);
    }

    .text-container {
      max-width: 280px;
      p {
        padding-bottom: 1rem;
        line-height: 1.4;
        opacity: 0.8;
      }
    }

    .right-side {
      margin: auto;
      width: 150px;
      height: 150px;
      border-top: 2px solid;
      border-bottom: 2px solid;
      border-color: rgba(255, 255, 255, 0.6);
      border-radius: 50%;
      position: relative;

      p {
        position: absolute;
        top: 45%;
        left: -15%;
        text-transform: uppercase;
        font-size: 14px;
      }
    }

    .fa-arrow-right-long {
      transform: translateX(20px);
      height: 14px;
      display: inline-block;
    }
  }

  .section {
    background-color: #141414;
    padding: 7rem;

    .boxes-container {
      display: flex;
      flex-direction: column;
      gap: 8rem;

      .columns {
        display: flex;
        gap: 1.5rem;
        position: relative;

        .line {
          height: 1px;
          width: 50px;
          background-color: rgba(255, 255, 255, 0.1);
          margin: 2rem 0;
        }

        .text-box {
          p {
            font-size: 12px;
            line-height: 1.9;
            padding-bottom: 1rem;
            opacity: 0.7;
          }
        }

        .col {
          img {
            object-fit: cover;
          }
        }

        .col-1 {
          display: flex;
          gap: 1.5rem;
          flex: 5;
        }

        .col-2 {
          margin: auto;
          flex: 1.5;

          h1 {
            font-size: 100px;
            text-transform: capitalize;
            position: absolute;
            top: 20px;
            left: 47%;
            z-index: 100;
          }

          span {
            font-size: 8px;
            text-transform: uppercase;
            letter-spacing: 3px;
            opacity: 0.7;
          }
        }

        .col-3 {
          display: flex;
          justify-content: center;
          gap: 2.5rem;
          flex-wrap: wrap;
          flex: 4;
        }
      }

      .box1 {
        .col-1 {
          img:first-child {
            width: 150px;
            height: 180px;
            transform: translateY(-30px);
          }

          img:nth-child(2) {
            width: 380px;
            height: 430px;
          }
        }

        .col-2 {
          h1 {
            top: -50px;
          }
        }

        .col-3 {
          img:first-child {
            width: 320px;
            height: 170px;
          }

          img:nth-child(2) {
            width: 150px;
          }

          img:nth-child(3) {
            width: 200px;
            height: 200px;
          }
        }
      }

      .box2 {
        .col-1 {
          img:first-child {
            width: 200px;
            height: 250px;
            transform: translateY(200px);
          }

          img:nth-child(2) {
            width: 300px;
            height: 380px;
          }
        }

        .col-3 {
          img:nth-child(1) {
            height: 300px;
            width: 220px;
          }

          img:nth-child(2) {
            width: 180px;
            height: 200px;
            align-self: flex-end;
          }

          img:nth-child(3) {
            width: 380px;
            height: 200px;
            transform: translateX(80px);
          }
        }
      }

      .box3 {
        .col-1 {
          display: flex;
          flex-wrap: wrap;

          img:nth-child(1) {
            width: 200px;
            height: 280px;
            transform: translateX(30px);
          }

          img:nth-child(2) {
            width: 180px;
            height: 200px;
            margin-left: 80px;
            align-self: center;
          }

          img:nth-child(3) {
            width: 280px;
            height: 180px;
          }

          img:nth-child(4) {
            width: 250px;
            height: 180px;
            transform: translateY(-30px);
          }
        }

        .col-3 {
          img {
            width: 400px;
            height: auto;
          }
        }
      }
    }
  }
}
</style>
