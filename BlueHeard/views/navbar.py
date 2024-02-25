import reflex as rx
from BlueHeard.styles.styles import Size 
from BlueHeard.styles.colors import Color,TextColor

def navbar():
    return rx.hstack(
        rx.hstack(
            rx.chakra.image(
                src="/favicon.ico", 
                width="2em",
                height="2em",
                

                ),
                
                rx.heading(
                        rx.text(
                            rx.text.strong("Blue ",font_style= "italic", as_="label",)
                            ,"Health",
                            color=Color.SECONDARY.value),
                            font_size="1.5em",
                            font_style= "italic",
                            
                            ),
                            
            rx.desktop_only(
                rx.tabs.root(
                    rx.tabs.list(
                        rx.tabs.trigger(class_name="bi bi-facebook", value="tab1"),
                        rx.tabs.trigger("Home", value="tab2"),
                        rx.tabs.trigger("Quines Somos", value="tab3"),
                    ),
                )
            )
                     
            
        ),
        rx.spacer(),
        
        rx.menu.root(
            rx.menu.trigger(
                rx.mobile_and_tablet(
                    rx.button("☰"),
                 ) ,  
                background_color=Color.ACCENT.value
            ),
            rx.menu.content(
                rx.menu.item("Contacto"),
                rx.menu.separator(),
                rx.menu.item("Home"),
                rx.menu.item("Quienes Somos"),
                width="10rem",
            ),
            
        ),
        border_bottom= f"0.025em solid {Color.PRIMARY.value}",  
        position="fixed",
        top="0px",
        background_color="white",#Color.ACCENT.value,
        padding="1em",
        height="4em",
        width="100%",
        z_index="5",
    )