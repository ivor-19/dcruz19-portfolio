"use client"

import { TargetCursor } from '@/components/TargetCursor';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { works } from '@/data/works'
import { ChevronLeft, ChevronRight, CircleX, Code2, Download, Github, Maximize2, Sparkles, SquareArrowOutUpRightIcon, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Magnet from '@/components/Magnet';
import { WorkData } from '@/lib/types';
import ScrollIndicator from '@/components/ScrollIndicator';

export default function WorkDetails({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalImageIndex, setModalImageIndex] = useState(0)

  // Properly handle async params
  useEffect(() => {
    params.then((resolvedParams) => {
      setId(resolvedParams.id);
    });
  }, [params]);

  // Show loading state while params are resolving
  if (!id) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center p-4 font-mono">
        <TargetCursor 
          color="#5837b5" 
          dotColor="#5837b5"
          hideDefaultCursor={true}
          parallaxOn={true}
        />
        <div className="flex flex-col items-center gap-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-32" />
        </div>
      </main>
    )
  }

  const work = works.find((work) => work.id === id) as WorkData | undefined;

  if (!work) {
    return (
      <main className="min-h-screen bg-background flex items-center justify-center p-4 font-mono">
        <TargetCursor 
          color="#5837b5" 
          dotColor="#5837b5"
          hideDefaultCursor={true}
          parallaxOn={true}
        />
        <div className="text-center flex flex-col gap-6">
          <Image src={'/images/404white.png'} alt='' width={200} height={200} className="rounded-lg object-cover mx-auto"/>
          <h1 className=" text-2xl text-muted-foreground font-medium drop-shadow-md">project not found</h1>
          <Button variant="outline" className='cursor-target' onClick={() => router.back()}>
            <ChevronLeft className="w-4 h-4 " />
            go back
          </Button>
        </div>
      </main>
    )
  }

  const handleImageClick = (index: number) => {
    setModalImageIndex(index)
    setIsModalOpen(true)
  }

  const handleModalNext = () => {
    setModalImageIndex((prev) => (prev + 1) % work.image.length)
  }

  const handleModalPrev = () => {
    setModalImageIndex((prev) => (prev - 1 + work.image.length) % work.image.length)
  }

  return (
    <main className='min-h-screen relative flex flex-col p-8 font-mono'>
      <TargetCursor 
        color="#5837b5" 
        dotColor="#5837b5"
        hideDefaultCursor={true}
        parallaxOn={true}
      />
     
      <div className='w-full flex-1 flex flex-col gap-4'>
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}

          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cpurple/10 border border-cpurple/20 w-fit"
        >
          <Sparkles className="w-4 h-4 text-cpurple" />
          <span className="text-xs text-cpurple font-medium">Featured Project</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
          viewport={{ once: true, amount: 0.5, margin: "-100px" }}
          className='flex items-center justify-between'
        >
          <div className='flex flex-col gap-2'>
            <h1 className="font-lexend text-3xl lg:text-5xl font-black drop-shadow-md"> {work.title} </h1>
            <h5 className="drop-shadow-md text-muted-foreground text-sm sm:text-lg"> {work.subtitle} </h5>
          </div>
          <Magnet padding={50} disabled={false} magnetStrength={20}>
            <div className='flex gap-2 items-center cursor-target brightness-40 hover:brightness-100' onClick={() => router.back()}>
              <CircleX size={40} color='var(--primary)'/>
            </div>
          </Magnet>
        </motion.div>
        <div className='grid grid-cols-1 lg:grid-cols-[80%_1fr] lg:grid-rows-[500px_auto] gap-4 w-full'>
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
            className='h-[300px] lg:h-full'
          >
            <div className="relative w-full h-full rounded-2xl overflow-hidden border border-border/50 bg-linear-to-br from-card via-card to-muted/30 shadow-sm group">
              <div className="absolute inset-0 bg-linear-to-br from-cpurple/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {work.video ? (
                <div className="relative w-full h-full">
                  <video 
                    src={work.video}
                    className="w-full h-full object-contain cursor-auto"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                  <Button
                    onClick={(e) => {
                      e.stopPropagation();
                      const video = e.currentTarget.previousElementSibling as HTMLVideoElement;
                      if (video.requestFullscreen) {
                        video.requestFullscreen();
                      } else if ((video as any).webkitRequestFullscreen) {
                        (video as any).webkitRequestFullscreen();
                      }
                    }}
                    className="cursor-target absolute bottom-4 right-4 p-2 bg-black/50 hover:bg-black/70 rounded-lg backdrop-blur-sm transition-colors "
                    aria-label="Fullscreen"
                  >
                    <Maximize2 className="w-5 h-5 text-white " />
                  </Button>
                </div>
              ) : (
                <div className="relative w-full h-full flex flex-col items-center justify-center gap-4 py-8">
                  <Code2 className="w-16 h-16 text-muted-foreground/30" />
                  <p className="text-muted-foreground/50 text-sm">Video preview coming soon</p>
                </div>
              )}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}

            className='h-[300px] lg:h-full rounded-lg border shadow-sm p-4 flex flex-col justify-between gap-2'
          >
            <div className='flex-1'>
              <div className='flex items-center gap-2'>
                <div className="h-px flex-1 bg-linear-to-r from-cpurple/50 to-transparent" />
                <h5 className='text-cpurple font-semibold text-sm'>tech stack</h5>
                <div className="h-px flex-1 bg-linear-to-l from-cpurple/50 to-transparent" />
              </div>
              <div className="mt-4 w-full flex flex-wrap gap-1"> 
                {work.tags.map((tag, index) => (
                  <div 
                    key={index}
                    className="group relative"
                  >   
                    <div className="absolute inset-0 bg-linear-to-r from-cpurple/20 to-cpurple/10 rounded-lg blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative rounded-lg bg-linear-to-br from-badge to-badge/80 border border-border/50 h-8 px-3 flex items-center justify-center hover:border-cpurple/30 transition-all cursor-default">
                      <span className="text-xs font-medium text-foreground/80 group-hover:text-cpurple transition-colors ">{tag}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className='flex flex-col gap-2'>
              {work?.github && 
                <Link href={work.github} target="_blank" rel="noopener noreferrer" className='bg-muted h-8 text-xs rounded-sm flex items-center justify-center hover:bg-accent cursor-target gap-2'>
                  <Github size={16}/>
                  check on github
                </Link> 
              }
              {work?.apk && 
                <Link href={work.apk} target="_blank" rel="noopener noreferrer" className='bg-muted h-8 text-xs rounded-sm flex items-center justify-center hover:bg-accent cursor-target gap-2'>
                  <Download size={16}/>
                  install app
                </Link>
              }
              {work?.website && 
                <Link href={work.website} target="_blank" rel="noopener noreferrer" className='bg-muted h-8 text-xs rounded-sm flex items-center justify-center hover:bg-accent cursor-target gap-2'>
                  <SquareArrowOutUpRightIcon size={16}/>
                  check website
                </Link>   
              }
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className=' flex gap-2 rounded-lg p-2 '
          > 
            {work.image?.length ? (
              work.image.map((image, index) => (
                <div
                  key={index}
                >
                  <Image
                    src={image}
                    alt={`${work.title} - Image ${index + 1}`}
                    width={96}
                    height={96}
                    onClick={() => { setSelectedImageIndex(index), handleImageClick(index) }}
                    className="h-24 w-24 rounded-lg brightness-80 scale-90 object-cover hover:scale-100 hover:brightness-100 cursor-target transition-all duration-300"
                  />
                </div>
              ))
            ) : (
              <div className="flex-1 flex items-center justify-center text-muted-foreground text-sm">
                No images available
              </div>
            )}
          </motion.div>
        </div>

        <section className='flex flex-col gap-4 mt-4'>
          <motion.div 
            initial={{ opacity: 0, y: 60 }}              
            animate={{ opacity: 1, y: 0 }}     
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.6 }} 

            className='flex flex-col gap-2'
          >
            <div className='flex gap-2 items-center'>
              <span className="text-xl font-black drop-shadow-md text-cpurple"> Project Overview </span>
              <div className="h-px flex-1 bg-linear-to-r from-cpurple/50 to-transparent" />
            </div>
            <div className="relative p-8 rounded-2xl bg-linear-to-br from-card/50 to-muted/30 border border-border/50 backdrop-blur-sm">
              <div className="absolute top-0 left-0 w-32 h-32 bg-cpurple/5 rounded-full blur-3xl" />
              <p className='relative text-muted-foreground leading-relaxed text-sm sm:text-base'>{work.description}</p>
            </div>
          </motion.div>
        </section>
        {work.features &&
          <section className='flex flex-col gap-4'>
            <div 
            >
              <div className='flex gap-2 items-center'>
                <span className="text-xl font-black drop-shadow-md text-cpurple"> Features </span>
                <div className="h-px flex-1 bg-linear-to-r from-cpurple/50 to-transparent" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {work.features?.map((feature, index) => (
                <div
                  key={index}
                  className="group relative p-5 rounded-xl bg-linear-to-br from-card/30 to-muted/20 border border-border/30 hover:border-cpurple/30 transition-all"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-cpurple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                  <div className="relative flex items-start gap-3">
                    <div className="mt-1 h-2 w-2 rounded-full bg-cpurple shrink-0" />
                    <p className='text-muted-foreground group-hover:text-foreground transition-colors text-sm sm:text-base'>{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        }
        {work.whatIdid && 
          <section className='flex flex-col gap-4'>
            <div 
            >
              <div className='flex gap-2 items-center'>
                <span className="text-xl font-black drop-shadow-md text-cpurple"> My Contributions </span>
                <div className="h-px flex-1 bg-linear-to-r from-cpurple/50 to-transparent" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">          
              {work.whatIdid?.map((item, index) => (
                <div
                    key={index}
                    className="group relative p-5 rounded-xl bg-linear-to-br from-card/30 to-muted/20 border border-border/30 hover:border-cpurple/30 transition-all"
                  >
                    <div className="absolute inset-0 bg-linear-to-br from-cpurple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    <div className="relative flex items-start gap-3">
                      <div className="mt-1 h-2 w-2 rounded-full bg-cpurple shrink-0" />
                      <p className='text-muted-foreground group-hover:text-foreground transition-colors text-sm sm:text-base'>{item}</p>
                    </div>
                  </div>
              ))}
            </div>
          </section>
        }
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center transition-all" onClick={() => setIsModalOpen(false)} >
          <button onClick={() => setIsModalOpen(false)} className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-lg transition-colors z-10" >
            <X className="w-6 h-6 text-white" />
          </button>
          <button onClick={(e) => { e.stopPropagation(); handleModalPrev() }} className="absolute left-4 p-2 hover:bg-white/10 rounded-lg transition-colors" >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
          <div className="relative w-full h-full max-w-6xl max-h-[80vh] mx-auto px-4">
            <Image src={work.image[modalImageIndex] || "/placeholder.svg"} alt={`Full view - Image ${modalImageIndex + 1}`} fill className="object-contain" />
          </div>
          <button onClick={(e) => { e.stopPropagation(); handleModalNext() }} className="absolute right-4 p-2 hover:bg-white/10 rounded-lg transition-colors" >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm">
            {modalImageIndex + 1} / {work.image.length}
          </div>
        </div>
      )}
      <ScrollIndicator />
    </main>
  )
}