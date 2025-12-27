class CreateUsers < ActiveRecord::Migration[7.1]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :session_id
      t.timestamps
    end
    
    add_index :users, :session_id
  end
end

