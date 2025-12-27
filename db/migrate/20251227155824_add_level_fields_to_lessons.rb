class AddLevelFieldsToLessons < ActiveRecord::Migration[7.1]
  def change
    add_column :lessons, :keyboard_prompt, :string
    add_column :lessons, :keyboard_answer, :string
    add_column :lessons, :tone_mark, :string
    add_column :lessons, :word, :string
    add_column :lessons, :word_meaning, :string
  end
end
