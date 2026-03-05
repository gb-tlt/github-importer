import { Plus, Trash2 } from 'lucide-react'

export default function TableField({ label, value = [], onChange, columns, help }) {
  const rows = Array.isArray(value) ? value : []

  const add = () => onChange([...rows, columns.map(() => '')])
  const remove = (index) => onChange(rows.filter((_, i) => i !== index))
  const update = (rowIndex, colIndex, val) => {
    onChange(rows.map((row, i) => (i === rowIndex ? row.map((cell, j) => (j === colIndex ? val : cell)) : row)))
  }

  return (
    <div>
      <label className="block text-sm font-medium text-white mb-2">{label}</label>
      {help && <p className="text-slate-300/60 text-xs mb-2">{help}</p>}
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr>
              {columns.map((col, i) => (
                <th key={i} className="text-left text-xs font-medium text-slate-300 pb-2 pr-2">{col}</th>
              ))}
              <th className="w-8" />
            </tr>
          </thead>
          <tbody>
            {rows.map((row, ri) => (
              <tr key={ri}>
                {(Array.isArray(row) ? row : []).map((cell, ci) => (
                  <td key={ci} className="pr-2 pb-2">
                    <input
                      type="text"
                      value={cell || ''}
                      onChange={(e) => update(ri, ci, e.target.value)}
                      className="w-full px-2 py-1.5 bg-navy-900 border border-navy-800 rounded text-white text-xs focus:outline-none focus:border-gold-400"
                    />
                  </td>
                ))}
                <td className="pb-2">
                  <button type="button" onClick={() => remove(ri)} className="text-red-400/60 hover:text-red-400 p-1">
                    <Trash2 className="w-3 h-3" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button type="button" onClick={add} className="mt-1 flex items-center gap-1 text-gold-400 text-xs hover:text-gold-300">
        <Plus className="w-3 h-3" /> Add row
      </button>
    </div>
  )
}
