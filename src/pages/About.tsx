import { Section } from '../components/ui/Section';
import { motion } from 'framer-motion';

export const About = () => {
  return (
    <div className="bg-webuddy-dark min-h-screen pt-32 pb-20">
      <Section>
        <div className="container mx-auto px-4 md:px-6">
          {/* Hero Text */}
          <div className="max-w-5xl mx-auto mb-24">
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-8 tracking-tighter"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              We are <br />
              <span className="text-webuddy-blue">Builders & Dreamers.</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Webuddy is a collective of engineers, designers, and strategists obsessed with the future of digital interaction. We don't just write code; we architect experiences that scale.
            </motion.p>
          </div>

          {/* Stats/Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
            {[
              { title: "Innovation", desc: "Pushing boundaries with every commit." },
              { title: "Precision", desc: "Pixel-perfect implementation." },
              { title: "Speed", desc: "Performance is a feature, not a bonus." },
              { title: "Impact", desc: "Building software that moves the needle." }
            ].map((item, i) => (
              <motion.div
                key={i}
                className="p-8 bg-white/5 border border-white/10 rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Content Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-gradient-to-tr from-webuddy-blue/20 to-purple-500/20 border border-white/10 relative">
                <div className="absolute inset-0 flex items-center justify-center text-white/20 font-display text-4xl font-bold">
                  [Office Image]
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-display font-bold text-white mb-6">Born in the Dominican Republic. <br /> Serving the World.</h2>
              <p className="text-gray-400 leading-relaxed mb-6">
                Founded with a vision to elevate the standard of software engineering in the Caribbean, Webuddy has grown into a premier digital agency serving clients across 12 countries.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Our team is our greatest asset. We hire the top 1% of talent and give them the freedom to innovate.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};
