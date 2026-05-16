import { motion } from "motion/react";
import { Rocket } from "lucide-react";

export function Vision() {
  return (
    <section className="py-32 px-6 md:px-12 lg:px-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-64 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-zinc-900 border border-zinc-800 mb-8 shadow-xl shadow-indigo-500/10">
            <Rocket className="w-8 h-8 text-indigo-400" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-100 mb-8 leading-tight">
            Menjadi pribadi yang kreatif, adaptif, dan mampu berkembang di era digital.
          </h2>
          
          <p className="text-xl text-zinc-400 mb-12 leading-relaxed">
            Saya ingin memanfaatkan kemampuan visual, komunikasi, serta teknologi untuk menciptakan sesuatu yang bermanfaat. Selain memahami teknologi, saya juga ingin <span className="text-zinc-200">memahami manusia.</span>
          </p>

          <div className="p-8 md:p-12 rounded-3xl bg-zinc-900/50 border border-zinc-800/80 backdrop-blur-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-indigo-500" />
            <blockquote className="text-2xl md:text-3xl text-zinc-200 font-medium italic mb-6">
              "Proses kecil yang dilakukan secara konsisten dapat membawa perubahan besar di masa depan."
            </blockquote>
            <p className="text-zinc-500 uppercase tracking-widest text-sm font-semibold">
              Terus berkembang 🚀
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
