import React, { useEffect, useRef } from "react";
import anime from "animejs";

const Footer = () => {
  const txt1Ref = useRef(null);
  const txt2Ref = useRef(null);

  useEffect(() => {
    const tl = anime.timeline({
      duration: 1500,
      loop: true,
      easing: "easeInOutQuad",
    });

    tl.add({
      targets: txt1Ref.current,
      opacity: [0, 1],
      translateX: [-50, 0],
      duration: 1000,
    })
      .add({
        targets: txt1Ref.current,
        opacity: [1, 0],
        translateX: [0, 50],
        duration: 1000,
        delay: 2000,
      })
      .add({
        targets: txt2Ref.current,
        opacity: [0, 1],
        translateX: [-50, 0],
        duration: 1000,
      })
      .add({
        targets: txt2Ref.current,
        opacity: [1, 0],
        translateX: [0, 50],
        duration: 1000,
        delay: 2000,
      });
  }, []);

  return (
    <div className="footer absolute bg-zinc-800 bg-opacity-50 w-full h-[10%] bottom-0 flex justify-center items-center flex-col z-10">
      <h1 className="text-white text-xl uppercase">
        Pedro Luis Tello Castillo
      </h1>
      <div className="relative h-[30px] w-full flex justify-center items-center">
        <h2
          ref={txt1Ref}
          className="absolute text-gray-300 text-base uppercase"
        >
          Game Developer
        </h2>
        <h2
          ref={txt2Ref}
          className="absolute text-gray-300 text-base uppercase"
        >
          Web Developer
        </h2>
      </div>
    </div>
  );
};

export default Footer;
