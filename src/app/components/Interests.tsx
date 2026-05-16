import { motion } from "motion/react";
import { PenTool, Users, Smartphone, Brain } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const interests = [
  {
    id: "dkv",
    title: "Desain Komunikasi Visual",
    description: "Menyukai proses penyampaian pesan melalui media visual. Saya tertarik mempelajari desain, tata letak visual, serta UI/UX dasar.",
    icon: PenTool,
    image: "https://images.unsplash.com/photo-1663970206579-c157cba7edda?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhcmslMjBncmFkaWVudCUyMFVJJTIwZGVzaWdufGVufDF8fHx8MTc3ODg0NjE5M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Figma", "Illustrator", "UI/UX"]
  },
  {
    id: "kepemimpinan",
    title: "Kepemimpinan & Organisasi",
    description: "Memiliki minat dalam memahami bagaimana kerja sama tim, komunikasi, dan pengambilan keputusan dapat berjalan secara efektif.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWFkZXJzaGlwJTIwdGVhbSUyMGNvbW11bmljYXRpb258ZW58MXx8fHwxNzc4ODQ2MTk0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Public Speaking", "Teamwork", "Relasi"]
  },
  {
    id: "teknologi",
    title: "Teknologi & Digital",
    description: "Tertarik pada perkembangan teknologi digital, senang mengeksplorasi fitur-fitur baru serta beradaptasi dengan inovasi.",
    icon: Smartphone,
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwY29kZSUyMHNjcmVlbnxlbnwxfHx8fDE3Nzg3NjM2NDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Mobile Apps", "Websites", "Tools"]
  },
  {
    id: "psikologi",
    title: "Psikologi Manusia",
    description: "Mempelajari cara manusia berpikir dan bertindak, mulai dari perubahan perilaku hingga memikirkan pertanyaan filosofis kehidupan.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1617791160536-598cf32026fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwc3ljaG9sb2d5JTIwbWluZCUyMHRob3VnaHQlMjBhYnN0cmFjdHxlbnwxfHx8fDE3Nzg4NDYxOTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Philosophy", "Mindset", "Behavior"]
  }
];

export function Interests() {
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
            Ketertarikan Utama
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl">
            Beberapa bidang yang sedang saya pelajari dan dalami, sebagai bentuk dari eksplorasi ketertarikan saya.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {interests.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-3xl overflow-hidden bg-zinc-900 border border-zinc-800"
            >
              <div className="h-48 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent z-10" />
                <ImageWithFallback
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-60 group-hover:opacity-80"
                />
                <div className="absolute top-6 left-6 z-20 w-12 h-12 bg-zinc-800/80 backdrop-blur-sm rounded-xl flex items-center justify-center border border-zinc-700">
                  <item.icon className="w-6 h-6 text-indigo-400" />
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-zinc-100 mb-3">{item.title}</h3>
                <p className="text-zinc-400 mb-6 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-full border border-zinc-700">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
