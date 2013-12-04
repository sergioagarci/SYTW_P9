source "https://rubygems.org"

gem "sinatra"
gem 'haml'


group :development do
  gem "do_sqlite3" 
   gem "dm-sqlite-adapter"
end

gem "sass"
gem 'thin'
gem "dm-core"
gem "dm-migrations"

group :production do
  gem "pg", :group => :production
  gem "dm-postgres-adapter", :group => :production
end
