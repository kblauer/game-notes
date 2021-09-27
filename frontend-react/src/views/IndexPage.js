import React from "react";
import {Container, Box, Typography} from "@mui/material";

export default function IndexPage(props) {
    return (
        <div>
            <Box
                sx={{
                    bgcolor: 'background.paper',
                    pt: 8,
                    pb: 6,
                }}
            >
                <Container maxWidth="md">
                    <Typography
                        component="h1"
                        variant="h2"
                        align="center"
                        color="text.primary"
                        gutterBottom
                    >
                        Welcome to Game Notes!
                    </Typography>
                </Container>
            </Box>

            <Box>
                <Container>
                    <Typography
                        variant="h5"
                        alighn="center"
                        color="text.secondary"
                        paragraph
                    >
                        This is a web app for taking notes about your games.  Journal your adventures?
                        Log inaccessible loot? Take a quick note of anything and associate it with a game via Steam
                    </Typography>
                </Container>
            </Box>
        </div>
    );
}