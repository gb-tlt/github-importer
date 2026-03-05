import { useState, useEffect } from 'react'
import { supabase } from '../../supabase/config'
import { useAdmin } from '../../hooks/useAdmin'
import { ObjectArrayField } from '../fields'
import SectionCard from '../components/SectionCard'
import SaveButton from '../components/SaveButton'
import Toast from '../components/Toast'
import { collectionsSchema } from '../schemas/collections'

export default function CollectionEditor() {
  const [data, setData] = useState({})
  const [saving, setSaving] = useState({})
  const [toast, setToast] = useState(null)
  const [loaded, setLoaded] = useState(false)
  const [activeTab, setActiveTab] = useState('services')
  const { saveCollection } = useAdmin()

  useEffect(() => {
    async function load() {
      try {
        const { data: rows } = await supabase
          .from('collections')
          .select('id, data')
        const allData = {}
        ;(rows || []).forEach((row) => {
          allData[row.id] = row.data
        })
        setData(allData)
      } catch (err) {
        console.warn('Failed to load collections:', err.message)
      }
      setLoaded(true)
    }
    load()
  }, [])

  const handleSave = async (collectionName) => {
    setSaving((prev) => ({ ...prev, [collectionName]: true }))
    try {
      await saveCollection(collectionName, data[collectionName] || {})
      setToast({ message: `${collectionName} saved!`, type: 'success' })
    } catch (err) {
      setToast({ message: 'Save failed: ' + err.message, type: 'error' })
    } finally {
      setSaving((prev) => ({ ...prev, [collectionName]: false }))
    }
  }

  const tabs = ['services', 'testimonials', 'faq', 'layers', 'credentials']

  if (!loaded) return <div className="text-slate-300">Loading collections...</div>

  return (
    <div>
      <div className="mb-8">
        <h1 className="font-display text-3xl font-bold text-white">Collections</h1>
        <p className="text-slate-300/60 text-sm mt-1">Shared data used across multiple pages.</p>
      </div>

      <div className="flex gap-2 mb-6 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              activeTab === tab ? 'bg-gold-400 text-navy-950' : 'bg-navy-900 text-slate-300 hover:text-white border border-navy-800'
            }`}
          >
            {collectionsSchema[tab]?.label || tab}
          </button>
        ))}
      </div>

      {activeTab === 'faq' ? (
        <FaqEditor data={data} setData={setData} saving={saving} onSave={handleSave} />
      ) : (
        <ItemsEditor
          collectionName={activeTab}
          schema={collectionsSchema[activeTab]}
          data={data}
          setData={setData}
          saving={saving}
          onSave={handleSave}
        />
      )}

      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
    </div>
  )
}

function ItemsEditor({ collectionName, schema, data, setData, saving, onSave }) {
  const items = data[collectionName]?.items || []

  const handleChange = (newItems) => {
    setData((prev) => ({
      ...prev,
      [collectionName]: { ...(prev[collectionName] || {}), items: newItems },
    }))
  }

  return (
    <SectionCard title={schema.label}>
      <ObjectArrayField
        label={`${schema.label} (${items.length} items)`}
        value={items}
        onChange={handleChange}
        fields={schema.fields}
      />
      <div className="pt-2">
        <SaveButton onClick={() => onSave(collectionName)} saving={saving[collectionName]} />
      </div>
    </SectionCard>
  )
}

function FaqEditor({ data, setData, saving, onSave }) {
  const schema = collectionsSchema.faq
  const faqData = data.faq || {}

  return (
    <div className="space-y-6">
      {Object.entries(schema.sections).map(([key, label]) => {
        const items = faqData[key] || []
        return (
          <SectionCard key={key} title={label}>
            <ObjectArrayField
              label={`${label} (${items.length} items)`}
              value={items}
              onChange={(newItems) => {
                setData((prev) => ({
                  ...prev,
                  faq: { ...(prev.faq || {}), [key]: newItems },
                }))
              }}
              fields={schema.itemFields}
            />
            <div className="pt-2">
              <SaveButton onClick={() => onSave('faq')} saving={saving.faq} />
            </div>
          </SectionCard>
        )
      })}
    </div>
  )
}
