import { Button, TextField, Typography,  Grid, Container } from "@mui/material"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function Add() {
  const navigate = useNavigate()
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [number, setNumber] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')

  const handleNameChange = (e) => {
    const value = e.target.value;
    if (value.match(/^[a-zA-Z]+$/)) {
      setName(value);
    }
  };
  const handleAgeChange = (e) => {
    const value = e.target.value;
    if (value.match(/^[0-9]{1,2}$/)) {
      setAge(value);
    }
  };
  const handleNumberChange = (e) => {
    const value = e.target.value;
    if (value.match(/^[0-9]/)) {
      setNumber(value);
    }
  };
  const handleCityChange = (e) => {
    const value = e.target.value;
    if (value.match(/^[a-zA-Z]+$/)) {
      setCity(value);
    }
  };

  const handleSubmit = () => {
    if (!name || !age || !number || !city) {
      alert("Please fill in all fields")
      return
    }

    console.log({ name, age, number, city })

    const _blogs = localStorage.getItem('blogs') && localStorage.getItem('blogs').length > 0 ? JSON.parse(localStorage.getItem('blogs')) : []

    localStorage.setItem('blogs', JSON.stringify([..._blogs, { name, age, number, email, city }]))

    navigate('/')
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        bgcolor: "#f5f5f5",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0px 0px 10px rgba(0,0,0,0.1)"
      }}
    >
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <Grid item>
          <Typography variant="h5" component="h1" sx={{fontWeight: "bold"}}>
            ADD User
          </Typography>
        </Grid>
        <Grid item>
          <TextField
            value={name}
            onChange={(e) => handleNameChange(e)}
            label="Name"
            variant="filled"
          />
        </Grid>
        <Grid item>
          <TextField
            value={age}
            onChange={(e) => handleAgeChange(e)}
            label="Age"
            variant="filled"
          />
        </Grid>
        <Grid item>
          <TextField
            value={number}
            onChange={(e) => handleNumberChange(e)}
            label="Number"
            variant="filled"
          />
        </Grid>
        <Grid item>
          <TextField
            value={city}
            onChange={(e) => handleCityChange(e)}
            label="City"
            variant="filled"
          />
        </Grid>
        <Grid item>
          <Button
            onClick={handleSubmit}
            variant="contained"
            sx={{ mt: 2 }}
          >
            SUBMIT
          </Button>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Add