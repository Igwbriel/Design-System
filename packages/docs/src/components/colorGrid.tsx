import { colors } from '@ignite-ui/tokens'
import { getContrast } from 'polished'

export function ColorsGrid() {
  return Object.entries(colors).map(([key, color]) => {
    const isValidColor = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/.test(color)

    if (!isValidColor) {
      console.error(`Cor inválida para a chave ${key}: ${color}`)
      return null
    }

    return (
      <div key={key} style={{ backgroundColor: color, padding: '2rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'monospace',
            color: getContrast(color, '#FFF') < 3.5 ? '#000' : '#FFF',
          }}
        >
          <strong>${key}</strong>
          <span>{color}</span>
        </div>
      </div>
    )
  })
}
