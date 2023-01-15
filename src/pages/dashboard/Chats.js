import { Box, IconButton, Stack, Typography, InputBase } from "@mui/material";
import { styled, alpha } from "@mui/material/styles";
import { CircleDashed, MagnifyingGlass } from "phosphor-react";
import React from 'react'

const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: 20,
    backgroundColor: alpha(theme.palette.background.paper, 1),
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    positionLeft: `calc(1em + ${theme.spacing(4)})`,
    width: "100%",
    },
}));

const Chats = () => {
    return (
        <Box
            sx={{
                Height: "100%",
                position: "relative",
                width: 320,
                backgroundColor: "#F8FAFF",
                boxShadow: "0px 0px 2px rgba(0,  0, 0, 0.25)"
            }}
        >
            <Stack p={3} sapcing={2}>
                <Stack
                    direction="row"
                    alignItems={"Center"}
                    justifyContent="space-between"
                >
                    <Typography variant="h5">
                        Chats
                    </Typography>
                    <IconButton>
                        <CircleDashed />
                    </IconButton>
                </Stack>
                <Stack sx={{width: "100%"}}>
                    <Search>
                        <SearchIconWrapper >
                            <MagnifyingGlass color="#709CE6"/>
                        </SearchIconWrapper>
                        <StyledInputBase placeholder="Search..."/>
                    </Search>
                </Stack>
            </Stack>
        </Box>
    )

}

export default Chats;