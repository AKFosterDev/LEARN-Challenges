# ASSESSMENT 4: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have
answered the question completely on your own, there is always something more to
learn. Write your researched answer in your OWN WORDS.

1. Are Ruby methods accessors or mutators?

Your answer: Ruby methods are inherently accessors only but methods can be made
into mutators with the ! added to the end of the method like this: .map!

Researched answer: In computer science, a mutator method is a method used to
control changes to a variable. They are also widely known as setter methods.
Often a setter is accompanied by a getter (also known as an accessor), which
returns the value of the private member variable.

2. What is a block in Ruby?

Your answer: A block is similar to a higher order function in javascript. It can
be passed an anonymous function. A block is defined by the keywords do/end and
{} can also be used to represent do/end.

Researched answer: Ruby Code blocks are chunks of code between braces or between
do..end that you can associate with method invocations, almost as if they were
parameters. A Ruby block is a way of grouping statements, and may appear only in
the source adjacent to a method call; the block is written starting on the same
line as the method call's last parameter (or the closing parenthesis of the
parameter list). The code in the block is not executed at the time it is
encountered. Instead, Ruby remembers the context in which the block appears (the
local variables, the current object, and so on) and then enters the method.

3. Ruby has an implicit return. What does that mean?

Your answer: This means that the last line of code within the block is
automatically returned. There is no reason to call a return in the code like in
javascript.

Researched answer: Any statement in Ruby returns the value of the last evaluated
expression. Ruby always returns the last evaluated expression. Every block in
ruby will return the value of the last line automatically, so it's common to not
use the return keyword in favor of minimal code

4. What is object-oriented programming? How is it different than functional
   programming?

Your answer: OOP is based on the concept that each "thing" is an object with
it's own static data and behavior (methods). Functional programming is based on
creating and using functions.

Researched answer: Both Functional programming and object-oriented programming
uses a different method for storing and manipulating the data. In functional
programming, data cannot be stored in objects and it can only be transformed by
creating functions. In object-oriented programming, data is stored in objects.

5. What is the difference between a class and an object?

Your answer: A class is a blueprint of a certain object where an object is an
instance of a class.

Researched answer: A class is a template for objects. An object is a member or
an "instance" of a class. An object has a state in which all of its properties
have values that you either explicitly define or that are defined by default
settings.

6. STRETCH: What is Duck Typing?

Your answer: I have no idea. :)

Researched answer: Duck Typing refers to the tendency of Ruby to be less
concerned with the class of an object and more concerned with what methods can
be called on it and what operations can be performed on it.

## Looking Ahead: Terms for Next Week

- PostgreSQL : PostgreSQL, also known as Postgres, is a free and open-source
  relational database management system emphasizing extensibility and SQL
  compliance.
- API : An API (application programming interface) is an information gateway
  that allows the back ends of software and services to communicate with one
  another. If you've ever wondered how the modern digital experience got so
  interconnected and convenient, the answer is APIs.
- CRUD : CRUD is an acronym for Create, Read, Update and Destroy (Delete). CRUD
  is also relevant at the user interface level of most applications. For
  example, in address book software, the basic storage unit is an individual
  contact entry. As a bare minimum, the software must allow the user to create
  or add new entries; read, retrieve, search, or view existing entries; update
  or edit existing entries; delete, deactivate, or remove existing entries.
  Without at least these four operations, the software cannot be considered
  complete. Because these operations are so fundamental, they are often
  documented and described under one comprehensive heading, such as "contact
  management", "content management" or "contact maintenance" (or "document
  management" in general, depending on the basic storage unit for the particular
  application).
- Ruby on Rails : Ruby on Rails, or Rails, is a server-side web application
  framework written in Ruby. Rails is a model–view–controller framework,
  providing default structures for a database, a web service, and web pages.
- ORM : Object-relational mapping in computer science is a programming technique
  for converting data between incompatible type systems using object-oriented
  programming languages. This creates, in effect, a "virtual object database"
  that can be used from within the programming language.
- Active Record : Active Record is the M in MVC - the model - which is the layer
  of the system responsible for representing business data and logic. Active
  Record facilitates the creation and use of business objects whose data
  requires persistent storage to a database.
