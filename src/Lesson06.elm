module Lesson06 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L06"
    , label = "Quotations"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    # Play allows you to place word references on the stack, and even construct anonymous words.
    # We call them quotations. Other languages call them anonymous functions.

    # For this example, let's bring back the Coordinate type from the previous example.

    deftype: Coordinate
    : x Int
    : y Int

    # Now, imagine we want to create a word that allows you to modify the 'x' member in any way imaginable.
    # This is a good use case for quotations.

    def: update-x
    type: Coordinate [ Int -- Int ] -- Coordinate
    : swap    # bring Coordinate to the top of the stack
      dup x>  # read value of x without loosing the original Coordinate
      -rotate # rotates the three top stack elements counter-clockwise
      !       # execute qutotation
      >x      # set x to whatever was returned by quotation

    def: main
    entry: true
    : 1 2 >Coordinate
      [ 1 + ] update-x
      x>

    # Quotations are wrapped in brackets. Think of them as inline word definitions.
    """
