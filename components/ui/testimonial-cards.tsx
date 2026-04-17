"use client";

import * as React from 'react';
import { motion, PanInfo } from 'framer-motion';

interface TestimonialCardProps {
  handleShuffle: () => void;
  testimonial: string;
  position: "front" | "middle" | "back";
  id: number;
  imageId: number;
  author: string;
}

export function TestimonialCard({ handleShuffle, testimonial, position, id, imageId, author }: TestimonialCardProps) {
  const dragRef = React.useRef(0);
  const isFront = position === "front";

  return (
    <motion.div
      style={{
        zIndex: position === "front" ? 2 : position === "middle" ? 1 : 0
      }}
      animate={{
        rotate: position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg",
        x: position === "front" ? "0%" : position === "middle" ? "33%" : "66%"
      }}
      drag={true}
      dragElastic={0.35}
      dragListener={isFront}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
      onDragStart={(e) => {
        if ('clientX' in e) {
          dragRef.current = e.clientX as number;
        } else if ('touches' in e) {
          dragRef.current = (e as unknown as React.TouchEvent).touches[0].clientX;
        }
      }}
      onDragEnd={(e: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        let clientX = 0;
        if ('clientX' in e) {
          clientX = e.clientX as number;
        } else if ('changedTouches' in e && (e as TouchEvent).changedTouches.length > 0) {
          clientX = (e as TouchEvent).changedTouches[0].clientX;
        }
        
        if (dragRef.current - clientX > 100 || info.offset.x < -100) {
          handleShuffle();
        }
        dragRef.current = 0;
      }}
      transition={{ duration: 0.35 }}
      className={`absolute left-0 top-0 grid h-[450px] w-[300px] md:w-[350px] select-none place-content-center space-y-6 rounded-2xl border border-white/[0.05] bg-[#1e1e1e] p-6 shadow-xl backdrop-blur-md ${
        isFront ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      <img
        src={`https://i.pravatar.cc/128?img=${imageId}`}
        alt={`Avatar of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border border-white/10 bg-[#2a2a2a] object-cover"
      />
      <span className="text-center text-lg italic text-[#9ca3af]">"{testimonial}"</span>
      <span className="text-center text-sm font-medium text-[#FFCF23]">{author}</span>
    </motion.div>
  );
}
