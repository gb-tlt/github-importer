export default function TextField({ label, value, onChange, placeholder, help }) {
  return (
    <div>
      <label className="block text-sm font-medium text-white mb-2">{label}</label>
      <input
        type="text"
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 bg-navy-900 border border-navy-800 rounded-lg text-white placeholder-slate-300/50 focus:outline-none focus:border-gold-400 transition-colors"
      />
      {help && <p className="text-slate-300/60 text-xs mt-1">{help}</p>}
    </div>
  )
}
