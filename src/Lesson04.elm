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
    # Stabel is statically typed. 
    # In most cases, Stabel is smart enough to infer the types.
    # The function definitions in the previous example are repeated here with type annotations.

    def: square
    type: Int -- Int
    : dup *

    def: drop-first
    type: Int Int -- Int
    : swap drop

    def: main
    type: -- Int
    : 4 5
      drop-first
      square

    # '--' is what separates requirements from results.
    # 'drop-first' requires two Ints to be on the stack, and will replace them with one Int.
    # 'main' requires nothing to be on the stack, and will add one Int to it.
    """
