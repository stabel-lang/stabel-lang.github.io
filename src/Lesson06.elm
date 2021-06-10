module Lesson06 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L06"
    , label = "Anonymous functions"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    # Stabel allows you to place function references on the stack, and even construct anonymous functions.

    # For this example, let's bring back the Coordinate type from the previous example.

    defstruct: Coordinate
    : x Int
    : y Int

    # Now, imagine we want to create a function that allows you to modify the 'x' member in any way imaginable.
    # This is a good use case for anonymous functions.

    def: update-x
    type: Coordinate [ Int -- Int ] -- Coordinate
    : swap    # bring Coordinate to the top of the stack
      dup x>  # read value of x without loosing the original Coordinate
      -rotate # rotates the three top stack elements one space to the left
      !       # execute qutotation
      >x      # set x to whatever was returned by quotation

    def: main
    : 1 2 >Coordinate
      [ 1 + ] update-x
      x>

    # Anonymous functions are wrapped in brackets. 
    # Think of them as inline function definitions.
    """
