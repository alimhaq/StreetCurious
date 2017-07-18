## users
column          | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## businesses
column         | data type | details
---------------|-----------|-----------------------
id             | integer   | not null, primary key
owner_id       | integer   | not null, foreign key (references users), indexed
name           | string    | not null
address        | string    | not null
city           | string    | not null
state          | string    | not null
zip            | string    | not null
hours          | integer   | not null

*Ask Dallas about implementing hours array in database

## reviews
column      | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
business_id | integer   | not null, foreign key (references businesses), indexed
title       | string    | not null
body        | text      | not null
rating      | integer   | not null

## favorites
column      | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references user), indexed
business_id | integer   | not null, foreign key (references businesses), indexed