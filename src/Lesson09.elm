module Lesson09 exposing (contract)

import LessonContract exposing (LessonContract)
import String.Extra as String


contract : LessonContract
contract =
    { key = "L09"
    , label = "List"
    , content = String.trim <| String.unindent content
    }


content : String
content =
    """
    # Unions allow for some interesting API designs.
    # Let's implement a List data structure.

    defunion: List a
    : NonEmptyList a
    : EmptyList

    defstruct: NonEmptyList a
    : first a
    : rest (List a)

    defstruct: EmptyList

    # Notice that retrieving the first element of a list can only be done if you have a NonEmptyList.
    # Also notice that a lowercased type acts as a placeholder for any type, a generic type.

    def: push
    type: (List a) a -- (NonEmptyList a)
    : swap >NonEmptyList

    defmulti: first-or-default
    type: (List a) a -- a
    : NonEmptyList
      drop first>
    : EmptyList
      swap drop

    # Here we can specify that the result of adding an element to a List, always result in a NonEmptyList.
    # A NonEmptyList is still a List, though.

    def: main
    : EmptyList
      10 push
      0 first-or-default # Could have used 'first>' here.
    """
