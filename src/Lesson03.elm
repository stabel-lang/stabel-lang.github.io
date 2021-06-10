module Lesson03 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L03"
    , label = "Stack manipulation"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    # Sometimes it can be nice to re-arrange values on the stack. 
    # Stabel has some built in functions for that purpose.

    # 'dup' let's you duplicate a value

    def: square
    : dup *

    # 'swap' switches the positions of two values
    # 'drop' discards a value
    # When you have two values on the stack, like '4' and '5', you can drop '4' like this

    def: drop-first
    : swap drop

    # There are more, but the ones listed above are the most common

    def: main
    : 4 5
      drop-first
      square
    """
