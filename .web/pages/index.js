/** @jsxImportSource @emotion/react */


import { Fragment } from "react"
import { Box as RadixThemesBox, Button as RadixThemesButton, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, Strong as RadixThemesStrong, Tabs as RadixThemesTabs, Text as RadixThemesText } from "@radix-ui/themes"
import { Box, Image as ChakraImage } from "@chakra-ui/react"
import NextHead from "next/head"



export default function Component() {

  return (
    <Fragment>
  <RadixThemesBox>
  <RadixThemesFlex align={`start`} css={{"borderBottom": "0.025em solid #00B5FD", "position": "fixed", "top": "0px", "backgroundColor": "white", "padding": "1em", "height": "4em", "width": "100%", "zIndex": "5", "flexDirection": "row"}} gap={`2`}>
  <RadixThemesFlex align={`start`} css={{"flexDirection": "row"}} gap={`2`}>
  <ChakraImage src={`/favicon.ico`} sx={{"width": "2em", "height": "2em"}}/>
  <RadixThemesHeading css={{"fontSize": "1.5em", "fontStyle": "italic"}}>
  <RadixThemesText as={`p`} css={{"color": "#1744D1"}}>
  <RadixThemesStrong css={{"fontStyle": "italic", "as": "label"}}>
  {`Blue `}
</RadixThemesStrong>
  {`Health`}
</RadixThemesText>
</RadixThemesHeading>
  <Box sx={{"display": ["none", "none", "none", "block"]}}>
  <RadixThemesTabs.Root>
  <RadixThemesTabs.List>
  <RadixThemesTabs.Trigger className={`bi bi-facebook`} value={`tab1`}/>
  <RadixThemesTabs.Trigger value={`tab2`}>
  {`Home`}
</RadixThemesTabs.Trigger>
  <RadixThemesTabs.Trigger value={`tab3`}>
  {`Quines Somos`}
</RadixThemesTabs.Trigger>
</RadixThemesTabs.List>
</RadixThemesTabs.Root>
</Box>
</RadixThemesFlex>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesDropdownMenu.Root>
  <RadixThemesDropdownMenu.Trigger css={{"backgroundColor": " #FFA5FC"}}>
  <Box sx={{"display": ["block", "block", "block", "none"]}}>
  <RadixThemesButton>
  {`☰`}
</RadixThemesButton>
</Box>
</RadixThemesDropdownMenu.Trigger>
  <RadixThemesDropdownMenu.Content css={{"width": "10rem"}}>
  <RadixThemesDropdownMenu.Item>
  {`Contacto`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Separator/>
  <RadixThemesDropdownMenu.Item>
  {`Home`}
</RadixThemesDropdownMenu.Item>
  <RadixThemesDropdownMenu.Item>
  {`Quienes Somos`}
</RadixThemesDropdownMenu.Item>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
  <NextHead>
  <title>
  {`Servicio de Ambulancia Blueheard - Rápido y Confiable en Bogotá Chia Cajica Tabio`}
</title>
  <meta content={`Blueheard ofrece servicios de ambulancia de emergencia y transporte médico en  Bogotá Chia Cajica Tabio. Llámanos 24/7 para un servicio rápido y seguro. Tu cuidado es nuestra prioridad.`} name={`description`}/>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}
