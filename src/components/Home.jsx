import { LineChart, Line, XAxis, ResponsiveContainer } from 'recharts'
import { MessageSquare, Dumbbell, BookOpen } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Home = () => {
  const moodData = [
    { day: 'Mon', mood: 6 },
    { day: 'Tue', mood: 7 },
    { day: 'Wed', mood: 5 },
    { day: 'Thu', mood: 8 },
    { day: 'Fri', mood: 6 },
    { day: 'Fri', mood: 9 }
  ]

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="theratalk-header">
        <h1 className="theratalk-title">TheraTalk</h1>
      </div>

      {/* Content */}
      <div className="content-area">
        {/* Greeting */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Good morning, Sarah</h2>
        </div>

        {/* Mood Chart */}
        <div className="mood-chart">
          <h3 className="text-lg font-semibold mb-4">Mood</h3>
          <div className="h-32">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={moodData}>
                <XAxis 
                  dataKey="day" 
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: '#666' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="mood" 
                  stroke="#7ED321" 
                  strokeWidth={3}
                  dot={{ fill: '#7ED321', strokeWidth: 0, r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Daily Journal */}
        <div className="profile-section">
          <h3 className="text-lg font-semibold mb-2">Daily Journal</h3>
          <p className="text-gray-600 mb-4">Keep track of your thoughts and feelings</p>
          <Button className="w-full bg-green-500 hover:bg-green-600 text-white rounded-full py-3">
            Continue Writing
          </Button>
        </div>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-4">Quick Actions</h3>
          <div className="quick-actions">
            <div className="quick-action">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                <MessageSquare className="text-white" size={24} />
              </div>
              <span className="text-sm font-medium">Journal</span>
            </div>
            <div className="quick-action">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                <Dumbbell className="text-white" size={24} />
              </div>
              <span className="text-sm font-medium">Exercises</span>
            </div>
            <div className="quick-action">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                <BookOpen className="text-white" size={24} />
              </div>
              <span className="text-sm font-medium">Library</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home

