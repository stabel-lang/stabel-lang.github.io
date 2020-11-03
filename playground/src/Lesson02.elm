module Lesson02 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L02"
    , label = "Lesson 2"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    # Welcome to Lesson 2
    """
