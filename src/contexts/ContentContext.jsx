import { createContext, useContext, useState, useEffect } from 'react'
import { supabase } from '../supabase/config'

const ContentContext = createContext({ content: {}, collections: {}, loading: true })

export function ContentProvider({ children }) {
  const [content, setContent] = useState({})
  const [collections, setCollections] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadContent() {
      if (!supabase) {
        setLoading(false)
        return
      }
      try {
        const [contentRes, collectionsRes] = await Promise.all([
          supabase.from('content').select('id, data'),
          supabase.from('collections').select('id, data'),
        ])

        const contentData = {}
        ;(contentRes.data || []).forEach((row) => {
          contentData[row.id] = row.data
        })

        const collectionsData = {}
        ;(collectionsRes.data || []).forEach((row) => {
          collectionsData[row.id] = row.data
        })

        setContent(contentData)
        setCollections(collectionsData)
      } catch (err) {
        console.warn('Supabase content load failed, using fallback defaults:', err.message)
      } finally {
        setLoading(false)
      }
    }

    loadContent()
  }, [])

  return (
    <ContentContext.Provider value={{ content, collections, loading }}>
      {children}
    </ContentContext.Provider>
  )
}

export function useContentContext() {
  return useContext(ContentContext)
}
