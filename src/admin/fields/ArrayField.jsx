import { Plus, Trash2, GripVertical } from 'lucide-react'

export default function ArrayField({ label, value = [], onChange, placeholder, help }) {
  const items = Array.isArray(value) ? value : []

  const add = () => onChange([...items, ''])
  const remove = (index) => onChange(items.filter((_, i) => i !== index))
  const update = (index, val) => onChange(items.map((item, i) => (i === index ? val : item)))
  const moveUp = (index) => {
    if (index === 0) return
    const next = [...items]
    ;[next[index - 1], next[index]] = [next[index], next[index - 1]]
    onChange(next)
  }

  return (
    <div>
      <label className="block text-sm font-medium text-white mb-2">{label}</label>
      {help && <p className="text-slate-300/60 text-xs mb-2">{help}</p>}
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-2">
            <button type="button" onClick={() => moveUp(i)} className="text-slate-300/40 hover:text-slate-300 p-1" title="Move up">
              <GripVertical className="w-4 h-4" />
            </button>
            <input
              type="text"
              value={item}
              onChange={(e) => update(i, e.target.value)}
              placeholder={placeholder}
              className="flex-1 px-3 py-2 bg-navy-900 border border-navy-800 rounded-lg text-white text-sm placeholder-slate-300/50 focus:outline-none focus:border-gold-400 transition-colors"
            />
            <button type="button" onClick={() => remove(i)} className="text-red-400/60 hover:text-red-400 p-1">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
      <button type="button" onClick={add} className="mt-2 flex items-center gap-1 text-gold-400 text-sm hover:text-gold-300">
        <Plus className="w-4 h-4" /> Add item
      </button>
    </div>
  )
}
