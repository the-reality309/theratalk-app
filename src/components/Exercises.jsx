import { useState } from 'react'
import { Wind, User, Heart, Brain, UserCheck, Edit3 } from 'lucide-react'
import ExerciseDetail from './ExerciseDetail'

const Exercises = () => {
  const [selectedExercise, setSelectedExercise] = useState(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)

  const exercises = [
    {
      id: 1,
      title: "Breathing Exercise",
      icon: Wind,
      filled: true
    },
    {
      id: 2,
      title: "Mindfulness Meditation",
      icon: User,
      filled: false
    },
    {
      id: 3,
      title: "Gratitude Practice",
      icon: Heart,
      filled: false
    },
    {
      id: 4,
      title: "Progressive Muscle Relaxation",
      icon: Brain,
      filled: true
    },
    {
      id: 5,
      title: "Cognitive Restructuring",
      icon: UserCheck,
      filled: true
    },
    {
      id: 6,
      title: "Journaling Prompts",
      icon: Edit3,
      filled: false
    }
  ]

  const handleExerciseClick = (exercise) => {
    setSelectedExercise(exercise)
    setIsDetailOpen(true)
  }

  const closeDetail = () => {
    setIsDetailOpen(false)
    setSelectedExercise(null)
  }

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="theratalk-header">
        <h1 className="theratalk-title">TheraTalk</h1>
      </div>

      {/* Content */}
      <div className="content-area">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Therapeutic Exercises</h2>
        </div>

        {/* Exercise Grid */}
        <div className="exercise-grid">
          {exercises.map((exercise) => {
            const Icon = exercise.icon
            return (
              <div
                key={exercise.id}
                className={`exercise-card ${exercise.filled ? 'filled' : ''} cursor-pointer`}
                onClick={() => handleExerciseClick(exercise)}
              >
                <div className="w-12 h-12 flex items-center justify-center mb-3">
                  <Icon size={32} />
                </div>
                <h3 className="text-sm font-semibold text-center leading-tight">
                  {exercise.title}
                </h3>
              </div>
            )
          })}
        </div>
      </div>

      {/* Exercise Detail Modal */}
      <ExerciseDetail 
        exercise={selectedExercise}
        isOpen={isDetailOpen}
        onClose={closeDetail}
      />
    </div>
  )
}

export default Exercises

