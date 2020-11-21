# ASSESSMENT 3: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as
if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have
answered the question completely, there is always something more to learn. Write
your researched answer in your OWN WORDS.

1. What is object destructuring?

Your answer: Destructuring is when you pull out values from an object and assign
them as variables to use within a component. This allows the data to be used
simply without have to keep repeating either this.state or this.props.

Researched answer: The object destructuring is a useful JavaScript feature to
extract properties from objects and bind them to variables. What's better,
object destructuring can extract multiple properties in one statement, can
access properties from nested objects, and can set a default value if the
property doesn't exist.

2. What are React lifecycle methods? Provide three examples.

Your answer: The lifecycle methods are methods that affect how a component is
rendered to the browser, updated and removed. The constructor is a lifecycle
method, as is the render method, componentDidMount, componentWillMount and
others.

Researched answer: You can think of React lifecycle methods as the series of
events that happen from the birth of a React component to its death. Every
component in React goes through a lifecycle of events. I like to think of them
as going through a cycle of birth, growth, and death.

Mounting – Birth of your component / Update – Growth of your component / Unmount
– Death of your component

3. What is the difference between a class and an object?

Your answer: Objects are one instance of collections of data and behavior. A
class is a blueprint for an object that can be used to create many instances of
one object that all have the same properties and behavior.

Researched answer: A class defines object properties including a valid range of
values, and a default value. A class also describes object behavior. An object
is a member or an "instance" of a class. An object has a state in which all of
its properties have values that you either explicitly define or that are defined
by default settings.

4. What is the difference between a HTML div and a span?

Your answer: A div is an HTML element that is used to hold other HTML elements
like a container. A span is used to select a specific thing within another
element that can be acted upon independently. For example, you could put a word
or a <span> selection of words </span> within a span tag and change only what is
within the span tags. Often used to make a selection bold or italic to add
emphasis.

Researched answer: A div is a block-level element and a span is an inline
element. The div should be used to wrap sections of a document, while use spans
to wrap small portions of text, images, etc. The <div> element is used while
creating CSS based layouts in html, whereas <span> element is used to stylize
texts.

5. What is React.Fragment (or <>) and why would you want to use it?

Your answer: A Fragment is a wrapper provided with React that holds one or more
jsx elements within the render method. This is necessary because you cannot
return more than one element in jsx. Adjoining elements must be wrapped within
another wrapper element such as a <div> or a React.Fragment, among others. The
Fragment is kind of like a ghost element as you cannot see it when you inspect
the page like you can if you use something like a div.

Researched answer: React fragments let you group a list of children without
adding extra nodes to the DOM because fragments are not rendered to the DOM. So
basically we use React. Fragment where we would normally use a wrapper div. We
can make use of fragments with <React. Fragments> syntax

6. What does it mean to create a responsive web application? What are three
   options for creating responsive design?

Your answer: Responsive web applications have the ability to be functional and
look good on all different size screens and devices, from mobile phones to large
desktop monitors. This can be done with media queries that dictate what (and
how) things are to be rendered at different breakpoints. This is accomplished
also through differenc css techniques that automatically cause elements to shift
as screen sizes shift (ie: grid, flexbox)

Researched answer: A responsive website design is one which makes clever use of
CSS to ensure that web pages render well across a wide range of screen sizes –
without resorting to URL redirection or dynamically serving different HTML and
CSS code, depending on the UserAgent. Media queries, fluid grids and flexible
images. Using things like % or vh/vw units.

7. What are props in React?

Your answer: Props are properties that are used to pass data from a parent
component to a child component.

Researched answer: Props are arguments passed into React components. Props are
passed to components via HTML attributes. React Props are like function
arguments in JavaScript and attributes in HTML. Props are also how you pass data
from one component to another, as parameters.

8. What is `this` in JavaScript?

Your answer: 'this' is used to specify the scope of the object it belongs to.

Researched answer: 'this' keyword refers to an object, that object which is
executing the current bit of javascript code. It has different values depending
on where it is used: In a method, this refers to the owner object. Alone, this
refers to the global object. In a function, this refers to the global object. In
a function, in strict mode, this is undefined. In an event, this refers to the
element that received the event. Methods like call(), and apply() can refer this
to any object.

9. STRETCH: What is a ternary operator in JavaScript?

Your answer: A ternary operator is a type of shorthand for an if else statement.
(<condition> ? : ) This is saying, if the condition is true (?) then do
something, else (:) do this thing

Researched answer: The conditional (ternary) operator is the only JavaScript
operator that takes three operands: a condition followed by a question mark ( ?
), then an expression to execute if the condition is truthy followed by a colon
( : ), and finally the expression to execute if the condition is falsy.

10. STRETCH: What is an anonymous function in JavaScript?

Your answer: An anonymous function is a function that is not specifically named.

Researched answer: An anonymous function is a function without a name. An
anonymous function is often not accessible after its initial creation. We often
use anonymous functions as arguments of other functions. An anonymous function
is a function that is not stored but is associated with a variable. Anonymous
functions can accept inputs and return outputs, just as standard functions

## Looking Ahead: Terms for Next Week

Ruby -- A dynamic, open source programming language with a focus on simplicity
and productivity. It has an elegant syntax that is natural to read and easy to
write. Ruby is an interpreted, high-level, general-purpose programming language.
It was designed and developed in the mid-1990s by Yukihiro "Matz" Matsumoto in
Japan. Ruby is dynamically typed and uses garbage collection. It supports
multiple programming paradigms, including procedural, object-oriented, and
functional programming.

Object oriented programming -- Object-oriented programming (OOP) is a
programming paradigm based on the concept of "objects", which can contain data
and code: data in the form of fields (often known as attributes or properties),
and code, in the form of procedures (often known as methods).

RSpec -- RSpec is a testing tool for Ruby, created for behavior-driven
development (BDD). It is the most frequently used testing library for Ruby in
production applications. Behavior-driven development is an idea built on top of
TDD. The idea is to write tests as specifications of system behavior. It is
about a different way of approaching the same challenge, which leads us to think
more clearly and write tests that are easier to understand and maintain. This in
turn helps us write better implementation code.A common problem newcomers face
when starting with testing is falling into the trap of writing tests which do
too much, test too little and require deep focus in order to understand what is
going on.

Instance variable -- An instance variable is a variable which is declared in a
class but outside of constructors, methods, or blocks. Instance variables are
created when an object is instantiated, and are accessible to all the
constructors, methods, or blocks in the class.

Ruby blocks -- A Ruby block is a way of grouping statements, and may appear only
in the source adjacent to a method call; the block is written starting on the
same line as the method call's last parameter (or the closing parenthesis of the
parameter list). The code in the block is not executed at the time it is
encountered.

Ruby hashes -- A Hash is a dictionary-like collection of unique keys and their
values. Also called associative arrays, they are similar to Arrays, but where an
Array uses integers as its index, a Hash allows you to use any object type.
Hashes enumerate their values in the order that the corresponding keys were
inserted.

`getter` and `setter` methods in Ruby -- A getter method is a method that gets a
value of an instance variable. Without a getter method, you can not retrieve a
value of an instance variable outside the class the instance variable is
instantiated from.

A setter is a method that sets a value of an instance variable. Without a setter
method, you can not assign a value to an instance variable outside its class. if
you try to set a value of an instance variable outside its class, Ruby raises No
Method Error just like it does when you try to retrieve a value of an instance
variable outside its class without a getter method.
