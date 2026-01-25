class Lesson < ApplicationRecord
  has_many :lesson_progresses, dependent: :destroy
  
  validates :order, uniqueness: true
  
  scope :by_level, ->(level) { where(level: level) }
end

