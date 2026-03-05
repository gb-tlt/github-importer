import { supabase } from '../supabase/config'

export function useAdmin() {
  const saveContent = async (pageName, sectionData) => {
    // First get existing data
    const { data: existing } = await supabase
      .from('content')
      .select('data')
      .eq('id', pageName)
      .single()

    const merged = { ...(existing?.data || {}), ...sectionData }

    const { error } = await supabase
      .from('content')
      .upsert({ id: pageName, data: merged })

    if (error) throw error
  }

  const saveCollection = async (name, data) => {
    const { error } = await supabase
      .from('collections')
      .upsert({ id: name, data })

    if (error) throw error
  }

  const uploadImage = async (file, path) => {
    const filePath = path || `images/${Date.now()}-${file.name}`
    const { error } = await supabase.storage
      .from('media')
      .upload(filePath, file, { upsert: true })

    if (error) throw error

    const { data } = supabase.storage
      .from('media')
      .getPublicUrl(filePath)

    return data.publicUrl
  }

  return { saveContent, saveCollection, uploadImage }
}
