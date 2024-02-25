import reflex as rx
import BlueHeard.styles.styles as styles
from BlueHeard.views.navbar import navbar

def index() -> rx.Component:
    return rx.box(
        navbar()
    )


app = rx.App(
    stylesheets=styles.STYLESHEETS,
    style=styles.BASE_STYLE

)

app.add_page(
    index,
    title="Servicio de Ambulancia Blueheard - Rápido y Confiable en Bogotá Chia Cajica Tabio",
    description="Blueheard ofrece servicios de ambulancia de emergencia y transporte médico en  Bogotá Chia Cajica Tabio. Llámanos 24/7 para un servicio rápido y seguro. Tu cuidado es nuestra prioridad."

)

app.compile()

