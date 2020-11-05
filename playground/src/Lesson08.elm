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
    """
