import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material";
import { Gear } from "phosphor-react";
import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Nav_Buttons } from "../../data";
import { faker } from '@faker-js/faker';
import Logo from "/Users/hank/Documents/Tier2/week5t2/chat-app/src/assets/Images/logo.ico"


const DashboardLayout = () => {
  const [selected, setSelected] = useState(0)
  const theme = useTheme();
  console.log(theme)
  return (
    <>
      <Box
        p={2}
        sx={{
          backgroundColor: theme.palette.background.paper,
          boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          height: "100vh",
          width: 100
        }}>

        <Stack direction="column" alignItems={"center"} sx={{ width: "100%" }} spacing={3} >
          <Box sx={{
            backgroundColor: theme.palette.primary.main,
            height: 64,
            width: 64,
            borderRadius: 1.5
          }}>
            <img src={Logo} />
          </Box>

          <Stack sx={{ width: "max-content" }} alignItems={"center"} direcrtion="column" spacing={3}>
            {Nav_Buttons.map((el) => (
              el.index === selected ? (

                <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                  <IconButton
                    sx={{ width: "max-content", color: "white" }}
                    key={el.index}
                  >
                    {el.icon}
                  </IconButton>
                </Box>
              ) : (
                <IconButton
                  onClick={() => {
                    setSelected(el.index)
                  }}
                  sx={{ width: "max-content", color: "#000" }}
                  key={el.index}
                >
                  {el.icon}
                </IconButton>
              )
            ))}

            <Divider sx={{ width: 40 }} variant="middle" />
            {selected === 3 ?
              <Box p={1} sx={{ backgroundColor: theme.palette.primary.main, borderRadius: 1.5 }}>
                <IconButton
                  onClick={() => {
                    setSelected(3)
                  }}
                  sx={{ width: "max-content", color: "#fff" }}
                  >

                  <Gear></Gear>
                </IconButton>
              </Box>
              :
              <IconButton
              onClick={() => {
                    setSelected(3)
                  }}
                  sx={{ width: "max-content", color: "#000" }}
                  >
                <Gear></Gear>
              </IconButton>
            }

          </Stack>

          <Avatar src={faker.}/>

        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
