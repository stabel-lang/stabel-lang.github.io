module LessonContract exposing
    ( LessonContract
    , asDictEntry
    )


type alias LessonContract =
    { key : String
    , label : String
    , content : String
    }


asDictEntry : LessonContract -> ( String, LessonContract )
asDictEntry contract =
    ( contract.key, contract )
