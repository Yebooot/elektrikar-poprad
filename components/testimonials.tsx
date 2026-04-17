"use client";

import { useState } from "react";
import { TestimonialCard } from "./ui/testimonial-cards";

const testimonials = [
  {
    id: 1,
    testimonial: "Ján nám kompletne prerobil elektroinštaláciu v starom dome. Profesionálny prístup a všetko funguje ako hodinky. Odporúčam!",
    author: "Martin K. - Majiteľ domu"
  },
  {
    id: 2,
    testimonial: "Volal som ho o druhej ráno, lebo nám vyhadzovalo poistky a nešiel kotol. Prišiel do pol hodiny a poruchu okamžite opravil.",
    author: "Peter S. - Manažér reštaurácie"
  },
  {
    id: 3,
    testimonial: "Spoľahlivý, dochvíľny a veľmi šikovný elektrikár. Vybavil aj všetky potrebné revízne správy a papierovačky. Veľká vďaka.",
    author: "Lucia M. - Riaditeľka školy"
  }
];

export function TestimonialsSection() {
  const [positions, setPositions] = useState<("front" | "middle" | "back")[]>(["front", "middle", "back"]);

  const handleShuffle = () => {
    const newPositions = [...positions];
    const lastElement = newPositions.pop();
    if (lastElement) {
        newPositions.unshift(lastElement);
    }
    setPositions(newPositions as ("front" | "middle" | "back")[]);
  };

  return (
    <section id="referencie" className="py-24 bg-[#0d0d0d] border-t border-[#2a2a2a]">
      <div className="w-full max-w-[1200px] mx-auto px-6 overflow-hidden">
        <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-3">Naše Referencie</h2>
            <p className="text-[#9ca3af] text-base max-w-[500px] mx-auto">
              Prečítajte si, čo hovoria naši zákazníci. Pravidelne zabezpečujeme elektroinštalácie a opravy pre jednotlivcov aj firmy. <br/> <strong className="mt-2 block text-xs underline decoration-[#FFCF23] underline-offset-4">(Potiahnite kartičku pre ďalšiu recenziu)</strong>
            </p>
        </div>

        <div className="grid place-content-center h-[500px]">
          <div className="relative -ml-[100px] h-[450px] w-[300px] md:w-[350px] md:-ml-[175px]">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                {...testimonial}
                handleShuffle={handleShuffle}
                position={positions[index]}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
