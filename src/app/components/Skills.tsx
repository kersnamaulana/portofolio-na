import { motion } from "motion/react";

const softSkills = [
  { name: "Komunikasi", desc: "Mampu menyampaikan pendapat dan berkomunikasi dengan baik secara formal maupun nonformal." },
  { name: "Adaptasi Cepat", desc: "Mudah menyesuaikan diri dengan lingkungan serta memiliki kemauan belajar yang tinggi." },
  { name: "Kreativitas", desc: "Mampu mengembangkan ide, konsep visual, dan pendekatan kreatif." },
  { name: "Observatif", desc: "Terbiasa memperhatikan detail kecil, baik dalam perilaku manusia maupun situasi." },
  { name: "Critical Thinking", desc: "Mampu menganalisis suatu hal secara mendalam dari berbagai sudut pandang." }
];

const hardSkills = [
  { category: "Desain Dasar", items: ["Figma", "Adobe Illustrator", "Layouting sederhana", "UI dasar"] },
  { category: "Teknologi Dasar", items: ["Penggunaan digital tools", "Pengelolaan file", "Spreadsheet", "Navigasi software"] },
  { category: "Penulisan Cerita", items: ["Dialog Karakter", "Konsep percakapan kreatif"] }
];

export function Skills() {
  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-100 mb-4">
            Keahlian & Kemampuan
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Kombinasi antara kemampuan teknis dasar dan soft skill yang terus saya kembangkan.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-bold text-indigo-400 mb-8 flex items-center gap-3">
              Soft Skill
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-zinc-800/50 p-5 rounded-2xl border border-zinc-800 hover:border-zinc-700 transition-colors"
                >
                  <h4 className="text-lg font-semibold text-zinc-200 mb-2">{skill.name}</h4>
                  <p className="text-sm text-zinc-400 leading-relaxed">{skill.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Hard Skills */}
          <div>
            <h3 className="text-2xl font-bold text-indigo-400 mb-8 flex items-center gap-3">
              Hard Skill
            </h3>
            <div className="space-y-8">
              {hardSkills.map((group, index) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <h4 className="text-lg font-semibold text-zinc-300 mb-4 border-b border-zinc-800 pb-2">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {group.items.map(item => (
                      <span 
                        key={item} 
                        className="px-4 py-2 bg-zinc-900 text-zinc-300 rounded-lg border border-zinc-800 text-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12 p-6 bg-indigo-500/10 border border-indigo-500/20 rounded-2xl"
            >
              <h4 className="text-indigo-300 font-semibold mb-2">Metode Belajar Saya:</h4>
              <ul className="list-disc list-inside text-sm text-zinc-400 space-y-2">
                <li>Belajar sambil praktik (Trial and error)</li>
                <li>Mengerjakan proyek secara langsung</li>
                <li>Pendekatan step by step bersama mentor</li>
                <li>Pembelajaran interaktif dan aplikatif</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
