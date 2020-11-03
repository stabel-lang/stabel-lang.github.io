module Lesson01 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L01"
    , label = "Lesson 1"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    # Welcome to the playground
    """
