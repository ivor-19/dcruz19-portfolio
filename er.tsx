"use client"

import QuickLinks from "@/components/QuickLinks";
import { motion } from "framer-motion"
import Image from "next/image";
import Magnet from '@/components/Magnet'
import PageIndicator from '@/components/PageIndicator'
import { Skeleton } from "@/components/ui/skeleton";
import {TargetCursor} from "@/components/TargetCursor";
import { works } from "@/data/works";
import { useState } from "react";
import { Facebook, Github, Linkedin, Mail, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import GetInTouchModal from "@/components/GetInTouchModal";
import TechStack from "@/components/TechStack";
import MyWorksList from "@/components/MyWorksList";
import { Code2, Sparkles, Coffee, Zap, Heart, Rocket, Target, Users } from 'lucide-react';

export default function Home() {
  const [open, setOpen] = useState(false)

   const stats = [
    { icon: Rocket, label: "Years Experience", value: "8+" },
    { icon: Target, label: "Projects Completed", value: "50+" },
    { icon: Coffee, label: "Cups of Coffee", value: "∞" },
    { icon: Users, label: "Happy Clients", value: "30+" }
  ];

  const interests = [
    { icon: Code2, title: "Clean Code", description: "Writing maintainable, scalable solutions" },
    { icon: Sparkles, title: "UI/UX Design", description: "Crafting beautiful user experiences" },
    { icon: Zap, title: "Performance", description: "Optimizing for speed and efficiency" },
    { icon: Heart, title: "Open Source", description: "Contributing to the community" }
  ];

  return (
    <main className="relative w-full min-h-screen flex-col items-center justify-center font-mono overflow-x-hidden">   
      <TargetCursor 
        color="#5837b5" 
        dotColor="#5837b5"
        hideDefaultCursor={true}
        parallaxOn={true}
      />
      {/* <Nav /> */}

      {/* Home */}
      <div id="home" className="font-mono min-h-screen flex items-center justify-between relative">
        <motion.div 
          className="w-[40%] flex items-center justify-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        >
          <Magnet padding={100} disabled={false} magnetStrength={20}>
            <Image src={'/images/pixel.png'} alt="" width={400} height={400} className="drop-shadow-[#4a4a4a] drop-shadow-2xl"/>
          </Magnet>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 50 }}              
          whileInView={{ opacity: 1, y: 0 }}            
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }} 
          className="font-mono flex-1 flex-col  gap-2"
        >
        <Magnet padding={100} disabled={false} magnetStrength={50}>
          <span className="text-sm text-muted-foreground font-source  drop-shadow-md">Hello, my name is Deniel Ivor</span>
          <div className="flex flex-col text-[30px] font-lexend font-black">          
            <span className="items-center  drop-shadow-md text-foreground">
              A Full-Stack Developer capable of 
              <span className="text-cpurple mx-4 drop-shadow-md">
                creating
              </span>
              and 
              <span className="text-cpurple mx-4  drop-shadow-md">
                building
              </span>
              modern and user-focused digital experiences.
            </span>      
          </div>
          <div className="flex items-center gap-2 mt-2 border border-cgreen rounded-xl w-fit p-2">
            <div className="h-2 w-2 bg-cgreen rounded-full animate-pulse"/>
            <p className="text-xs text-cgreen font-bold drop-shadow-md">Available for work</p>
          </div>
        </Magnet>
        </motion.div>    
        <div className="absolute bottom-0 right-0">
          <QuickLinks style="gap-2 flex-col py-8"/>
        </div>
      </div>

      {/* Projects */}
      <div id="projects" className="font-mono min-h-screen w-full flex flex-col relative py-20 gap-12">
        <Magnet padding={10} disabled={false} magnetStrength={50}>   
          <motion.div 
            initial={{ opacity: 0, y: 50 }}              
            whileInView={{ opacity: 1, y: 0 }}            
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} 
            viewport={{ once: true, amount: 0.5, margin: "-100px" }}
            className="font-mono flex flex-col gap-2 w-full "
          >
            <span className="mx-4 font-lexend text-5xl font-black drop-shadow-md"> my works </span>
            <span className="mx-4 font-mono text-lg text-cpurple drop-shadow-md" > - what I did </span>
          </motion.div>
        </Magnet>
        <MyWorksList />

      </div>

      {/* About and Techstack*/}
    <div id="about" className="font-mono w-full flex flex-col mt-10 pb-20 relative gap-12">
      {/* Header */}
      <Magnet padding={100} disabled={false} magnetStrength={50}>    
        <motion.div 
          initial={{ opacity: 0, y: 60 }}              
          whileInView={{ opacity: 1, y: 0 }}            
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
          viewport={{ once: true, amount: 0.5, margin: "-100px" }}
          className="font-mono flex flex-col gap-2 w-full"
        >
          <span className="mx-4 font-lexend text-5xl lg:text-6xl font-black drop-shadow-md bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
            about me
          </span>
          <span className="mx-4 font-mono text-lg text-cpurple drop-shadow-md flex items-center gap-2">
            <div className="h-1 w-1 rounded-full bg-cpurple" />
            who am I?
          </span>
        </motion.div>
      </Magnet>

      {/* Main Content */}
      <div className="w-full max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">
        {/* Left Column - Bio & Tech Stack */}
        <motion.div 
          className="w-full lg:w-1/2 space-y-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Bio */}
          <Magnet padding={100} disabled={false} magnetStrength={50}>    
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-cpurple/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-gradient-to-br from-card/50 to-muted/30 border border-border/50 backdrop-blur-sm">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I'm a multidisciplinary designer and developer with over <span className="text-cpurple font-semibold">8 years of experience</span> creating digital products that people love to use. My approach combines strategic thinking with meticulous attention to detail.
                </p>
                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  I believe great design is <span className="text-cpurple font-semibold">invisible</span>—it just works. Whether I'm designing interfaces or writing code, I focus on creating experiences that are both beautiful and functional.
                </p>
              </div>
            </div>
          </Magnet>

          {/* Tech Stack */}
          <TechStack />
        </motion.div>

        {/* Right Column - Stats & Interests */}
        <motion.div 
          className="w-full lg:w-1/2 space-y-6"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                  className="group relative overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cpurple/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
                  <div className="relative p-6 rounded-xl bg-gradient-to-br from-card to-muted/50 border border-border/50 group-hover:border-cpurple/30 transition-all">
                    <Icon className="w-8 h-8 text-cpurple mb-3 group-hover:scale-110 transition-transform" />
                    <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* What I Love */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3 px-2">
              <div className="h-1 w-1 rounded-full bg-cpurple" />
              <h3 className="text-xl font-bold text-cpurple uppercase tracking-wider">What I Love</h3>
              <div className="h-px flex-1 bg-gradient-to-r from-cpurple/30 to-transparent" />
            </div>

            <div className="space-y-3">
              {interests.map((interest, index) => {
                const Icon = interest.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 8 }}
                    className="group relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cpurple/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-xl" />
                    <div className="relative p-4 rounded-xl bg-card/30 border border-border/30 group-hover:border-cpurple/30 transition-all flex items-start gap-4">
                      <div className="p-2 rounded-lg bg-cpurple/10 group-hover:bg-cpurple/20 transition-colors">
                        <Icon className="w-5 h-5 text-cpurple" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground group-hover:text-cpurple transition-colors mb-1">
                          {interest.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {interest.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Fun Fact Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-cpurple/20 via-cpurple/5 to-transparent opacity-50" />
            <div className="absolute top-0 right-0 w-32 h-32 bg-cpurple/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            <div className="relative p-6 rounded-xl border border-cpurple/30 bg-card/50 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-cpurple/20 group-hover:rotate-12 transition-transform duration-300">
                  <Heart className="w-6 h-6 text-cpurple" fill="currentColor" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-cpurple mb-2">Fun Fact</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    When I'm not coding, you'll find me exploring new design trends, 
                    experimenting with animations, or contributing to open-source projects.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>

      {/* Let's Connect */}
      <div id="connect" className="font-mono min-h-200 w-full flex items-center justify-center relative">
        <div className="flex flex-col justify-center items-center relative">
          <Magnet padding={80} disabled={false} magnetStrength={50}>    
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 40 }}              
              whileInView={{ opacity: 1, scale: 1, y: 0 }}            
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }} 
              viewport={{ once: true, amount: 0.5, margin: "-100px" }}
              className="font-mono flex flex-col gap-4 w-full  items-center"
            >
              <h1 className="font-lexend text-5xl font-black drop-shadow-md"> let's connect! </h1>
              <p className="text-md  text-muted-foreground w-[80%] text-center drop-shadow-md">I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
              <Button className="mt-4 cursor-target" onClick={() => setOpen(true)}><Send  size={16}/> Send me a message</Button> 
            </motion.div>   
          </Magnet> 
 
          <motion.div
            initial={{ opacity: 0, y: 60 }}              
            whileInView={{ opacity: 1, y: 0 }}            
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
            viewport={{ once: true, amount: 0.5, margin: "-100px" }} 
            className="flex flex-col items-center mt-8 gap-4 w-full justify-center"
          >
            <Magnet padding={80} disabled={false} magnetStrength={50} wrapperClassName="w-full" innerClassName="flex w-full gap-2 items-center justify-center drop-shadow-md">
              <span className="text-muted-foreground text-xs brightness-75 h-4 flex items-center justify-end flex-1 text-right gap-2"> <Mail size={14} /> ivorcruz19@gmail.com </span>  
              <span className="text-muted-foreground brightness-75 h-4 flex items-center flex-none">|</span>
              <span className="text-muted-foreground text-xs brightness-75 h-4 flex items-center justify-start flex-1 text-left gap-2"><Phone size={14} /> +639684818727 </span>             
            </Magnet>
            <QuickLinks style="gap-4 flex-row" />
          </motion.div>
        </div>
        {/* <div className="bg-gray-800 h-full ">

        </div> */}
      </div>
      
      {/* Footer */}
      <motion.div 
        className="border-t w-full py-6 flex items-center justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >

        <span className="text-sm text-muted-foreground drop-shadow-md">© 2025 Deniel Ivor Cruz. All rights reserved.</span>
      </motion.div>

      <GetInTouchModal open={open} setOpen={setOpen}/>
      <PageIndicator sections={["home", "projects", "about", "connect"]} />
      

     
    </main>
  );
}
