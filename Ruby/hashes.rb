# As a developer, I can create a hash called my_phone using the Ruby method .new.

my_phone = Hash.new

# As a developer, I can add five key:value pairs of app names and their descriptions to my hash.

my_phone[:google_mail] = 'Open and interact with gmail account'
my_phone[:facebook] = 'Open and interact with facebook account'
my_phone[:youtube] = 'Watch YouTube Videos'
my_phone[:venmo] = 'Send and receive money from friends'
my_phone[:netflix] = 'Watch popular movies and tv shows.'


# As a developer, I can return a value from my_phone by passing in the name of a key.

p my_phone[:venmo]
p my_phone[:venmo_description]

# As a developer, I can update two keys in my_phone.

my_phone[:hulu] = my_phone.delete :netflix


# As a developer, I can update two values in my_phone.

my_phone[:hulu] = 'Use Hulu to watch tv and movies'

# As a developer, I can delete two key:value pairs from my_phone.

my_phone.delete (:facebook)




# As a developer, I can use an enumerable method to return information about all of my_phone's applications.

def my_phone_apps hash
  hash.each do |key, value|
    puts "The #{key} #{value}"
  end
end

# p my_phone_apps my_phone

# As a developer, I can create a custom method that takes in my_phone and returns an array with the app name capitalized and information about each phone app.

def my_phone_apps_array hash
  hash.map do |key, value|
    puts "The #{key.capitalize()} #{value}"
  end
end

p my_phone_apps_array my_phone