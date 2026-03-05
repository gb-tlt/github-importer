import { useState, useEffect } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../firebase/config'
import { useAdmin } from '../../hooks/useAdmin'
import { TextField, TextAreaField, ArrayField, ObjectArrayField, TableField, ImageUploadField } from '../fields'
import SectionCard from '../components/SectionCard'
import SaveButton from '../components/SaveButton'
import Toast from '../components/Toast'

const fieldMap = {
  text: TextField,
  textarea: TextAreaField,
  array: ArrayField,
  objectArray: ObjectArrayField,
  table: TableField,
  image: ImageUploadField,
}

export default function PageEditor({ pageName, schema, title }) {
  const [data, setData] = useState({})
  const [saving, setSaving] = useState({})
  const [toast, setToast] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const { saveContent } = useAdmin()

  useEffect(() => {
    async function load() {
      try {
        const snap = await getDoc(doc(db, 'content', pageName))
        if (snap.exists()) setData(snap.data())
      } catch (err) {
        console.warn('Failed to load content:', err.message)
      }
      setLoaded(true)
    }
    load()
  }, [pageName])

  const updateField = (section, key, value) => {
    setData((prev) => ({
      ...prev,
      [section]: { ...(prev[section] || {}), [key]: value },
    }))
  }

  const handleSave = async (sectionKey) => {
    setSaving((prev) => ({ ...prev, [sectionKey]: true }))
    try {
      await saveContent(pageName, { [sectionKey]: data[sectionKey] || {} })
      setToast({ message: 'Saved successfully!', type: 'success' })
    } catch (err) {
      setToast({ message: 'Save failed: ' + err.message, type: 'error' })
    } finally {
      setSaving((prev) => ({ ...prev, [sectionKey]: false }))
    }
  }

  if (!loaded) {
    return <div className="text-slate-300">Loading content...</div>
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-white">{title}</h1>
        <p className="text-slate-300/60 text-sm mt-1">Edit content and click Save per section.</p>
      </div>

      <div className="space-y-6">
        {Object.entries(schema).map(([sectionKey, section]) => (
          <SectionCard key={sectionKey} title={section.label}>
            {section.fields.map((field) => {
              const Component = fieldMap[field.type]
              if (!Component) return null
              const value = data[sectionKey]?.[field.key]
              return (
                <Component
                  key={field.key}
                  label={field.label}
                  value={value}
                  onChange={(val) => updateField(sectionKey, field.key, val)}
                  placeholder={field.placeholder}
                  help={field.help}
                  path={field.path}
                  fields={field.fields}
                  columns={field.columns}
                  rows={field.rows}
                />
              )
            })}
            <div className="pt-2">
              <SaveButton onClick={() => handleSave(sectionKey)} saving={saving[sectionKey]} />
            </div>
          </SectionCard>
        ))}
      </div>

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  )
}
