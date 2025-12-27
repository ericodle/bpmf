class User < ApplicationRecord
  has_many :lesson_progresses, dependent: :destroy
  has_many :achievements, dependent: :destroy
  has_many :lessons, through: :lesson_progresses
  
  validates :name, presence: true
  
  def total_points
    lesson_progresses.sum(:points_earned)
  end
  
  def current_level
    (total_points / 100) + 1
  end
  
  def points_for_next_level
    (current_level * 100) - total_points
  end
  
  def completed_lessons_count
    lesson_progresses.where(completed: true).count
  end
  
  def progress_percentage
    total_lessons = Lesson.count
    return 0 if total_lessons.zero?
    (completed_lessons_count.to_f / total_lessons * 100).round
  end
end

