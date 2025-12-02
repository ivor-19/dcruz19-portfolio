import { works } from '@/data/works'
import React, { useState } from 'react'
import Magnet from './Magnet'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Skeleton } from './ui/skeleton'
import { WorkData } from '@/lib/types'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'
import { ArrowRight, BadgeQuestionMark, ChevronRight, Download, Github, SquareArrowDownRight, SquareArrowOutUpRightIcon } from 'lucide-react'
import Link from 'next/link'

export default function MyWorksList() {
  const [data, setData] = useState<WorkData | null>(null)
  const [open, setOpen] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <>   
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full max-w-8xl px-4 items-stretch">
        {works.map((work, index) => (
          <Magnet key={index} padding={100} disabled={false} magnetStrength={50} wrapperClassName="h-full" innerClassName="h-full flex">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -8, transition: { duration: 1 } }}
              className="bg-card h-full rounded-lg p-6 border flex flex-col shadow-2xl shadow-muted-foreground/20 group"
              onClick={() => {setData(work)}}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                {work.image ? (
                  <>
                    <Image 
                      src={work.image[0]} 
                      alt="" 
                      fill 
                      className="rounded-lg object-cover transition-opacity duration-500" 
                      style={{ opacity: hoveredIndex === index && work.video ? 0 : 1 }}
                    />
                    {work.video ? (
                      <motion.video
                        key={`video-${index}`}
                        src={work.video}
                        className="absolute inset-0 w-full h-full object-cover rounded-lg"
                        autoPlay
                        loop
                        muted
                        playsInline
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.5 }}
                      />
                    ) : (
                      <motion.div
                        className="absolute inset-0 bg-black/60 rounded-lg flex items-center justify-center"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                        transition={{ duration: 0.1 }}
                      >
                        <span className="text-white/70 text-sm">No video preview</span>
                      </motion.div>
                    )}
                  </>
                ) : (
                  <Skeleton className="w-full h-full" />
                )}
              </div>
              <div className='flex flex-col flex-1 justify-between gap-4'>
                <section className='flex flex-col flex-1'>
                  <span className="text-lg font-bold">{work.title}</span>
                  <span className="text-sm">{work.subtitle}</span>
                  <span className="text-xs mt-4 text-muted-foreground">{work.description}</span>
                  <div className="mt-4 w-full flex flex-wrap gap-1">
                    {work.tags.map((tag, index) => (
                      <div key={index} className="rounded-xl bg-badge border h-6 px-2 flex items-center justify-center">
                        <span className="text-[10px] text-muted-foreground">{tag}</span>
                      </div>
                    ))}
                  </div>
                </section>
                
                <section className='flex flex-col justify-between '>               
                  <div className='flex justify-between items-center'>
                    <div className='flex gap-2'>
                      {work?.github && 
                        <Link href={work.github} target="_blank" rel="noopener noreferrer" className='bg-muted h-8 w-8 rounded-sm flex items-center justify-center hover:bg-accent cursor-target'>
                          <Github size={16}/>
                        </Link> 
                      }
                      {work?.apk && 
                        <Link href={work.apk} target="_blank" rel="noopener noreferrer" className='bg-muted h-8 w-8 rounded-sm flex items-center justify-center hover:bg-accent cursor-target'>
                          <Download size={16}/>
                        </Link> 
                      } 
                      {work?.website && 
                        <Link href={work.website} target="_blank" rel="noopener noreferrer" className='bg-muted h-8 w-8 rounded-sm flex items-center justify-center hover:bg-accent cursor-target'>
                          <SquareArrowOutUpRightIcon size={16}/>
                        </Link> 
                      }
                    </div>
                    <Link href={`/workDetails/${work.id}`}>
                      <div className='bg-muted gap-2 h-8 px-2 text-xs rounded-sm flex items-center justify-center hover:bg-accent cursor-target'>
                        read more
                        <ArrowRight size={16}/>
                      </div>
                    </Link>
                  </div>
                </section>
              </div>
            </motion.div>
          </Magnet>
        ))}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="min-h-[80%]">
          <DialogHeader>
            <DialogTitle className="font-lexend font-black text-2xl uppercase text-center">
              {data?.title}
            </DialogTitle>
            <Skeleton className="h-[40%] w-full mx-auto my-2" />
            {data?.image ? (
              <div className="w-full flex justify-center items-center">
                <Carousel className="w-[80%]">
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {data.image.map((imageSrc, index) => (
                      <CarouselItem 
                        key={index} 
                        className="pl-2 md:pl-4 basis-1/2 lg:basis-1/3"
                      >
                        <div className="p-1">
                          <img 
                            src={imageSrc} 
                            alt={`${data.title} - Image ${index + 1}`}
                            className="w-full h-30 rounded-lg object-cover"
                            onClick={() => console.log('Hello')}
                          />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              </div>
            ) : (
              <Skeleton className="h-[60%]" />
            )}
            <DialogDescription className='font-mono text-xs text-center mt-4'>
              {data?.description}
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog> 
    </>
  )
}
