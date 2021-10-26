import {makeStyles, Theme} from "@material-ui/core";

export const useChangeAgeStyles = makeStyles((theme: Theme) => ({
    container: {
        minWidth: 600,
        "& .MuiPaper-outlined": {
            padding: 0,
            borderRadius: 0,
            minHeight: '100vh',
            borderLeft: 0,
            borderTop: 0,
            borderBottom: 0,
        },
    },
    infoWrapper: {
        paddingTop: 53
    },
    textFieldWrapper: {
        padding: "12px 16px",
    },
    text: {
        padding: "12px 16px",
        color: "rgb(83, 100, 113)",
        fontWeight: 400,
        fontSize: 15,
        lineHeight: "20px"
    },
    link: {
        textDecoration: "none",
        color: "rgb(29, 155, 240)",
        cursor: "pointer",
        "&:hover": {
            textDecoration: "underline",
        }
    },
    divider: {
        height: 1,
        backgroundColor: "rgb(239, 243, 244)",
    },
}));
