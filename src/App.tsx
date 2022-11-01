import React from 'react';
import './App.css';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useForm } from "react-hook-form";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const engine = [
  {
    value: 'v4, petrol',
    label: 'v4, petrol ',
  },
  {
    value: 'v4, diesel',
    label: 'v4, diesel',
  },
  {
    value: 'v6, petrol',
    label: 'v6, petrol',
  },
  {
    value: 'v6, diesel',
    label: 'v6, diesel',
  },
  {
    value: 'v8, petrol',
    label: 'v8, petrol',
  },
  {
    value: 'v8, diesel',
    label: 'v8, diesel',
  },
  {
    value: 'v12, petrol',
    label: 'v12, petrol',
  },
  {
    value: 'v12, diesel',
    label: 'v12, diesel',
  },
]

const material = [
  {
    value: 'plastic',
    label: 'plastic',
  },
  {
    value: 'wood',
    label: 'wood',
  },
  {
    value: 'carbon',
    label: 'carbon',
  },
  {
    value: 'leather',
    label: 'leather'
  }
]

const wheel = [
  {
    value: '15 radius',
    label: '15 radius'
  },
  {
    value: '16 radius',
    label: '16 radius'
  },
  {
    value: '17 radius',
    label: '17 radius'
  },
  {
    value: '18 radius',
    label: '18 radius'
  }
  ,
  {
    value: '19 radius',
    label: '19 radius'
  }
  ,
  {
    value: '20 radius',
    label: '20 radius'
  }
]

const wheelMaterial = [
  {
    value: 'Alloy Wheels',
    label: 'Alloy Wheels'
  },
  {
    value: 'Steel Wheels',
    label: 'Steel Wheels'
  },
  {
    value: 'Forged and Cast Wheels',
    label: 'Forged and Cast Wheels'
  },
  {
    value: 'Split Rim Wheels',
    label: 'Split Rim Wheels'
  }

]


function App() {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data: any) => { setSpecification([...specification, data]) }
  const [engineType, setEngineType] = React.useState('v4, petrol');
  const [materialType, setMaterialType] = React.useState('plastic');
  const [wheelType, setWheelType] = React.useState('15 radius');
  const [wheelMaterialType, setWheelMaterialType] = React.useState('Alloy Wheels');
  const [specification, setSpecification] = React.useState<Array<string>>([])

  const clearFields = () => {
    reset()
    setEngineType('v4, petrol');
    setMaterialType('plastic');
    setWheelType('15 radius');
    setWheelMaterialType('Alloy Wheels');
  }


  return (
    <div className="App">
      <Box
        sx={{
          display: 'flex',
          m: 1,
          p: 1,
          border: '1px solid',
          borderRadius: 2,
          fontSize: '0.875rem',
          fontWeight: '700',
          height: '800px',
          justifyContent: 'space-between'
        }}
      >
        <Box
          sx={{
            display: 'block',
            m: 1,
            p: 1,
            border: '1px solid',
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: '700',
            width: "100%",
            overflowY: "auto"
          }}
        >
          <div>
            {specification &&
              specification.length !== 0 &&
              specification?.map((item: any, index) => {
                return (
                  <Accordion key={index + item?.name} sx={{ marginBottom: '20px' }}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <Typography>{item?.name}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Typography>
                        {`Engine:${item?.engine}`}
                      </Typography>
                      <Typography>
                        {`Interior material:${item?.material}`}
                      </Typography>
                      <Typography>
                        {`Color:${item?.color}`}
                      </Typography>
                      <Typography>
                        {`wheel rims:${item?.wheel}`}
                      </Typography>
                      <Typography>
                        {`Type of wheels :${item?.wheel_type}`}
                      </Typography>
                      <Typography>
                        {`Air suspension :${item?.air_suspension}`}
                      </Typography>
                      <Typography>
                        {`Signature on hood :${item?.signature}`}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                )
              })
            }
            <Button sx={{ width: '100%', marginTop: "20px", display: specification.length !== 0 ? "block" : 'none' }} variant="contained" type="submit" onClick={clearFields}>Add new specification</Button>

          </div>
        </Box>
        <Box
          sx={{
            display: 'block',
            m: 1,
            p: 1,
            border: '1px solid',
            borderRadius: 2,
            fontSize: '0.875rem',
            fontWeight: '700',
            width: "100%"

          }}
        >
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormGroup>
              <TextField id="outlined-basic" label="Name of specification" variant="outlined" sx={{ width: "100%", marginBottom: '20px' }} {...register("name")} />
              <TextField
                {...register("engine")}
                id="outlined-select-currency"
                select
                label="Engine"
                value={engineType}
                onChange={(event) => { setEngineType(event.target.value) }}
                sx={{ width: "100%", marginBottom: '20px' }}
              >
                {engine.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <TextField
                {...register("material")}
                id="outlined-select-currency"
                select
                label="Interior materials"
                value={materialType}
                onChange={(event) => { setMaterialType(event.target.value) }}
                sx={{ width: "100%", marginBottom: '20px' }}
              >
                {material.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField  {...register("color")} id="outlined-basic" label="Color" type="color" variant="outlined" sx={{ width: "100%", marginBottom: '20px' }} />

              <TextField
                {...register("wheel")}

                id="outlined-select-currency"
                select
                label="Wheel rims"
                value={wheelType}
                onChange={(event) => { setWheelType(event.target.value) }}
                sx={{ width: "100%", marginBottom: '20px' }}
              >
                {wheel.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                {...register("wheel_type")}
                id="outlined-select-currency"
                select
                label="Type of wheels"
                value={wheelMaterialType}
                onChange={(event) => { setWheelMaterialType(event.target.value) }}
                sx={{ width: "100%", marginBottom: '20px' }}
              >
                {wheelMaterial.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>

              <FormControlLabel
                {...register("air_suspension")}
                control={<Checkbox />} label="Air suspension" />
              <TextField
                {...register("signature")}
                id="outlined-basic" label="Signature on hood" variant="outlined" sx={{ width: "100%", marginBottom: '20px' }} />
              <Stack spacing={2} direction="row" justifyContent="space-between">
                <Button variant="contained">New config option</Button>
                <Button variant="contained" type="submit">Save</Button>
              </Stack>
            </FormGroup>
          </form>
        </Box>
      </Box>
    </div>
  );
}

export default App;
