json.array! @reviews do |review|
  json.extract! review, :id, :title, :body, :rating, :created_at, :user
end