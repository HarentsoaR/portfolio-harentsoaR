import { motion } from 'framer-motion'

const skills = [
  { name: 'PHP', level: 90 },
  { name: 'CodeIgniter', level: 85 },
  { name: 'JavaScript', level: 70 },
  { name: 'React', level: 90 },
  { name: 'Next.js', level: 85 },
  { name: 'NestJS', level: 80 },
  { name: 'Java', level: 85 },
  { name: 'Spring Boot', level: 80 },
  { name: 'PostgreSQL', level: 95 },
  { name: 'MySQL', level: 90 },
  { name: 'Git', level: 95 },
  { name: 'JWT', level: 90 },
  { name: 'OAuth', level: 75 },
  { name: 'API', level: 95 },
  { name: 'REST', level: 95 },
  { name: 'Tailwind', level: 70 },
  { name: 'CSS', level: 80 },
  { name: 'HTML', level: 95 },
]

export function Skills() {
  return (
    <section className="py-20 bg-[#222831] text-[#EEEEEE]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#76ABAE]">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              className="bg-[#31363F] rounded-lg p-4 shadow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-2 text-[#76ABAE]">{skill.name}</h3>
              <div className="w-full bg-[#EEEEEE] rounded-full h-2.5">
                <motion.div
                  className="bg-[#76ABAE] h-2.5 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 }}
                  viewport={{ once: true }}
                ></motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

