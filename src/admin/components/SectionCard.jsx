export default function SectionCard({ title, children }) {
  return (
    <div className="bg-navy-900 rounded-2xl border border-navy-800 overflow-hidden">
      <div className="px-6 py-4 border-b border-navy-800 bg-navy-800/50">
        <h3 className="text-white font-semibold">{title}</h3>
      </div>
      <div className="p-6 space-y-4">
        {children}
      </div>
    </div>
  )
}
