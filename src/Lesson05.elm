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
    # Play allows you to define compound structures

    deftype: Coordinate
    : x Int
    : y Int

    # This will define a 'Coordinate' which has two members, x and y, which are integers.

    # Play will also generate some words for you to be able to read and modify this structure.
    # '>Coordinate' is a word that requires two Ints to be on the stack, and will create a Coordinate with those numbers as x and y, respectively.
    # '>x' and '>y' requires an Int and a Coordinate to be on the stack, and sets the x/y member to the provided Int.
    # 'x>' and 'y>' will return the x/y value of a Coordinate, which must be on the stack.

    # The '>' character can be read as 'into'. '>x' is then read as 'into x' and 'x>' is read as 'x into'. So either you're reading from the stack and into x, or from x into the stack.

    def: main
    type: -- Int
    entry: true
    : 1 2 >Coordinate # creates a Coordinate(x=1, y=2)
      5 >x # Replaces the Coordinate(x=1, y=2) with Coordinate(x=5, y=2)
      x> # Replaces the Coordinate(x=5, y=2) with the value of x.
    """
