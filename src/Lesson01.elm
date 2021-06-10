module Lesson01 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L01"
    , label = "Function definition"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    # Welcome to the playground!
    # Here you can learn the Stabel language by reading and toying around with examples.
    # You can find more examples in the dropdown above.

    # A '#' character marks the beginning of a line comment.
    # Comments are ignored by the compiler, and serves the purpose of making things clearer for a human.
    
    # Below you'll find a simple function definition.

    def: main # 1
    : 5       # 2


    # 1. We begin a new function definition, and this word will be called main. The name 'main' is important, when you click the 'run' button the playground will try to execute the 'main' function.
    # 2. A single ':' without any prefix marks the definition of the function implementation. In this function, we're simply returning the number 5 (the last element in a definition is its return value).

    # Hit the 'run' button above to execute this Stabel program.
    """
