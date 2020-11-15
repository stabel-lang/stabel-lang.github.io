module Lesson07 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L07"
    , label = "Unions and multiwords"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    # Play supports the concept of a Union type

    defunion: State
    : On
    : Off

    deftype: On
    deftype: Off

    # This defines a Union of On and Off, called State.
    # Whenever you use State as a type, you're saying that it really could be either On or Off.
    # To handle such types we need to use multi-words.
    # Multi-words are words with a definition that depends on the type that is actually present on the stack.

    defmulti: state->int
    type: State -- Int
    when: On
      drop 1
    when: Off
      drop 0

    def: main
    entry: true
    : >On state->int
    """
