import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-8">
            Tentang Saya
          </h2>
          <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
            <p>
              Saya termasuk orang yang sering memikirkan tentang
              banyak hal, mulai dari cara manusia bersikap, cara
              berorganisasi, masa depan, hingga hal simple
              seperti "daun kok warnanya hijau ya?".
            </p>
            <p>
              Terkadang{" "}
              <strong className="text-zinc-200">
                overthinker
              </strong>{" "}
              itu "saya", tapi justru dari situ saya menjadi
              mempunyai rasa penasaran yang tinggi dan tertarik
              mengulik sesuatu lebih dalam.
            </p>
            <p>
              Saya lebih menyukai metode belajar{" "}
              <strong className="text-zinc-200">
                berbasis praktik
              </strong>{" "}
              dibandingkan hanya mempelajari teori. Ketika menghadapi hal baru, saya cenderung langsung mencoba dan mempelajarinya secara bertahap agar lebih mudah dipahami. Saya juga lebih nyaman dengan proses pembelajaran yang interaktif dan aplikatif karena membantu saya tetap fokus dan lebih cepat berkembang.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                Domisili
              </h3>
              <p className="text-zinc-200">Indonesia</p>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-zinc-500 uppercase tracking-wider mb-2">
                Karakter
              </h3>
              <p className="text-zinc-200">
                Observatif, Loyal, Reflektif
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-3xl overflow-hidden relative group">
            <div className="absolute inset-0 bg-indigo-500/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-all duration-500" />
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1500389723459-ca24a5564899?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaWxob3VldHRlJTIwcGVyc29uJTIwdGhpbmtpbmclMjBkYXJrJTIwYWVzdGhldGljfGVufDF8fHx8MTc3ODg0NjE5OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Silhouette thinking"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-zinc-800 p-6 rounded-2xl border border-zinc-700 max-w-[240px]">
            <p className="text-sm text-zinc-300 italic">
              "Kadang obrolan sederhana bisa bikin mikir
              panjang."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}