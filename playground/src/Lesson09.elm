module Lesson09 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L09"
    , label = "List"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    """
