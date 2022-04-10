import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import React, { useLayoutEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import Vector from '../Icons/Vector';

const Bounce = keyframes`
   from {  transform: translateX(-50%) scale(0.5);   }
   to {  transform: translateX(-50%) scale(1);   }
`;

const DrawSvg = () => {
   const ref = useRef(null);
   const ballRef = useRef(null);

   gsap.registerPlugin(ScrollTrigger);

   useLayoutEffect(() => {
      let element = ref.current;

      let svg = document.getElementsByClassName('svg-path')[0];

      const length = svg.getTotalLength();

      //   start positioning of svg drawing
      svg.style.strokeDasharray = length;

      // Hide svg before scrolling start
      svg.style.strokeDashoffset = length;

      let t1 = gsap.timeline({
         scrollTrigger: {
            trigger: element,
            start: 'top center',
            end: 'bottom bottom',
            onUpdate: self => {
               const draw = length * self.progress;

               // also reverse the drawing when scroll goes up
               svg.style.strokeDashoffset = length - draw;
            },
            onToggle: self => {
               if (self.isActive) {
                  // console.log("Scrolling is active");
                  ballRef.current.style.display = 'none';
               } else {
                  // console.log("Scrolling is not active");
                  ballRef.current.style.display = 'inline-block';
               }
            },
         },
      });
      // onUpdate: "Function" A function that should be called every time the animation updates (on every frame while the animation is active).

      // onToggle	Function - A callback for when the ScrollTrigger toggles from inactive to active or the other way around. This is typically when the scroll position moves past the "start" or "end" in either direction, but if it shoots past BOTH on the same tick, like if the user scrolls extremely fast, onToggle won't fire because the state hasn't changed. You can often use this one callback in the place of onEnter, onLeave, onEnterBack, and onLeaveBack by just checking the isActive property for toggling things. It receives one parameter - the ScrollTrigger instance itself which has properties/methods like progress, direction, isActive, and getVelocity(). Example:
      // onToggle: self => console.log("toggled to active:", isActive)

      return () => {
         if (t1) t1.kill();
      };
   }, []);

   return (
      <>
         <Ball ref={ballRef} />

         <VectorContainer ref={ref}>
            <Vector />
         </VectorContainer>
      </>
   );
};

export default DrawSvg;

const VectorContainer = styled.div`
   position: absolute;
   top: 0.5rem;
   left: 50%;
   transform: translateX(-50%);
   width: 100%;
   height: 100%;
   overflow: hidden;

   svg {
      display: inline-block;
      width: 100%;
      height: 100%;
   }

   @media (max-width: 48em) {
      left: 1rem;
   }
`;

const Ball = styled.div`
   position: absolute;
   top: 0;
   left: 50%;
   transform: translateX(-50%);
   width: 1.5rem;
   height: 1.5rem;
   border-radius: 50%;
   background-color: ${props => props.theme.text};
   animation: ${Bounce} 0.5s linear infinite alternate;

   @media (max-width: 48em) {
      left: 1rem;
   }
`;
