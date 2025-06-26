import { X, Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'

const ExerciseDetail = ({ exercise, isOpen, onClose }) => {
  if (!isOpen || !exercise) return null

  const exerciseContent = {
    1: {
      title: "Breathing Exercise",
      description: "A simple breathing technique to help reduce stress and anxiety.",
      instructions: [
        "Find a comfortable seated position",
        "Close your eyes and relax your shoulders",
        "Breathe in slowly through your nose for 4 counts",
        "Hold your breath for 4 counts",
        "Exhale slowly through your mouth for 6 counts",
        "Repeat this cycle 5-10 times"
      ],
      duration: "5-10 minutes"
    },
    2: {
      title: "Mindfulness Meditation",
      description: "Practice being present and aware of your thoughts and feelings.",
      instructions: [
        "Sit comfortably with your back straight",
        "Close your eyes or soften your gaze",
        "Focus on your breath naturally flowing",
        "When thoughts arise, acknowledge them without judgment",
        "Gently return your attention to your breath",
        "Continue for the desired duration"
      ],
      duration: "10-20 minutes"
    },
    3: {
      title: "Gratitude Practice",
      description: "Cultivate appreciation and positive emotions through gratitude.",
      instructions: [
        "Think of three things you're grateful for today",
        "Write them down in detail",
        "Reflect on why each one is meaningful to you",
        "Feel the positive emotions associated with each",
        "Share your gratitude with someone if possible",
        "Make this a daily practice"
      ],
      duration: "5-15 minutes"
    },
    4: {
      title: "Progressive Muscle Relaxation",
      description: "Release physical tension by systematically relaxing muscle groups.",
      instructions: [
        "Lie down or sit comfortably",
        "Start with your toes - tense for 5 seconds, then relax",
        "Move up to your calves, thighs, abdomen",
        "Continue with arms, shoulders, neck, and face",
        "Notice the contrast between tension and relaxation",
        "End with a few deep breaths"
      ],
      duration: "15-30 minutes"
    },
    5: {
      title: "Cognitive Restructuring",
      description: "Challenge and reframe negative thought patterns.",
      instructions: [
        "Identify a negative or distressing thought",
        "Ask: Is this thought realistic and helpful?",
        "Look for evidence for and against the thought",
        "Consider alternative, more balanced perspectives",
        "Replace the thought with a more realistic one",
        "Practice this regularly with different thoughts"
      ],
      duration: "10-20 minutes"
    },
    6: {
      title: "Journaling Prompts",
      description: "Express and process your thoughts and emotions through writing.",
      instructions: [
        "How am I feeling right now?",
        "What challenged me today and how did I handle it?",
        "What am I grateful for in this moment?",
        "What would I like to improve about tomorrow?",
        "What positive affirmation do I need to hear?",
        "Write freely without judgment"
      ],
      duration: "10-30 minutes"
    }
  }

  const content = exerciseContent[exercise.id] || exerciseContent[1]

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full max-h-[80vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-4 flex justify-between items-center">
          <h2 className="text-xl font-bold text-gray-900">{content.title}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X size={24} />
          </Button>
        </div>
        
        <div className="p-4">
          <p className="text-gray-600 mb-4">{content.description}</p>
          
          <div className="mb-4">
            <h3 className="font-semibold text-gray-900 mb-2">Duration: {content.duration}</h3>
          </div>
          
          <div className="mb-6">
            <h3 className="font-semibold text-gray-900 mb-3">Instructions:</h3>
            <ol className="space-y-2">
              {content.instructions.map((instruction, index) => (
                <li key={index} className="flex items-start">
                  <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-700">{instruction}</span>
                </li>
              ))}
            </ol>
          </div>
          
          <div className="flex space-x-3">
            <Button className="flex-1 bg-green-500 hover:bg-green-600 text-white">
              <Play size={16} className="mr-2" />
              Start Exercise
            </Button>
            <Button variant="outline" className="flex-1">
              Save for Later
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ExerciseDetail

