port module Playground exposing (main)

import Browser
import Dict exposing (Dict)
import Html exposing (Html)
import Html.Attributes as Attributes
import Html.Events as Events
import Lesson01
import Lesson02
import Lesson03
import Lesson04
import Lesson05
import Lesson06
import Lesson07
import Lesson08
import Lesson09
import LessonContract exposing (LessonContract)



-- LESSONS


lessons : Dict String LessonContract
lessons =
    [ Lesson01.contract
    , Lesson02.contract
    , Lesson03.contract
    , Lesson04.contract
    , Lesson05.contract
    , Lesson06.contract
    , Lesson07.contract
    , Lesson08.contract
    , Lesson09.contract
    ]
        |> List.map LessonContract.asDictEntry
        |> Dict.fromList



-- MODEL


type alias Model =
    { activeLesson : LessonContract
    , source : String
    , result : String
    }


init : flags -> ( Model, Cmd Msg )
init _ =
    ( { activeLesson = Lesson01.contract
      , source = Lesson01.contract.content
      , result = ""
      }
    , Cmd.none
    )



-- Update


type Msg
    = EditSource String
    | SwitchLesson String
    | Compile String
    | CompilationResult String


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
                        , result = ""
                      }
                    , Cmd.none
                    )

                Nothing ->
                    ( model, Cmd.none )

        Compile source ->
            ( model
            , compileSource source
            )

        CompilationResult result ->
            ( { model | result = result }
            , Cmd.none
            )



-- VIEW


view : Model -> Html Msg
view model =
    Html.div
        [ Attributes.style "height" "100%"
        , Attributes.style "display" "flex"
        , Attributes.style "flex-direction" "column"
        ]
        [ Html.div
            []
            [ Html.h1
                []
                [ Html.text "Playground" ]
            , lessonSwitcher model
            , Html.button
                [ Events.onClick <| Compile model.source ]
                [ Html.text "Run" ]
            ]
        , Html.div
            [ Attributes.style "display" "flex"
            , Attributes.style "justify-content" "space-between"
            , Attributes.style "flex-grow" "1"
            , Attributes.style "height" "100%"
            ]
            [ Html.textarea
                [ Attributes.style "width" "100%"
                , Attributes.style "height" "100%"
                , Attributes.style "padding" "8px"
                , Attributes.style "font-size" "16px"
                , Attributes.style "font-family" "monospace"
                , Attributes.style "margin-right" "8px"
                , Attributes.style "overflow-y" "scroll"
                , Attributes.style "resize" "none"
                , Events.onInput EditSource
                , Attributes.value model.source
                ]
                []
            , Html.div
                [ Attributes.style "width" "100%"
                , Attributes.style "height" "100%"
                , Attributes.style "padding" "8px"
                , Attributes.style "background-color" "#000000"
                , Attributes.style "color" "#ffffff"
                , Attributes.style "white-space" "pre"
                , Attributes.style "font-size" "16px"
                , Attributes.style "font-family" "monospace"
                , Attributes.style "overflow" "scroll"
                ]
                [ Html.text model.result ]
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



-- PORTS


port compileSource : String -> Cmd msg


port compilationResult : (String -> msg) -> Sub msg



-- MAIN


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , view = view
        , subscriptions = always <| compilationResult CompilationResult
        }
