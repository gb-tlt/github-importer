import { createContext, useContext, useState, useEffect } from 'react'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase/config'

const ContentContext = createContext({ content: {}, collections: {}, loading: true })

export function ContentProvider({ children }) {
  const [content, setContent] = useState({})
  const [collections, setCollections] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function loadContent() {
      try {
        const [contentSnap, collectionsSnap] = await Promise.all([
          getDocs(collection(db, 'content')),
          getDocs(collection(db, 'collections')),
        ])

        const contentData = {}
        contentSnap.forEach((doc) => {
          contentData[doc.id] = doc.data()
        })

        const collectionsData = {}
        collectionsSnap.forEach((doc) => {
          collectionsData[doc.id] = doc.data()
        })

        setContent(contentData)
        setCollections(collectionsData)
      } catch (err) {
        console.warn('Firebase content load failed, using fallback defaults:', err.message)
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
