import { Navigate, Outlet } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'
import AdminSidebar from './components/AdminSidebar'

export default function AdminLayout() {
  const { user, loading } = useAuth()

  if (loading) {
    return (
      <div className="min-h-screen bg-navy-950 flex items-center justify-center">
        <div className="text-gold-400 font-display text-xl">Loading...</div>
      </div>
    )
  }

  if (!user) {
    return <Navigate to="/admin/login" replace />
  }

  return (
    <div className="min-h-screen bg-navy-950 flex">
      <AdminSidebar />
      <main className="flex-1 p-8 overflow-y-auto max-h-screen">
        <Outlet />
      </main>
    </div>
  )
}
