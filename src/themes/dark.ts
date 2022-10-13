import { ThemeOptions } from "@mui/material";
import {grey} from "@mui/material/colors";

export const darkTheme: ThemeOptions = {
    palette: {
        mode: "dark",
        background:{
            default: '#303030',
            paper: grey[600]
        },

        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#ffffff',
        },
    },


};