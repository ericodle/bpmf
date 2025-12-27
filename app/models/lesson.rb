class Lesson < ApplicationRecord
  has_many :lesson_progresses, dependent: :destroy
  has_many :users, through: :lesson_progresses
  
  validates :title, :content, :order, presence: true
  validates :order, uniqueness: true
  
  scope :ordered, -> { order('"order"') }
  
  def next_lesson
    Lesson.where('"order" > ?', self.order).ordered.first
  end
  
  def previous_lesson
    Lesson.where('"order" < ?', self.order).ordered.last
  end
  
  def first_lesson?
    self.order == 1
  end
end

