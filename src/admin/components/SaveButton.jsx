import { Save, Loader2 } from 'lucide-react'

export default function SaveButton({ onClick, saving, disabled }) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={saving || disabled}
      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold-400 text-navy-950 font-semibold rounded-lg hover:bg-gold-300 transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
    >
      {saving ? <Loader2 className="w-4 h-4 animate-spin" /> : <Save className="w-4 h-4" />}
      {saving ? 'Saving...' : 'Save Changes'}
    </button>
  )
}
