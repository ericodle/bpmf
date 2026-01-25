class User < ApplicationRecord
  has_many :lesson_progresses, dependent: :destroy
  
  validates :name, presence: true
end

