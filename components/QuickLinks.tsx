import { Facebook, Github, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import Magnet from './Magnet';

interface Props {
  style?: string,
}

export default function QuickLinks({style} : Props) {

  const links = [
    { name: "Facebook", icon: Facebook },
    { name: "Github", icon: Github },
    { name: "LinkedIn", icon: Linkedin },
  ];

  return (
    <div className={`px-4 flex ${style}`}>
      {links.map((link, index) => {
        const Icon = link.icon

        return(
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
          >
            <Magnet padding={250} disabled={false} magnetStrength={20}>
              <div className={`cursor-target w-10 h-10 rounded-full  flex items-center justify-center brightness-40 hover:brightness-100 cursor-pointer`}>
                <Icon size={20} color='var(--primary)' className='drop-shadow-md'/>
              </div>
            </Magnet>
          </motion.div>
        )
      })}
    </div>
  )
}