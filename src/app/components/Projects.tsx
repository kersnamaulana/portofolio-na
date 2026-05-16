import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "UI Aplikasi di Figma",
    desc: "Membuat desain tampilan awal aplikasi, tombol interaktif, serta sistem scroll sederhana menggunakan Figma."
  },
  {
    title: "Eksplorasi Adobe Illustrator",
    desc: "Mempelajari dasar-dasar Adobe Illustrator untuk eksplorasi desain logo dan visual."
  },
  {
    title: "Penulisan Dialog",
    desc: "Membuat percakapan karakter sebagai latihan kreativitas dan komunikasi."
  },
  {
    title: "Eksplorasi Teknologi Digital",
    desc: "Mencoba berbagai aplikasi, website, dan tools digital untuk memahami fungsi serta sistem kerjanya."
  }
];

export function Projects() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-4">
            Project & Eksplorasi
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Beberapa inisiatif dan proyek eksplorasi yang telah saya kerjakan sebagai bentuk penerapan langsung dari metode belajar berbasis praktik.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((proj, index) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-zinc-900/80 border border-zinc-800 hover:border-indigo-500/50 hover:bg-zinc-800 transition-all flex flex-col h-full cursor-pointer"
            >
              <div className="flex-1">
                <h3 className="text-xl font-bold text-zinc-200 mb-4 group-hover:text-indigo-400 transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
                  {proj.desc}
                </p>
              </div>
              <div className="mt-8 flex justify-end">
                <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center group-hover:bg-indigo-500 group-hover:text-white transition-colors text-zinc-500">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
