module Lesson01 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L01"
    , label = "Word definition"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    # Welcome to the playground
    # Here you can learn the Play language by reading and toying around with examples.

    # A '#' character marks the beginning of a line comment.
    # Comments are ignored by the compiler, and serves the purpose of making things clearer for a human.
    
    # Below you'll find a simple word definition.
    # In other programming languages, this will usually be called a function definition.

    def: main   # 1
    entry: true # 2
    : 5         # 3


    # 1. We begin a new word definition, and this word will be called main.
    # 2. 'main' is an entry point, this is called when your program starts up.
    # 3. A single ':' without any prefix marks the definition of the word. In this word, we're simply returning the number 5 (the last element in a definition is its return value).

    # Hit the 'run' button above to execute this Play program.
    """
