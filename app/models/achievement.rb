class Achievement < ApplicationRecord
  belongs_to :user
  
  validates :title, :description, presence: true
  
  scope :recent, -> { order(created_at: :desc) }
end

