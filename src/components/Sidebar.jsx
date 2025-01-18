import { navLinks } from "../constants"

const Sidebar = ({toggleSidebar,isSidebarOpen}) => {
  return (
      <div
        className={`fixed top-0 right-0 h-full bg-white shadow-lg z-40 transform transition-transform duration-300 ${
          isSidebarOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-end p-20">
          <button
            onClick={toggleSidebar}
            className="text-slate-800 font-bold text-lg"
          >
            Close ✖️
          </button>
        </div>
        <ul className="flex flex-col items-center gap-5 mt-10">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={toggleSidebar}
                className="font-montserrat font-semibold leading-normal text-lg text-slate-800"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
  )
}

export default Sidebar
