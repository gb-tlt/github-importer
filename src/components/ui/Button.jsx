import { Link } from 'react-router-dom'
import { trackCtaClick } from '../../lib/trackClick'

export default function Button({ children, to, href, variant = 'primary', size = 'md', className = '', trackId, onClick, ...props }) {
  const handleClick = (e) => {
    if (trackId) trackCtaClick(trackId)
    if (onClick) onClick(e)
  }
  const base = 'inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 cursor-pointer'

  const variants = {
    primary: 'bg-gold-400 text-navy-950 hover:bg-gold-300 hover:shadow-lg hover:shadow-gold-400/20 hover:-translate-y-0.5',
    secondary: 'border-2 border-white text-white hover:bg-white hover:text-navy-950',
    outline: 'border-2 border-gold-400 text-gold-400 hover:bg-gold-400 hover:text-navy-950',
    dark: 'bg-navy-900 text-white hover:bg-navy-800',
  }

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    md: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4 text-lg',
  }

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${className}`

  if (to) {
    return <Link to={to} className={classes} {...props}>{children}</Link>
  }
  if (href) {
    return <a href={href} className={classes} {...props}>{children}</a>
  }
  return <button className={classes} {...props}>{children}</button>
}
