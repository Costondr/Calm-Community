export default function Footer() {
  return (
    <footer className="bg-calm-dark text-gray-400 text-sm py-8 px-6 mt-16">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-calm-warm font-serif text-base mb-1">CALM Community</p>
        <p className="mb-3">Connecting & Activating Lives with Meaning</p>
        <p className="text-xs text-gray-500">
          This blog is for informational and community connection purposes only. It does not constitute medical advice.
          Always consult your diabetes care team regarding your individual management.
        </p>
        <p className="mt-4 text-xs text-gray-600">© {new Date().getFullYear()} CALM Community. All rights reserved.</p>
      </div>
    </footer>
  )
}
