import { useState } from 'react'
import { Upload } from 'lucide-react'
import { useAdmin } from '../../hooks/useAdmin'

export default function ImageUploadField({ label, value, onChange, path, help }) {
  const [uploading, setUploading] = useState(false)
  const { uploadImage } = useAdmin()

  const handleUpload = async (e) => {
    const file = e.target.files?.[0]
    if (!file) return

    setUploading(true)
    try {
      const url = await uploadImage(file, path || `images/${Date.now()}-${file.name}`)
      onChange(url)
    } catch (err) {
      alert('Upload failed: ' + err.message)
    } finally {
      setUploading(false)
    }
  }

  return (
    <div>
      <label className="block text-sm font-medium text-white mb-2">{label}</label>
      {help && <p className="text-slate-300/60 text-xs mb-2">{help}</p>}
      {value && (
        <div className="mb-3">
          <img src={value} alt="Preview" className="w-32 h-32 object-cover rounded-lg border border-navy-800" />
        </div>
      )}
      <label className="inline-flex items-center gap-2 px-4 py-2 bg-navy-900 border border-navy-800 rounded-lg text-sm text-slate-300 hover:border-gold-400 cursor-pointer transition-colors">
        <Upload className="w-4 h-4" />
        {uploading ? 'Uploading...' : 'Choose File'}
        <input type="file" accept="image/*" onChange={handleUpload} className="hidden" disabled={uploading} />
      </label>
      {value && (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full mt-2 px-3 py-2 bg-navy-900 border border-navy-800 rounded-lg text-white text-xs focus:outline-none focus:border-gold-400"
          placeholder="Or paste image URL"
        />
      )}
    </div>
  )
}
