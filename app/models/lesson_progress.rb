class LessonProgress < ApplicationRecord
  belongs_to :user
  belongs_to :lesson
  
  validates :user_id, uniqueness: { scope: :lesson_id }
  
  def complete!(points: 10)
    update!(
      completed: true,
      points_earned: points,
      completed_at: Time.current
    )
  end
end

