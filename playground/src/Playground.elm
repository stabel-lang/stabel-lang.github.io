module Playground exposing (main)

import Browser
import Html exposing (Html)
import Html.Attributes as Attributes
import Html.Events as Events



-- MODEL


type alias Model =
    { source : String }


init : flags -> ( Model, Cmd Msg )
init _ =
    ( { source = "" }
    , Cmd.none
    )



-- Update


type Msg
    = EditSource String


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        EditSource newSource ->
            ( { model | source = newSource }
            , Cmd.none
            )



-- VIEW


view : Model -> Html Msg
view model =
    Html.div
        [ Attributes.style "height" "100vh"
        ]
        [ Html.h1
            []
            [ Html.text "Playground" ]
        , Html.textarea
            [ Attributes.style "width" "50vw"
            , Attributes.style "height" "50%"
            , Events.onInput EditSource
            ]
            [ Html.text model.source ]
        ]



-- MAIN


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , view = view
        , subscriptions = always Sub.none
        }
