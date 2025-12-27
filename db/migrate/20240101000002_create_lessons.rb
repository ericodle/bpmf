class CreateLessons < ActiveRecord::Migration[7.1]
  def change
    create_table :lessons do |t|
      t.string :title, null: false
      t.text :content, null: false
      t.integer :order, null: false
      t.string :bpmf_symbol
      t.string :pronunciation
      t.text :examples
      t.string :lesson_type, default: 'introduction'
      t.timestamps
    end
    
    add_index :lessons, :order, unique: true
  end
end

