import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const gridData = [
    {
        "id": 1,
        "imageUrl" : "https://i.ibb.co/ThpqHLw/ella-olsson-sos-Oqjx31-Go-unsplash.jpg",
    },
    {
        "id": 2,
        "imageUrl": "https://i.ibb.co/QP9nnqC/ella-olsson-l-Mc-Ry-Bx4-G50-unsplash.jpg",
    }
    ,
    {
        "id": 3,
        "imageUrl" : "https://i.ibb.co/ThpqHLw/ella-olsson-sos-Oqjx31-Go-unsplash.jpg",
    },
    {
        "id": 4,
        "imageUrl": "https://i.ibb.co/QP9nnqC/ella-olsson-l-Mc-Ry-Bx4-G50-unsplash.jpg",
    },
    {
        "id": 5,
        "imageUrl" : "https://i.ibb.co/ThpqHLw/ella-olsson-sos-Oqjx31-Go-unsplash.jpg",
    },
    {
        "id": 6,
        "imageUrl": "https://i.ibb.co/QP9nnqC/ella-olsson-l-Mc-Ry-Bx4-G50-unsplash.jpg",
    }
]

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function MenuGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {gridData.map((e) => (
          <Grid item xs={2} sm={4} md={4} key={e.index}>
            <Item>
              <div
                style={{
                    backgroundImage: `url(${e.imageUrl})`,
                    backgroundPosition: "center center",
                  backgroundSize: "cover",
                  height: "300px",
                  weight: "200px",
                  borderRadius: "15px",
                }}
              >
              </div>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
