import { motion } from "motion/react";
import { ArrowDown, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center relative px-6 md:px-12 lg:px-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl"
      >
        <div className="flex items-center gap-2 mb-6 text-zinc-400">
          <Sparkles className="w-5 h-5 text-indigo-400" />
          <span className="text-sm font-medium tracking-wider uppercase">Pelajar • Kreatif • Reflektif</span>
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zinc-100 leading-tight mb-8">
          Halo, saya <span className="text-indigo-400">Kersna Maulana.</span>
          <br />
          Tertarik untuk <span className="italic text-zinc-500">eksplorasi</span> banyak hal.
        </h1>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl leading-relaxed">
          Saya merupakan seorang pelajar yang memiliki minat besar dalam mengeksplorasi berbagai hal, khususnya di bidang kreativitas, organisasi, teknologi, serta hubungan antar manusia.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12 lg:left-24 flex items-center gap-3 text-zinc-500"
      >
        <div className="w-8 h-8 rounded-full border border-zinc-700 flex items-center justify-center animate-bounce">
          <ArrowDown className="w-4 h-4" />
        </div>
        <span className="text-sm">Scroll ke bawah</span>
      </motion.div>
    </section>
  );
}
