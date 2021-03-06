module Lesson08 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L08"
    , label = "Pattern matching"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    # Multi-functions allows you to be very specific about when a specific condition applies.

    defstruct: Coordinate
    : x Int
    : y Int

    defmulti: origo?
    type: Coordinate -- Int
    : Coordinate( x 0 y 0 )
      drop 1
    : Coordinate
      drop 0

    def: main
    : 1 1 >Coordinate
      origo?
    """
