import './App.css'
import { gsap } from "gsap"
import { useGSAP } from '@gsap/react'
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(ScrollTrigger)

function App() {

  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1, yoyo: true });
  const scrollRef = useRef();

  useGSAP(() => {
    //gsap.to method
    gsap.to('.green', {
      x: 250,
      repeat: -1,
      yoyo: true,
      rotation: 50,
      duration: 2,
      ease: 'elastic'
    })

    //gsap.from method
    gsap.from('.blue', {
      x: 120,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      rotation: 360,
      duration: 2
    })

    //gsap.fromTo method
    gsap.fromTo('.purple', {
      x: 0,
      rotation: 0,
      borderRadius: '0%',
    },
      {
        x: 500,
        rotation: 360,
        borderRadius: '100%',
        repeat: -1,
        yoyo: true,
        ease: 'bounce.Out',
        duration: 2
      })

    //gsap.timeline method
    tl.to('.indigo', {
      x: 250,
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      ease: 'back.inOut'
    })

    tl.to('.indigo', {
      y: 150,
      scale: 1,
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      ease: 'back.inOut'
    })

    tl.to('.indigo', {
      x: 500,
      scale: 1.2,
      rotation: 360,
      borderRadius: '20%',
      duration: 2,
      ease: 'back.inOut'
    })

    //gsap.stagger method
    gsap.to('.stagger-box', {
      y: 250,
      repeat: -1,
      yoyo: true,
      rotation: 360,
      borderRadius: '100%',
      duration: 2,
      // stagger: 0.5
      stagger: {
        amount: 1.5,
        grid: [2, 1],
        axis: 'y',
        ease: 'circ.inOut',
        from: 'center',
      }
    })

    //ScrollTrigger
    const boxes = gsap.utils.toArray(scrollRef.current.children);
    boxes.forEach((box) => {
      gsap.to(box, {
        x: 150 * (boxes.indexOf(box) + 5),
        rotation: 360,
        borderRadius: '100%',
        scale: 1.5,
        scrollTrigger: {
          trigger: box,
          start: 'bottom bottom',
          end: 'top 20%',
          scrub: true,
        },
        ease: 'power1.inOut'
      })
    })

    //GsapText
    gsap.to('.text', {
      ease: 'power1.inOut',
      opacity: 1,
      y: 0,

    })

    gsap.fromTo('.para', {
      opacity: 0,
      y: 20,
    }, {
      opacity: 1,
      y: 0,
      delay: 1,
      stagger: 0.1
    })
  }, []);


  return (
    <>
      {/* ---------- GsapText method----------- */}
      <h1 className='mt-10 mb-10 pl-10 pr-10 text-white opacity-0 translate-y-10 text'>React + GSAP Demo</h1>
      <div className=" text-white text-justify pl-10 pr-10">
        <p className='para'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Nobis sit corporis quae aliquam aspernatur voluptatem, odit perferendis blanditiis,
          eveniet praesentium quisquam. Odio sit eligendi tempore facilis corrupti rem mollitia commodi.
        </p>
        <p className='para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptatem esse explicabo
          totam non autem at porro? Vel, consequuntur saepe, asperiores ab reprehenderit qui placeat
          sunt possimus cumque voluptate nihil.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque facere cumque temporibus
          distinctio corporis hic aspernatur ipsa enim a explicabo, quis numquam dignissimos dolores
          architecto asperiores, voluptatem tempore voluptates!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita quod adipisci,
          qui incidunt perferendis maxime, harum iste consequatur repellat, fugit officiis possimus.
          Ea dolore maxime molestiae iure, provident consequatur.
        </p>
        <p className='para'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, voluptatem esse explicabo
          totam non autem at porro? Vel, consequuntur saepe, asperiores ab reprehenderit qui placeat
          sunt possimus cumque voluptate nihil.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo atque facere cumque temporibus
          distinctio corporis hic aspernatur ipsa enim a explicabo, quis numquam dignissimos dolores
          architecto asperiores, voluptatem tempore voluptates!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique expedita quod adipisci,
          qui incidunt perferendis maxime, harum iste consequatur repellat, fugit officiis possimus.
          Ea dolore maxime molestiae iure, provident consequatur.
        </p>
      </div>

      {/* ---------- to method----------- */}
      <div className="box gradient-green green"></div>
      {/* ---------- fromTo method----------- */}
      <div className="box gradient-purple purple"></div>
      {/* ---------- from method----------- */}
      <div className="box gradient-blue blue"></div>
      {/* ---------- timeline method----------- */}
      <button onClick={() => {
        if (tl.paused()) {
          tl.play();
        } else {
          tl.pause();
        }
      }}>
        Play/Pause
      </button>
      <div className="box bg-indigo-600 indigo"></div>

      {/* ---------- stagger method----------- */}
      <div className='mt-50 mb-80'>
        <div className="flex gap-5">
          <div className="w-20 h-20 bg-teal-200 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-teal-300 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-teal-400 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-teal-500 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-teal-600 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-teal-700 rounded-lg stagger-box"></div>
          <div className="w-20 h-20 bg-teal-800 rounded-lg stagger-box"></div>
        </div>
      </div>

      {/* ---------- ScrollTrigger method----------- */}
      <div className="mt-20 w-full h-screen" ref={scrollRef}>
        <div id='scroll-pink' className="scroll-box w-20 h-20 rounded-lg bg-pink-500"></div>
        <div id='scroll-orange' className="scroll-box w-20 h-20 rounded-lg bg-orange-500"></div>
      </div>
    </>
  )
}

export default App
