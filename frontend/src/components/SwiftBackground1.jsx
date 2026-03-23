import { useEffect, useRef } from 'react'

const SWIFT_KEYWORDS = [
  'enum', 'self', 'let', 'await', 'extension', 'View',
  'import', 'switch', 'var', 'return', 'some', 'SwiftUI',
  'func', 'async', 'case', '[]', 'if', 'true', 'false',
  'nil', 'in', 'protocol', 'struct', 'class', 'guard',
  'throws', 'try', 'defer', 'where', 'mutating', 'static',
  '@State', 'init', 'override', '->', '{', '}', 'for',
]

const SwiftBackground = () => {
  const canvasRef = useRef(null)
  const animRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Grid-based placement ensures even spread — no clumping
    const gridSpread = (count, w, h, jitter = 0.8) => {
      const cols = Math.ceil(Math.sqrt(count * (w / h)))
      const rows = Math.ceil(count / cols)
      const cellW = w / cols
      const cellH = h / rows
      const points = []
      for (let r = 0; r < rows && points.length < count; r++) {
        for (let c = 0; c < cols && points.length < count; c++) {
          points.push({
            x: cellW * c + cellW * (0.5 - jitter / 2 + Math.random() * jitter),
            y: cellH * r + cellH * (0.5 - jitter / 2 + Math.random() * jitter),
          })
        }
      }
      return points
    }

    // --- Floating words (no connections, no dots) ---
    const wordPositions = gridSpread(SWIFT_KEYWORDS.length, canvas.width, canvas.height)
    const words = SWIFT_KEYWORDS.map((label, i) => ({
      x: wordPositions[i].x,
      y: wordPositions[i].y,
      vx: (Math.random() - 0.5) * 0.28,
      vy: (Math.random() - 0.5) * 0.28,
      label,
      bold: Math.random() < 0.15,
      opacity: 0.18 + Math.random() * 0.28,
      fontSize: 11 + Math.random() * 5,
    }))

    // --- Constellation nodes (dots + lines, NO labels) ---
    const NODE_COUNT = 55
    const nodePositions = gridSpread(NODE_COUNT, canvas.width, canvas.height)
    const nodes = nodePositions.map((pos) => ({
      x: pos.x,
      y: pos.y,
      vx: (Math.random() - 0.5) * 0.32,
      vy: (Math.random() - 0.5) * 0.32,
      r: 1.5 + Math.random() * 2,
      opacity: 0.25 + Math.random() * 0.3,
    }))

    const CONNECT_DIST = 140

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update constellation nodes
      for (const node of nodes) {
        node.x += node.vx
        node.y += node.vy
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1
      }

      // Draw lines between close nodes
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.18
            ctx.beginPath()
            ctx.strokeStyle = `rgba(80, 80, 80, ${alpha})`
            ctx.lineWidth = 0.8
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw constellation dots
      for (const node of nodes) {
        ctx.beginPath()
        ctx.arc(node.x, node.y, node.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(60, 60, 60, ${node.opacity})`
        ctx.fill()
      }

      // Update & draw floating words (completely separate, no dots, no lines)
      for (const word of words) {
        word.x += word.vx
        word.y += word.vy
        if (word.x < -80 || word.x > canvas.width + 80) word.vx *= -1
        if (word.y < 0 || word.y > canvas.height) word.vy *= -1

        ctx.font = `${word.bold ? '600' : '400'} ${word.fontSize}px 'SF Mono', 'Fira Code', monospace`
        ctx.fillStyle = `rgba(60, 60, 60, ${word.opacity})`
        ctx.fillText(word.label, word.x, word.y)
      }

      animRef.current = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      cancelAnimationFrame(animRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  )
}

export default SwiftBackground
