import { Plus, Trash2, ChevronDown, ChevronRight } from 'lucide-react'
import { useState } from 'react'

export default function ObjectArrayField({ label, value = [], onChange, fields, help }) {
  const [expanded, setExpanded] = useState({})
  const items = Array.isArray(value) ? value : []

  const add = () => {
    const newItem = {}
    fields.forEach((f) => { newItem[f.key] = f.type === 'array' ? [] : '' })
    const newItems = [...items, newItem]
    onChange(newItems)
    setExpanded({ ...expanded, [newItems.length - 1]: true })
  }

  const remove = (index) => onChange(items.filter((_, i) => i !== index))

  const update = (index, key, val) => {
    onChange(items.map((item, i) => (i === index ? { ...item, [key]: val } : item)))
  }

  const toggle = (index) => setExpanded({ ...expanded, [index]: !expanded[index] })

  return (
    <div>
      <label className="block text-sm font-medium text-white mb-2">{label}</label>
      {help && <p className="text-slate-300/60 text-xs mb-2">{help}</p>}
      <div className="space-y-2">
        {items.map((item, i) => {
          const titleField = fields[0]?.key
          const title = item[titleField] || `Item ${i + 1}`
          const isOpen = expanded[i]

          return (
            <div key={i} className="bg-navy-900 border border-navy-800 rounded-lg overflow-hidden">
              <div
                className="flex items-center gap-2 px-4 py-3 cursor-pointer hover:bg-navy-800/50"
                onClick={() => toggle(i)}
              >
                {isOpen ? <ChevronDown className="w-4 h-4 text-gold-400" /> : <ChevronRight className="w-4 h-4 text-slate-300" />}
                <span className="text-white text-sm flex-1 truncate">{typeof title === 'string' ? title.slice(0, 80) : `Item ${i + 1}`}</span>
                <button
                  type="button"
                  onClick={(e) => { e.stopPropagation(); remove(i) }}
                  className="text-red-400/60 hover:text-red-400 p-1"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
              {isOpen && (
                <div className="px-4 pb-4 space-y-3 border-t border-navy-800">
                  {fields.map((f) => (
                    <div key={f.key} className="mt-3">
                      <label className="block text-xs font-medium text-slate-300 mb-1">{f.label}</label>
                      {f.type === 'textarea' ? (
                        <textarea
                          value={item[f.key] || ''}
                          onChange={(e) => update(i, f.key, e.target.value)}
                          rows={3}
                          className="w-full px-3 py-2 bg-navy-950 border border-navy-800 rounded-lg text-white text-sm placeholder-slate-300/50 focus:outline-none focus:border-gold-400 transition-colors resize-y"
                        />
                      ) : f.type === 'array' ? (
                        <ArraySubField
                          value={item[f.key] || []}
                          onChange={(val) => update(i, f.key, val)}
                          placeholder={f.placeholder}
                        />
                      ) : (
                        <input
                          type="text"
                          value={item[f.key] || ''}
                          onChange={(e) => update(i, f.key, e.target.value)}
                          placeholder={f.placeholder}
                          className="w-full px-3 py-2 bg-navy-950 border border-navy-800 rounded-lg text-white text-sm placeholder-slate-300/50 focus:outline-none focus:border-gold-400 transition-colors"
                        />
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </div>
      <button type="button" onClick={add} className="mt-2 flex items-center gap-1 text-gold-400 text-sm hover:text-gold-300">
        <Plus className="w-4 h-4" /> Add item
      </button>
    </div>
  )
}

function ArraySubField({ value = [], onChange, placeholder }) {
  const items = Array.isArray(value) ? value : []
  const add = () => onChange([...items, ''])
  const remove = (index) => onChange(items.filter((_, i) => i !== index))
  const update = (index, val) => onChange(items.map((item, i) => (i === index ? val : item)))

  return (
    <div className="space-y-1">
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-1">
          <input
            type="text"
            value={item}
            onChange={(e) => update(i, e.target.value)}
            placeholder={placeholder}
            className="flex-1 px-2 py-1.5 bg-navy-950 border border-navy-800 rounded text-white text-xs focus:outline-none focus:border-gold-400"
          />
          <button type="button" onClick={() => remove(i)} className="text-red-400/60 hover:text-red-400 p-0.5">
            <Trash2 className="w-3 h-3" />
          </button>
        </div>
      ))}
      <button type="button" onClick={add} className="flex items-center gap-1 text-gold-400 text-xs hover:text-gold-300">
        <Plus className="w-3 h-3" /> Add
      </button>
    </div>
  )
}
