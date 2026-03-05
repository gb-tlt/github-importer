export default function TextAreaField({ label, value, onChange, placeholder, rows = 4, help }) {
  return (
    <div>
      <label className="block text-sm font-medium text-white mb-2">{label}</label>
      <textarea
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-3 bg-navy-900 border border-navy-800 rounded-lg text-white placeholder-slate-300/50 focus:outline-none focus:border-gold-400 transition-colors resize-y"
      />
      {help && <p className="text-slate-300/60 text-xs mt-1">{help}</p>}
    </div>
  )
}
