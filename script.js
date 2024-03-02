function locoTrigger() {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smoothMobile: true,
    smartphone: {
      smooth: true,
    },
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function videoconAnimation() {
  var videocon = document.querySelector(".videoContainer");
  var playBtn = document.querySelector(".play");
  videocon.addEventListener("mouseenter", function () {
    gsap.to(playBtn, {
      opacity: 1,
      scale: 1,
    });
  });
  videocon.addEventListener("mouseleave", function () {
    gsap.to(playBtn, {
      opacity: 0,
      scale: 0,
    });
  });
  videocon.addEventListener("mousemove", function (dets) {
    gsap.to(playBtn, {
      left: dets.x - 50,
      top: dets.y - 50,
    });
  });
}
function loadinganimation() {
  gsap.to("#page1 h1", {
    transform: "translateY(0%)",
    delay: 0.5,
    duration: 0.5,
    stagger: 0.2,
  });
}

function cursorAnimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#cursor", {
      left: dets.x,
      top: dets.y,
    });
  });

  document.querySelector("#page1").addEventListener("mousemove", function () {
    gsap.to("#cursor", {
      transform: "translate(-50%, -50%) scale(1)",
    });
  });

  document.querySelectorAll(".child").forEach(function (elem) {
    elem.addEventListener("mouseenter", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(1)",
      });
    });
    elem.addEventListener("mouseleave", function () {
      gsap.to("#cursor", {
        transform: "translate(-50%, -50%) scale(0)",
      });
    });
  });
}

function navbarAnimation() {
  gsap.to("#nav-part1 img", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
  gsap.to("#nav-part2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true,
    },
  });
}

videoconAnimation();
loadinganimation();
cursorAnimation();
locoTrigger();
navbarAnimation();
