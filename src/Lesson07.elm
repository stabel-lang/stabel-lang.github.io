module Lesson07 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L07"
    , label = "Unions and multifunctions"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    # Stabel supports the concept of a union type

    defunion: State
    : On
    : Off

    defstruct: On
    defstruct: Off

    # This defines a union of On and Off, called State.
    # Whenever you use State as a type, you're saying that it really could be either On or Off.
    # To handle such types we need to use multi-functions.
    # Multi-functions are functions with a definition that depends on the type that is present on the stack.

    defmulti: state->int
    type: State -- Int
    : On
      drop 1
    : Off
      drop 0

    def: main
    : On state->int

    # Notice that when a struct is defined without any members, like On and Off, that the constructor is just the name of the type without the > prefix.
    """
