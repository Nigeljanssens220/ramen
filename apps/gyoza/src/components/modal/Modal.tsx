'use client'

import { Dialog, type DialogProps } from '@radix-ui/react-dialog'
import { ModalClose } from './ModalClose'
import { ModalContent } from './ModalContent'
import { ModalDescription } from './ModalDescription'
import { ModalFooter } from './ModalFooter'
import { ModalHeader } from './ModalHeader'
import { ModalTitle } from './ModalTitle'
import { ModalTrigger } from './ModalTrigger'

const Modal: React.FC<DialogProps> & {
  Close: typeof ModalClose
  Content: typeof ModalContent
  Description: typeof ModalDescription
  Footer: typeof ModalFooter
  Header: typeof ModalHeader
  Title: typeof ModalTitle
  Trigger: typeof ModalTrigger
} = Object.assign(Dialog, {
  Close: ModalClose,
  Content: ModalContent,
  Description: ModalDescription,
  Footer: ModalFooter,
  Header: ModalHeader,
  Title: ModalTitle,
  Trigger: ModalTrigger,
})

export default Modal
