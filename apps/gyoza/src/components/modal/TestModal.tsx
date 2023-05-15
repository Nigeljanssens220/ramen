import Button from '../button/Button'
import Modal from './Modal'

interface TestModalProps {}

const TestModal: React.FC<TestModalProps> = ({}) => {
  return (
    <Modal>
      <Modal.Trigger asChild>
        <Button variant="md/base">Click me!</Button>
      </Modal.Trigger>
      <Modal.Content size="sm">
        <Modal.Title>This is the panel title</Modal.Title>
        <Modal.Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste mollitia totam, explicabo consectetur quisquam
          repellendus officia, facilis sit provident labore illum iure sint. Eveniet, magni ea reprehenderit sunt
          incidunt omnis!
        </Modal.Description>
        <Modal.Footer>
          <Modal.Close>Annuleren</Modal.Close>
          <Button>Actie</Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  )
}

export default TestModal
