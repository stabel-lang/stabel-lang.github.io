module Playground exposing (main)

import Browser
import Html exposing (Html)



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
    = NoOp


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    ( model, Cmd.none )



-- VIEW


view : Model -> Html Msg
view model =
    Html.text "Hello"



-- MAIN


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , update = update
        , view = view
        , subscriptions = always Sub.none
        }
