class Review < ApplicationRecord
  validates :user, :business, :title, :body, :rating, presence: true
  validates :rating, inclusion: { in: [0, 1] }

  belongs_to :user
  belongs_to :business
end
