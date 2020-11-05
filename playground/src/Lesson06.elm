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
    """
