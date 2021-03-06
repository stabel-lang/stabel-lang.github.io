module Lesson02 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L02"
    , label = "Stack orientation"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    # In the last example we saw that the last element in a function definition, was returned.
    # Functions can have multiple return values.

    def: four-and-five
    : 4 5

    # How does this work?
    # The first thing to understand is that Stabel is stack oriented. 
    # What really happens in the function above is that, when executed, the numbers 4 and 5 will be put on the stack.

    # What happens when a function is placed on the stack? It executes!

    def: main
    : four-and-five +

    # Executing 'main' will first execute the function 'four-and-five'
    # 'four-and-five' will place the numbers 4 and 5 on the stack. 
    # Then the function '+' will execute, which pops two numbers off the stack, adds them together, and places the sum back on the stack.

    # Whatever is on the stack at the end of a program, is printed in the black box to the right.

    # There aren't really any return values. Every function simply accepts, modifies and returns a stack.
    """
