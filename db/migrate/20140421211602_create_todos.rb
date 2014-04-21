class CreateTodos < ActiveRecord::Migration
  def change
    create_table :todos do |t|
      t.string 'title'
      t.string 'is_completed'

      t.timestamps
    end
  end
end
