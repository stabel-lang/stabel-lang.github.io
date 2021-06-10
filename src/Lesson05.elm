module Lesson05 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L05"
    , label = "Compound structures"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    # Stabel allows you to define compound structures.

    defstruct: Coordinate
    : x Int
    : y Int

    # This will define a 'Coordinate' which has two members, x and y, which are integers.

    # Stabel will also generate some functions for you to be able to read and modify this structure.
    # '>Coordinate' is a function that requires two Ints to be on the stack, and will create a Coordinate with those numbers as x and y, respectively.
    # '>x' and '>y' requires an Int and a Coordinate to be on the stack, and sets the x/y member to the provided Int.
    # 'x>' and 'y>' will return the x/y value of a Coordinate, which must be on the stack.

    # The '>' character can be read as 'into'. 
    # '>x' is then read as 'into x' and 'x>' is read as 'x into'. 
    # Either you're reading from the stack and into x, or from x into the stack.

    # Do note that '>' and '<' is not special syntax, but can be used in the name of any function.

    def: main
    type: -- Int
    : 1 2 >Coordinate # creates a Coordinate(x=1, y=2)
      5 >x            # Replaces the Coordinate(x=1, y=2) with Coordinate(x=5, y=2)
      x>              # Replaces the Coordinate(x=5, y=2) with the value of x.
    """
