import { useContentContext } from '../contexts/ContentContext'

export function useContent(pageName) {
  const { content, loading } = useContentContext()
  return { content: content[pageName] || {}, loading }
}
