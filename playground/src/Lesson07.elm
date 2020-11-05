module Lesson07 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L07"
    , label = "Unions and multiwords"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    """
