import reflex as rx 
from enum import Enum
from .fonts import Font
from .colors import Color,TextColor


class Size(Enum):
    SMALL ="0.5em"
    DEFAULT = "1em" # utiliza el tamaño origina 
    BIG = "2em"
    VERY_BIG = "2em"




STYLESHEETS= [
    "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css",
    "https://fonts.googleapis.com/css?family=Raleway&display=swap",
    "https://icons.getbootstrap.com/icons/facebook/"
]


BASE_STYLE ={
    "font_family": Font.DFFAULT.value,
    "color": TextColor.PRIMARY.value,
    "backgound": Color.PRIMARY.value


}