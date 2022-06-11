import { FC } from "react"

interface Props {
  children: React.ReactNode
}

export const DarkLayout: FC<Props> = ({ children }) => {
  return (
    <div style={{
        backgroundColor: 'rgba(0,0,0,.3)',
        borderRadius: '10px',
        padding: '10px',
    }}>
      <h3>Dark layout</h3>
      { children }
    </div>
  )
}
