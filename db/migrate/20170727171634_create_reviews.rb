class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.string :business_id
      t.integer :user_id
      t.integer :rating
      t.string :title
      t.string :body
      t.timestamps
    end
    add_index :reviews, :business_id
  end
end
