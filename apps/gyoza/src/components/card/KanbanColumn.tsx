import Card from './Card'

interface KanbanColumnProps {
  title: string
}

const KanbanColumn: React.FC<KanbanColumnProps> = ({ title }) => {
  return <Card>{title}</Card>
}

export default KanbanColumn
