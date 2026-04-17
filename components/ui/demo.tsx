'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
 
export function SplineSceneBasic() {
  return (
    <Card className="w-full h-[500px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex h-full">
        {/* Left content */}
        <div className="flex-1 p-8 relative z-10 flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
            Spoľahlivý Elektrikár pre Poprad a Okolie
          </h1>
          <p className="mt-4 text-neutral-300 max-w-lg">
            Profesionálne elektroinštalácie, rýchle opravy porúch a revízie. Viac ako 15 rokov skúseností v regióne s garantovanou kvalitou práce.
          </p>
          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 font-semibold rounded-full bg-[#FFCF23] text-black hover:bg-[#EBB816] transition-all">
              Zavolať na poruchovú službu
            </button>
            <button className="px-6 py-3 font-semibold rounded-full border border-white/20 text-white hover:bg-white/5 transition-all">
              Nezáväzná cenová ponuka
            </button>
          </div>
        </div>

        {/* Right content */}
        <div className="flex-1 relative">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
