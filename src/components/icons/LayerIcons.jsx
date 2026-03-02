export function BodyIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="12" r="6" stroke="currentColor" strokeWidth="2"/>
      <path d="M16 22h16M24 22v14M18 42l6-6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function EnergyIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M28 4L16 24h8l-4 20 16-24h-8l4-16z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

export function MindIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M24 4C14 4 6 12 6 22c0 6 3 11 8 14v8h20v-8c5-3 8-8 8-14C42 12 34 4 24 4z" stroke="currentColor" strokeWidth="2"/>
      <path d="M18 36v-4M30 36v-4M24 22v-6M20 16h8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

export function JudgmentIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 24h32M24 8v32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
      <circle cx="32" cy="32" r="4" stroke="currentColor" strokeWidth="2"/>
      <rect x="28" y="12" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
      <rect x="12" y="28" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="2"/>
    </svg>
  )
}

export function IdentityIcon({ className = 'w-10 h-10' }) {
  return (
    <svg className={className} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="24" cy="24" r="18" stroke="currentColor" strokeWidth="2"/>
      <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 3"/>
      <circle cx="24" cy="24" r="6" stroke="currentColor" strokeWidth="2"/>
      <circle cx="24" cy="24" r="2" fill="currentColor"/>
    </svg>
  )
}

const iconMap = {
  body: BodyIcon,
  energy: EnergyIcon,
  mind: MindIcon,
  judgment: JudgmentIcon,
  identity: IdentityIcon,
}

export default function LayerIcon({ type, className }) {
  const Icon = iconMap[type] || BodyIcon
  return <Icon className={className} />
}
