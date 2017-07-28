class CreateReviews < ActiveRecord::Migration[5.0]
  def change
    create_table :reviews do |t|
      t.string :business_id
      t.integer :user_id
      t.integer :rating
      t.timestamps
    end
  end
end
