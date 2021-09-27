import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import NoteIcon from "@mui/icons-material/Note";
import NoteAddIcon from "@mui/icons-material/NoteAdd";

export default function generateTopDrawerLinks() {
    return (
        [
            {
                text: "Home",
                link: "/",
                icon: <HomeIcon />,
            },
            {
                text: "My Notes",
                link: "/notes",
                icon: <NoteIcon />,
            },
            {
                text: "Create New Note",
                link: "/note/new",
                icon: <NoteAddIcon />,
            }
        ]
    );
}