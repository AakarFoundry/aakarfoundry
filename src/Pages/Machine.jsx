import React, { useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Stack } from "@mui/material";
import { useState } from "react";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const MachineQuality = (props) => { 
  const [formData, setFormData] = useState({
    gaugesCost: "",
    leakCost:"",
    washingCost: "",
    capCost: "",
    packagingCost: "",
    remarks: "",
    nextCycleTime: "", 
    nextFixtureCost: "",
  });

  // Event handler for input field changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Effect to log form data whenever formData changes
  useEffect(() => {
    console.log("Form Data:", formData);
  }, [formData]); 
  
  const redAsteriskStyle = {
    color: 'red',
  };

  const [fields, setFields] = useState([
    {
      id: 1,
      label: "Machine Type - CNC/VMC/HMC",
      type: "select",
      options: ['CNC', 'VMC', 'HMC'],
      value: "",
    },
    {
      id: 2,
      label: "Cycle time",
      value: "",
    },
    {
      id: 3,
      label: "Machining Fixture cost(One time Inv)",
      value: "",
    },
  ]);

  const addField = () => {
    const newFields = [
      ...fields,
      {
        id: fields.length + 1,
        label: "Machine Type - CNC/VMC/HMC",
        type: 'select',
        options: ['CNC', 'VMC', 'HMC'],
        value: "",
      },
      {
        id: fields.length + 2,
        label: "Next Cycle time",
        value: "",
      },
      {
        id: fields.length + 3,
        label: "Next Machining Fixture cost",
        value: "",
      },
    ];
    setFields(newFields);
  };

  const removeField = (id) => {

    const index = fields.findIndex((field) => field.id === id);
    if (index !== -1) {

      const newFields = fields.filter((_, i) => i < index || i >= index + 3);
      setFields(newFields);
    }
  };

  const handleChange = (id, event) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field
    );
    setFields(updatedFields);
  
    // Check if the changed field is the machine type
    const changedField = updatedFields.find((field) => field.id === id);
    if (changedField) {
      if (changedField.label === "Machine Type - CNC/VMC/HMC") {
        console.log(`Selected Machine Type: ${event.target.value}`);
      }
    }
  };
  return (
    <Container
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 8,
        mb: 2,
      }}
    >
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
        noValidate
        autoComplete="on"
      >
        <Grid container spacing={4}>
          {fields.map((field) => (
            <Grid item xs={12} sm={4} key={field.id}>
              <Typography
                variant="subtitle1"
                sx={{
                  textAlign: 'left',
                  color: '#054470',
                  fontWeight: '650',
                  fontSize: '1.2rem',
                  padding: '0.3rem',
                }}
              >
                {field.label}{field.label.includes('') && <span style={redAsteriskStyle}>*</span>}
              </Typography>
              {field.type === 'select' ? (
                <FormControl variant="outlined" fullWidth size="small">
                  <Select
                    
                    labelId={`${field.id}-label`}
                    id={field.id}
                    variant="outlined"
                    fullWidth
                    value={field.value}
                    onChange={(event) => handleChange(field.id, event)}
                  >
                    {field.options.map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (

                <TextField
                  
                  label="Enter Details"
                  variant="outlined"
                  fullWidth
                  size="small"
                  name={
                    field.id === fields[fields.length - 2].id
                      ? "nextCycleTime"
                      : field.id === fields[fields.length - 1].id
                      ? "nextFixtureCost"
                      : `field-${field.id}`
                  }
                  value={
                    field.id === fields[fields.length - 2].id
                      ? formData.nextCycleTime
                      : field.id === fields[fields.length - 1].id
                      ? formData.nextFixtureCost
                      : formData[`field-${field.id}`]
                  }
                  onChange={handleInputChange}

                />
              )}
            </Grid>
          ))}
        </Grid>
        <Stack direction="row" spacing={2}>
          {fields.length > 3 && (
            <IconButton
              onClick={() => removeField(fields[fields.length - 3].id)}
            >
              <RemoveIcon />
            </IconButton>
          )}
          {fields.length < 9 && (
            <IconButton onClick={addField}>
              <AddIcon />
            </IconButton>
          )}
        </Stack>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.2rem",
                padding: "0.3rem",
              }}
            >
              Inspection Gauges Cost <span style={{ color: "red" }}>*</span> 
            </Typography>

            <TextField
              
              name="gaugesCost"
              id="gaugesCost"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.gaugesCost}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.2rem",
                padding: "0.3rem",
              }}
            >
              Leak testing fixture cost <span style={{ color: "red" }}>*</span> 
            </Typography>
            <TextField
              
              name="leakCost"
              id="leakCost"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.leakCost}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.2rem",
                padding: "0.3rem",
              }}
            >
              
              Washing fixture cost <span style={{ color: "red" }}>*</span> 
            </Typography>
            <TextField
              
              name="washingCost"
              id="washingCost"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.washingCost}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.2rem",
                padding: "0.3rem",
              }}
            >
              
              Plastic Protection Cap Costs (Specify Quantity & Cost) <span style={{ color: "red" }}>*</span> 
            </Typography>
            <TextField

              name="capCost"
              id="capCost"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.capCost}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.2rem",
                padding: "0.3rem",
              }}
            >
              
              Packaging Cost-(Corrugated/PP/Plastic/Exports Grade) <span style={{ color: "red" }}>*</span> 
            </Typography>

            <TextField

              name="packagingCost"
              id="packagingCost"
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.packagingCost}
              onChange={handleInputChange}
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography
              variant="subtitle1"
              sx={{
                textAlign: "left",
                color: "#054470",
                fontWeight: "650",
                fontSize: "1.2rem",
              }}
            >
              
              Remarks
            </Typography>
            <TextField
              label="Enter Remarks"
              name="remarks"
              id="remarks"
              variant="outlined"
              fullWidth
              size="small"
              value={formData.remarks}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default MachineQuality;
