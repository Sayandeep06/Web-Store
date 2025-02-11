import { navLinks } from "../constants"

const Sidebar = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <>
      {/* Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40"
          onClick={toggleSidebar}
        />
      )}
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-[300px] bg-[#1D1D1F] z-50
          transform transition-transform duration-300 ease-in-out
          ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}
          overflow-y-auto`}
      >
        <div className='flex flex-col h-full'>
          <div className='flex justify-end p-6'>
            <button
              onClick={toggleSidebar}
              className='text-white hover:text-gray-300 transition-colors p-2'
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav className='flex-1 px-8 py-6'>
            <ul className='flex flex-col gap-6'>
              {navLinks.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={toggleSidebar}
                    className='text-gray-200 hover:text-white text-xl font-montserrat 
                      transition-colors duration-300 block py-2
                      border-b border-gray-800 hover:border-gray-700'
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className='px-8 py-6 border-t border-gray-800'>
            <p className='text-gray-400 text-sm font-montserrat'>
              © 2024 Nike. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidebar
