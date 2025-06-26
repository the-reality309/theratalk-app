import { useNavigate, useLocation } from 'react-router-dom'
import { Home, MessageCircle, Dumbbell, User } from 'lucide-react'

const Navigation = () => {
  const navigate = useNavigate()
  const location = useLocation()

  const navItems = [
    { id: 'home', label: 'Home', icon: Home, path: '/home' },
    { id: 'chat', label: 'Chat', icon: MessageCircle, path: '/chat' },
    { id: 'exercises', label: 'Exercises', icon: Dumbbell, path: '/exercises' },
    { id: 'profile', label: 'Profile', icon: User, path: '/profile' }
  ]

  const currentPath = location.pathname === '/' ? '/home' : location.pathname

  return (
    <div className="navigation-bar">
      <div className="flex justify-around items-center h-full">
        {navItems.map((item) => {
          const Icon = item.icon
          const isActive = currentPath === item.path
          
          return (
            <button
              key={item.id}
              onClick={() => navigate(item.path)}
              className={`nav-item ${isActive ? 'active' : 'inactive'}`}
            >
              <Icon size={24} className="mb-1" />
              <span className="text-xs font-medium">{item.label}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Navigation

