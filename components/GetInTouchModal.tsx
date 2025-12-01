import React from 'react'
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
import { Send } from 'lucide-react'
import { Button } from './ui/button'

interface Props {
  open: boolean,
  setOpen: (value: boolean) => void
}

export default function GetInTouchModal({open, setOpen} : Props) {
  return (
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
            <FieldSet>
              <FieldGroup className='gap-4'>
                <Magnet padding={80} disabled={false} magnetStrength={50}>    
                  <Field className='gap-1'>
                    <FieldLabel htmlFor="name" className='text-muted-foreground'>Name</FieldLabel>
                    <Input id="name" autoComplete="off" placeholder="John Doe" />
                  </Field>
                </Magnet>
                <Magnet padding={80} disabled={false} magnetStrength={50}>    
                  <Field className='gap-1'>
                    <FieldLabel htmlFor="username" className='text-muted-foreground'>Email</FieldLabel>
                    <Input id="username" autoComplete="off"placeholder="email@address.com"/>
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
                    />
                  </Field>            
                </Magnet>
              </FieldGroup>
            </FieldSet>
          </div>
        </DialogHeader>
        <DialogFooter>
          <Button type="submit" className='font-mono cursor-target'>Send</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
