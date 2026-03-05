import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext'

export default function AdminLogin() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      await login(email, password)
      navigate('/admin')
    } catch (err) {
      setError('Invalid credentials. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-navy-950 flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="font-display text-3xl font-bold text-white">
            TLT <span className="text-gold-400">Admin</span>
          </h1>
          <p className="text-slate-300/60 text-sm mt-2">Sign in to manage website content</p>
        </div>

        <div className="bg-navy-900 rounded-2xl p-8 border border-navy-800">
          <form onSubmit={handleSubmit} className="space-y-5">
            {error && (
              <div className="bg-red-900/30 border border-red-800 rounded-lg px-4 py-3 text-red-300 text-sm">
                {error}
              </div>
            )}
            <div>
              <label className="block text-sm font-medium text-white mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 bg-navy-950 border border-navy-800 rounded-lg text-white placeholder-slate-300/50 focus:outline-none focus:border-gold-400 transition-colors"
                placeholder="admin@theleadershiptattva.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-white mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-3 bg-navy-950 border border-navy-800 rounded-lg text-white placeholder-slate-300/50 focus:outline-none focus:border-gold-400 transition-colors"
                placeholder="Enter password"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-gold-400 text-navy-950 font-semibold rounded-lg hover:bg-gold-300 transition-colors disabled:opacity-50"
            >
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
