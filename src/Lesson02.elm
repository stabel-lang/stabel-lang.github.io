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
    # In the last lesson we saw that the last element in a word definition, was its return value.
    # In fact, words can have multiple return values:

    def: four-and-five
    : 4 5

    # Play is stack oriented. What really happens in the word definition above is that, when executed, the numbers 4 and 5 will be put on a stack.
    # What happens when a word is placed on the stack? It executes!

    def: main
    entry: true
    : four-and-five +

    # Executing 'main' will first execute the word 'four-and-five', which will place the numbers 4 and 5 on the stack. 
    # Then the word '+' will execute, which pops two numbers off the stack, adds them together, and places the sum on the stack.
    """
