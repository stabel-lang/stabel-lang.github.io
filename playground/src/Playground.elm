module Playground exposing (main)

import Browser
import Dict exposing (Dict)
import Html exposing (Html)
import Html.Attributes as Attributes
import Html.Events as Events
import Lesson01
import Lesson02
import LessonContract exposing (LessonContract)



-- LESSONS


lessons : Dict String LessonContract
lessons =
    [ Lesson01.contract
    , Lesson02.contract
    ]
        |> List.map LessonContract.asDictEntry
        |> Dict.fromList



-- MODEL


type alias Model =
    { activeLesson : LessonContract
    , source : String
    }


init : flags -> ( Model, Cmd Msg )
init _ =
    ( { activeLesson = Lesson01.contract
      , source = Lesson01.contract.content
      }
    , Cmd.none
    )



-- Update


type Msg
    = EditSource String
    | SwitchLesson String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        EditSource newSource ->
            ( { model | source = newSource }
            , Cmd.none
            )

        SwitchLesson contractKey ->
            case Dict.get contractKey lessons of
                Just contract ->
                    ( { model
                        | activeLesson = contract
                        , source = contract.content
                      }
                    , Cmd.none
                    )

                Nothing ->
                    ( model, Cmd.none )



-- VIEW


view : Model -> Html Msg
view model =
    Html.div
        [ Attributes.style "height" "100vh"
        ]
        [ Html.h1
            []
            [ Html.text "Playground" ]
        , Html.div [ Attributes.style "height" "50%" ]
            [ Html.textarea
                [ Attributes.style "width" "50vw"
                , Attributes.style "height" "100%"
                , Events.onInput EditSource
                , Attributes.value model.source
                ]
                []
            , lessonSwitcher model
            ]
        ]


lessonSwitcher : Model -> Html Msg
lessonSwitcher model =
    Html.select
        [ Events.onInput SwitchLesson ]
        (List.map lessonSwitcherOption (Dict.values lessons))


lessonSwitcherOption : LessonContract -> Html Msg
lessonSwitcherOption contract =
    Html.option [ Attributes.value contract.key ]
        [ Html.text contract.label ]



-- MAIN


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , view = view
        , subscriptions = always Sub.none
        }
