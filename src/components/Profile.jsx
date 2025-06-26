import { 
  User, 
  Target, 
  BarChart3, 
  Bell, 
  Shield, 
  HelpCircle, 
  LogOut,
  ChevronRight 
} from 'lucide-react'
import sarahProfile from '../assets/sarah-profile.jpg'

const Profile = () => {
  const profileItems = [
    {
      id: 1,
      title: "Personal Information",
      icon: User,
      color: "bg-green-500"
    },
    {
      id: 2,
      title: "Therapy Goals",
      icon: Target,
      color: "bg-green-500"
    },
    {
      id: 3,
      title: "Progress Summary",
      icon: BarChart3,
      color: "bg-green-500"
    },
    {
      id: 4,
      title: "Notification Settings",
      icon: Bell,
      color: "bg-green-500"
    },
    {
      id: 5,
      title: "Privacy & Security",
      icon: Shield,
      color: "bg-green-500"
    },
    {
      id: 6,
      title: "Help & Support",
      icon: HelpCircle,
      color: "bg-green-500"
    },
    {
      id: 7,
      title: "Sign Out",
      icon: LogOut,
      color: "bg-green-500"
    }
  ]

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="theratalk-header">
        <h1 className="theratalk-title">TheraTalk</h1>
      </div>

      {/* Content */}
      <div className="content-area">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Profile</h2>
          
          {/* User Info */}
          <div className="flex items-center mb-8">
            <img 
              src={sarahProfile} 
              alt="Sarah Johnson" 
              className="w-16 h-16 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="text-xl font-semibold text-gray-900">Sarah Johnson</h3>
            </div>
          </div>
        </div>

        {/* Profile Menu */}
        <div className="space-y-1">
          {profileItems.map((item) => {
            const Icon = item.icon
            return (
              <div key={item.id} className="profile-item">
                <div className="flex items-center">
                  <div className={`w-8 h-8 ${item.color} rounded-full flex items-center justify-center mr-3`}>
                    <Icon size={16} className="text-white" />
                  </div>
                  <span className="text-gray-900 font-medium">{item.title}</span>
                </div>
                <ChevronRight size={20} className="text-gray-400" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Profile

