class Lesson < ApplicationRecord
  has_many :lesson_progresses, dependent: :destroy
  has_many :users, through: :lesson_progresses
  
  validates :title, :content, :order, presence: true
  validates :order, uniqueness: true
  
  scope :ordered, -> { order('"order"') }
  scope :by_level, ->(level) { where(level: level) }
  
  def next_lesson
    Lesson.where('"order" > ?', self.order).ordered.first
  end
  
  def previous_lesson
    Lesson.where('"order" < ?', self.order).ordered.last
  end
  
  def first_lesson?
    self.order == 1
  end
  
  def level_1?
    level == 1
  end
  
  def level_2?
    level == 2
  end
  
  def level_3?
    level == 3
  end
end

