import React, { useState } from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import Magnet from './Magnet'
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
} from "@/components/ui/field"
import { Input } from './ui/input'
import { Textarea } from './ui/textarea'
import { Check, Send, ThumbsUp } from 'lucide-react'
import { Button } from './ui/button'
import { useForm } from 'react-hook-form'
import  emailjs  from '@emailjs/browser';

interface Props {
  open: boolean,
  setOpen: (value: boolean) => void
}

export default function GetInTouchModal({open, setOpen} : Props) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data : any) => {
    setSubmitting(true);
    try{
      await emailjs.send(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        data,
        process.env.NEXT_PUBLIC_PUBLIC_KEY as string
      );
      setSubmitting(false);
      reset();
      setOpen(false);
      setSuccess(true);
    }
    catch(err : any){
      console.error('Error sending message:', err);
    }
  }

  return (
    <>  
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>   
          <DialogHeader>
            <Magnet padding={80} disabled={false} magnetStrength={50}>    
              <Send size={50} className='drop-shadow-md'/>
            </Magnet>
            <Magnet padding={80} disabled={false} magnetStrength={50}>    
              <DialogTitle className="font-lexend font-black text-3xl drop-shadow-md">get in touch with me</DialogTitle>
              <DialogDescription className="font-mono text-sm text-cpurple drop-shadow-md">
              - let's start a conversation — reach out below.
              </DialogDescription>
            </Magnet>
            <div className='mt-8'>
              <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>    
                <FieldSet>
                  <FieldGroup className='gap-4'>
                    <Magnet padding={80} disabled={false} magnetStrength={50}>    
                      <Field className='gap-1'>
                        <FieldLabel htmlFor="name" className='text-muted-foreground'>Name</FieldLabel>
                        <Input 
                          id="name" 
                          autoComplete="off" 
                          placeholder="John Doe" 
                          {...register("name", {
                            required: true,
                          })}
                        />
                        {errors.name &&
                          <FieldError className='text-xs'>Name is required</FieldError>
                        }
                      </Field>
                    </Magnet>
                    <Magnet padding={80} disabled={false} magnetStrength={50}>    
                      <Field className='gap-1'>
                        <FieldLabel htmlFor="email" className='text-muted-foreground'>Email</FieldLabel>
                        <Input 
                          id="email" 
                          type='email' 
                          autoComplete="off" 
                          placeholder="email@address.com" 
                          {...register("email", {
                            required: true,
                            pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                          })}
                        />
                        {errors.email && 
                          <FieldError className='text-xs'>{errors.email.message as string}</FieldError>
                        }
                      </Field>      
                    </Magnet>
                    <Magnet padding={80} disabled={false} magnetStrength={50}>    
                      <Field className='gap-1'>
                        <FieldLabel htmlFor="checkout-7j9-optional-comments" className='text-muted-foreground'>
                          Message
                        </FieldLabel>
                        <Textarea
                          id="checkout-7j9-optional-comments"
                          placeholder="Type a message..."
                          className="resize-none font-mono"
                          {...register("message", {
                            required: true,
                          })}
                        />
                        {errors.message && 
                          <FieldError className='text-xs'>Message is required</FieldError>
                        }
                      </Field>            
                    </Magnet>
                  </FieldGroup>
                </FieldSet>
              </form>
            </div>
          </DialogHeader>
          <DialogFooter>
            <Button type="submit" form='contact-form' className='font-mono cursor-target' disabled={submitting}>
              {submitting ? 'Sending...' : 'Send message'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={success} onOpenChange={setSuccess}>
        <DialogContent>
          <DialogHeader>
            <Magnet padding={50} disabled={false} magnetStrength={50}>    
              <ThumbsUp size={50} className='drop-shadow-md'/>
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={50}>    
              <DialogTitle className="font-lexend font-black text-3xl drop-shadow-md">message sent!</DialogTitle>
            </Magnet>
            <Magnet padding={50} disabled={false} magnetStrength={50}>
              <DialogDescription className='font-mono'>
                Your message has been sent successfully. I'll get back to you as soon as I can.
              </DialogDescription>
            </Magnet>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  )
}
