import { useRef } from 'react'

import useClickOutside from '@src/hooks/useClickOutside'

import {
  ActionsOnModal,
  ButtonNo,
  ButtonYes,
  Modal,
  ModalContent,
  TextModal,
} from './styled'
import { Props } from './types'

export default function ModalConfirm({
  onCancel,
  onConfirm,
  textModal,
}: Props) {
  const modalRef = useRef(null)
  useClickOutside(modalRef, () => onCancel())

  return (
    <Modal>
      <ModalContent ref={modalRef}>
        <TextModal>{textModal}</TextModal>
        <ActionsOnModal>
          <ButtonNo onClick={onCancel}>No</ButtonNo>
          <ButtonYes onClick={onConfirm}>Yes</ButtonYes>
        </ActionsOnModal>
      </ModalContent>
    </Modal>
  )
}
