import MagicButton from './ui/MagicButton'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/text-generate-effect'

const Hero = () => {
  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="h-[80vh] w-[50vw] top-10 left-full"
          fill="purple"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
      </div>

      <div className="h-screen w-full bg-black-100 bg-dot-white/[0.3]
      flex items-center justify-center absolute top-0 left-0">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center
      bg-black-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
    </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw]
          flex flex-col items-center justify-center'>
          <h2 className='uppercase tracking-widest
            text-center text-xs text-blue-100 max-w-80'>
              Das effektivste Ikigai Coaching in Deutschland
          </h2>

          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl
            lg:text-6xl dark'
            duration={1}
            words='Entfalte dein Potential mit Arsensus Coaching'
          />
          <a href='/buchen'>
            <MagicButton
              title="Jetzt kostenloses Erstgespräch buchen"
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero