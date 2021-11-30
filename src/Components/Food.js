import React from "react";
import { Paper, Typography, Box } from "@mui/material";

export default function Food() {
  const allStyle = {
    margin: "20px auto",
    padding: "20px",
    maxWidth: "650px",
  };

  const styleBox = {
    display: "flex",
    justifyContent: "start",
    marginBottom: "30px",
  };

  const FoodItem = [
    { name: "Momo", price: 160, category: "snacks" },
    { name: "Dhal Bhat with Spicy Achar", price: 360, category: "dinner" },
    { name: "Masu Bhat", price: 420, category: "launch" },
    { name: "Bread with Egg", price: 120, category: "breakfast" },
    { name: "Roti with Spicy Achar", price: 260, category: "dinner" },
    { name: "Shadeko Bhat and Coke", price: 120, category: "snacks" },
    { name: "Veg Dhal Bhat", price: 350, category: "dinner" },
    {
      name: "Bhat & Khasi ko Masu with Spicy Achar",
      price: 450,
      category: "launch",
    },
  ];
  return (
    <>
      <Paper sx={allStyle}>
        <Typography variant="h5" align="center">
          Food
        </Typography>
        <Typography style={{ color: "grey" }} align="right">
          Total Foods: {FoodItem.length}
        </Typography>
        <hr />
        {FoodItem.map((e, index) => {
          return (
            <div key={index}>
              <Typography>{e.name}</Typography>

              <Box sx={styleBox}>
                <Typography style={{ color: "grey" }}>
                  Price Rs.{e.price}
                </Typography>
                <Typography
                  style={{
                    color: "grey",
                    marginLeft: "20px",
                  }}
                >
                  {e.category}
                </Typography>
                <Box>
                  <Typography
                    style={{
                      background: "red",
                      borderRadius: "30px",
                      color: "white",
                      fontWeight: "bold",
                      width: "120px",
                      marginLeft: "30px",
                      padding: "5px",
                      fontSize: "15px",
                      textAlign: "center",
                    }}
                    align="right"
                  >
                    Order Now
                  </Typography>
                </Box>
              </Box>
            </div>
          );
        })}
      </Paper>
    </>
  );
}
