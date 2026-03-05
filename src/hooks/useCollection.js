import { useContentContext } from '../contexts/ContentContext'

export function useCollection(name) {
  const { collections, loading } = useContentContext()
  return { data: collections[name] || {}, loading }
}
