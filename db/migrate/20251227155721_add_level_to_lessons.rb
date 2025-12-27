class AddLevelToLessons < ActiveRecord::Migration[7.1]
  def change
    add_column :lessons, :level, :integer, default: 1, null: false
  end
end
