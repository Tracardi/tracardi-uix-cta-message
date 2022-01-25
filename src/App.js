import React, {useState} from 'react';
import Snackbar from '@mui/material/Snackbar';
import Box from "@mui/material/Box";
import {Button, Typography} from "@mui/material";

function App({domElement}) {

    const title = domElement.getAttribute("data-title") || null
    const message = domElement.getAttribute("data-message") || null
    const ctaLabel = domElement.getAttribute("data-cta-button") || null
    const ctaLink = domElement.getAttribute("data-cta-link") || null
    const cancelLabel = domElement.getAttribute("data-cancel-button") || null
    const vertical = domElement.getAttribute("data-vertical") || "bottom"
    const horizontal = domElement.getAttribute("data-horizontal") || "right"
    const autoHide = domElement.getAttribute("data-auto-hide") || "60000"
    const borderRadius = domElement.getAttribute("data-border-radius") || "2"
    const borderShadow = domElement.getAttribute("data-border-shadow") || "1"
    const minWidth = domElement.getAttribute("data-min-width") || "300"
    const maxWidth = domElement.getAttribute("data-max-width") || "500"

    const [open, setOpen] = useState(true)

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <Snackbar open={open} autoHideDuration={autoHide}
                  onClose={handleClose}
                  anchorOrigin={{vertical, horizontal}}
        >
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    boxShadow: parseInt(borderShadow),
                    borderRadius: parseInt(borderRadius),
                    p: 2,
                    minWidth: parseInt(minWidth),
                    maxWidth: parseInt(maxWidth)
                }}
            >
                <Box sx={{padding: 1}}>
                    {title && <Typography variant="h5" style={{color: "black"}}>{title}</Typography>}
                    {message && <Typography style={{color: "black"}}>{message}</Typography>}
                </Box>

                {ctaLabel && <Box sx={{
                    display: "flex",
                    justifyContent: "center",
                    padding: 1
                }}>
                    {ctaLabel && <Button variant={"contained"} href={ctaLink} style={{margin: "0 5px"}}>
                        {ctaLabel}
                    </Button>}
                    {cancelLabel && <Button variant={"outlined"} onClick={handleClose}>
                        {cancelLabel}
                    </Button>}
                </Box>}

            </Box>
        </Snackbar>
    );
}

export default App;
