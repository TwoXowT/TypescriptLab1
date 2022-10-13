import React, {useState} from 'react';
// import './App.scss';
import {Button, Container, createTheme, CssBaseline, PaletteMode} from "@mui/material";
import {Navbar} from "./components/Navbar/Navbar";
import {ThemeProvider} from "@mui/material";
import {darkTheme} from "./themes/dark";
import {lightTheme} from "./themes/light";
import {ColorContext} from "./ColorContext";
import {SwitchModeButton} from "./SwitchModeButton";

const App: React.FC = () => {


    const [mode, setMode] = React.useState<PaletteMode>("light");
    const theme = React.useMemo(
        () => createTheme(mode === "light" ? lightTheme : darkTheme),
        [mode]
    );
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode: PaletteMode) =>
                    prevMode === "light" ? "dark" : "light"
                );
            },
        }),
        []
    );
    return (
        <Container>
            <ColorContext.Provider value={colorMode}>
                <ThemeProvider theme={theme}>
                    <CssBaseline enableColorScheme/>
                    <SwitchModeButton />
                    <Container maxWidth='md'>
                        <Navbar/>
                    </Container>

                </ThemeProvider>
            </ColorContext.Provider>
        </Container>


    );
}

export default App;
