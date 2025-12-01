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
import ScrollIndicator from "@/components/ScrollIndicator";

export default function Home() {
  const [open, setOpen] = useState(false)

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

     {/* About and Techstack */}
    <div id="about" className="font-mono w-full flex flex-col mt-10 pb-20 relative gap-12">
      <Magnet padding={100} disabled={false} magnetStrength={50}>    
        <motion.div 
          initial={{ opacity: 0, y: 60 }}              
          whileInView={{ opacity: 1, y: 0 }}            
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
          viewport={{ once: true, amount: 0.5, margin: "-100px" }}
          className="font-mono flex flex-col gap-2 w-full"
        >
          <span className="mx-4 font-lexend text-5xl font-black drop-shadow-md"> about me </span>
          <span className="mx-4 font-mono text-lg text-cpurple drop-shadow-md"> - who am I? </span>
        </motion.div>
      </Magnet>
      <div className="flex flex-col lg:flex-row justify-between gap-8 w-full">
        <motion.div 
          className="w-full lg:w-1/2 space-y-8"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <Magnet padding={50} disabled={false} magnetStrength={50}>    
            <div className="relative group mx-2">
              <div className="absolute inset-0 bg-linear-to-br from-cpurple/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative p-8 rounded-2xl bg-linear-to-br from-card/50 to-muted/30 border border-border/50 backdrop-blur-sm">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  I’m a developer focused on creating 
                  <span className="text-cpurple font-semibold"> clean</span>, 
                  <span className="text-cpurple font-semibold"> practical</span>, and 
                  <span className="text-cpurple font-semibold"> reliable </span> 
                  software. I like solving problems and turning concepts into working products by paying close attention to the small details.
                </p>

                <p className="text-lg leading-relaxed text-muted-foreground mt-4">
                  I prioritize building products that are 
                  <span className="text-cpurple font-semibold"> straightforward </span> 
                  and 
                  <span className="text-cpurple font-semibold"> frustration-free</span>. 
                  From the user interface to the back-end logic, I aim to build things that people can actually rely on.
                </p>
              </div>
            </div>
          </Magnet>

          <TechStack />
        </motion.div>

        <motion.div 
          className="w-full lg:w-1/2 grid grid-cols-2 gap-4 h-full"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Magnet padding={100} disabled={false} magnetStrength={50} wrapperClassName="h-full w-full col-span-2" innerClassName=" aspect-video bg-muted/20 border border-border/50 rounded-2xl overflow-hidden relative group">
            <img 
              src="/" 
              alt="Workspace" 
              className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" 
            />
          </Magnet>
          <Magnet padding={100} disabled={false} magnetStrength={50} innerClassName="h-full col-span-1 bg-card/50 border border-border/50 rounded-2xl p-6 flex flex-col justify-between backdrop-blur-sm">       
            <span className="text-4xl">🌏</span>
            <div>
              <p className="text-xs text-muted-foreground font-mono">Based in</p>
              <p className="text-lg font-semibold text-foreground">Philippines</p>
            </div>
          </Magnet>

          <Magnet padding={100} disabled={false} magnetStrength={50} innerClassName="h-full col-span-1 bg-background border  rounded-2xl overflow-hidden flex flex-col shadow-inner">    
            {/* Window Header */}
            <div className="bg-card px-3 py-2 flex gap-1.5 items-center border-b ">
              <div className="w-2 h-2 rounded-full bg-red-500" />
              <div className="w-2 h-2 rounded-full bg-yellow-500" />
              <div className="w-2 h-2 rounded-full bg-green-500" />
            </div>
            <div className="p-3 font-mono text-[10px] sm:text-xs text-gray-300 leading-relaxed overflow-hidden">
              <div className="text-muted-foreground dark:text-white"><span className="text-cpurple">const</span> dev = {"{"}</div>
              <div className="pl-2 text-muted-foreground dark:text-white">name: <span className="text-green-400">"Deniel Ivor Cruz"</span>,</div>
              <div className="pl-2 text-muted-foreground dark:text-white">focused: <span className="text-orange-400">true</span>,</div>
              <div className="pl-2 text-muted-foreground dark:text-white">reliable: <span className="text-orange-400">true</span></div>
              <div className="text-muted-foreground dark:text-white">{"}"}</div>
            </div>
          </Magnet>
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
      <ScrollIndicator />

     
    </main>
  );
}
