module Lesson04 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L04"
    , label = "Types"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    # Play is staticly typed. 
    # In most cases, Play is smart enough to infer what the type of words.
    # The word definitions in the previous example are shown here with type annotations.

    def: square
    type: Int -- Int
    : dup *

    def: drop-first
    type: Int Int -- Int
    : swap drop

    def: main
    type: -- Int
    entry: true
    : 4 5
      drop-first
      square

    # '--' is what seperates requirements from results.
    # 'drop-first' requires two Int's to be on the stack, and will replace them with one Int.
    # 'main' requires nothing to be on the stack, and will add one Int to it.
    """
