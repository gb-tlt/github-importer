import { useEffect } from 'react'
import { CheckCircle, AlertCircle, X } from 'lucide-react'

export default function Toast({ message, type = 'success', onClose }) {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000)
    return () => clearTimeout(timer)
  }, [onClose])

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-slide-up">
      <div className={`flex items-center gap-3 px-5 py-3 rounded-xl shadow-lg border ${
        type === 'success' ? 'bg-green-900/90 border-green-700 text-green-200' : 'bg-red-900/90 border-red-700 text-red-200'
      }`}>
        {type === 'success' ? <CheckCircle className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
        <span className="text-sm font-medium">{message}</span>
        <button onClick={onClose} className="ml-2 opacity-60 hover:opacity-100">
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
