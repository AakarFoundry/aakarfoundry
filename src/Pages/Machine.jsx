import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { Stack } from "@mui/material";
import { FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const Machine = (props) => {
  const { machineDetails, setMachineDetails } = props;

  const redAsteriskStyle = {
    color: 'red',
  };

  const [fields, setFields] = useState([]);

  useEffect(() => {
    // Create three empty fields for each type
    const emptyMachineTypeFields = Array.from({ length: 1 }, (_, index) => ({
      id: index * 3 + 1,
      label: 'Machine Type',
      type: 'select',
      options: ['CNC', 'VMC', 'HMC', 'As cast'],
      value: '',
    }));
  
    const emptyCycleTimeFields = Array.from({ length: 1 }, (_, index) => ({
      id: index * 3 + 2,
      label: 'Cycle time',
      value: '',
    }));
  
    const emptyFixtureCostFields = Array.from({ length: 1 }, (_, index) => ({
      id: index * 3 + 3,
      label: 'Machining Fixture cost',
      value: '',
    }));
  
    // Merge the empty fields with the fields from the arrays
    const machineTypeFields = machineDetails.machineType.length!==0
      ? machineDetails.machineType.map((type, index) => ({
          id: index * 3 + 1,
          label: 'Machine Type',
          type: 'select',
          options: ['CNC', 'VMC', 'HMC', 'As cast'],
          value: type,
        }))
      : emptyMachineTypeFields;
  
    const cycleTimeFields = machineDetails.cycleTime.length!==0
      ? machineDetails.cycleTime.map((time, index) => ({
          id: index * 3 + 2,
          label: 'Cycle time',
          value: time,
        }))
      : emptyCycleTimeFields;
  
    const fixtureCostFields = machineDetails.fixtureCost.length!==0
      ? machineDetails.fixtureCost.map((cost, index) => ({
          id: index * 3 + 3,
          label: 'Machining Fixture cost',
          value: cost,
        }))
      : emptyFixtureCostFields;
  
    // Combine the fields and sort them by id
    const newFields = [
      ...machineTypeFields,
      ...cycleTimeFields,
      ...fixtureCostFields,
    ].sort((a, b) => a.id - b.id);
  
    console.log(newFields);
    setFields(newFields);
  }, [machineDetails]);
  




  const [machineTypes, setMachineTypes] = useState([]);
  const [cycleTimes, setCycleTimes] = useState([]);
  const [fixtureCosts, setFixtureCosts] = useState([]);

  const addField = () => {
    const newFields = [
      ...fields,
      {
        id: fields.length > 0 ? fields[fields.length - 1].id + 1 : 1,
        label: 'Machine Type',
        type: 'select',
        options: ['CNC', 'VMC', 'HMC', 'As cast'],
        value: '',
      },
      {
        id: fields.length > 0 ? fields[fields.length - 1].id + 2 : 2,
        label: 'Next Cycle time',
        value: '',
      },
      {
        id: fields.length > 0 ? fields[fields.length - 1].id + 3 : 3,
        label: 'Next Machining Fixture cost',
        value: '',
      },
    ];
    setFields(newFields);
  };

  const removeField = (id) => {
    const index = fields.findIndex((field) => field.id === id);
    if (index !== -1) {
      const newFields = fields.filter(
        (_, i) => i < index || i >= index + 3
      );
      setFields(newFields);
    }
  };

  const handleChange = (id, event) => {
    const updatedFields = fields.map((field) =>
      field.id === id ? { ...field, value: event.target.value } : field
    );

    const fieldIndex = fields.findIndex((field) => field.id === id);
    if (fieldIndex !== -1) {
      if (fieldIndex % 3 === 0) {
        const machineTypeIndex = fieldIndex / 3;
        const newMachineTypes = [...machineTypes];
        newMachineTypes[machineTypeIndex] = event.target.value;
        setMachineTypes(newMachineTypes);
        setMachineDetails((prevMachineDetails) => ({
          ...prevMachineDetails,
          machineType: newMachineTypes,
        }));
      } else if (fieldIndex % 3 === 1) {
        const cycleTimeIndex = (fieldIndex - 1) / 3;
        const newCycleTimes = [...cycleTimes];
        newCycleTimes[cycleTimeIndex] = event.target.value;
        setCycleTimes(newCycleTimes);
        setMachineDetails((prevMachineDetails) => ({
          ...prevMachineDetails,
          cycleTime: newCycleTimes,
        }));
      } else {
        const fixtureCostIndex = (fieldIndex - 2) / 3;
        const newFixtureCosts = [...fixtureCosts];
        newFixtureCosts[fixtureCostIndex] = event.target.value;
        setFixtureCosts(newFixtureCosts);
        setMachineDetails((prevMachineDetails) => ({
          ...prevMachineDetails,
          fixtureCost: newFixtureCosts,
        }));
      }
    }

    setFields(updatedFields);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setMachineDetails({
      ...machineDetails,
      [name]: value
    });
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
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
              >
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
                      defaultValue=""
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
                    value={field.value}
                    onChange={(event) => handleChange(field.id, event)}
                  />
                )}
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} sm={12}>
            <Stack direction="row" spacing={4} sx={{ justifyContent: 'center' }}>
              {fields.length > 3 && (
                <IconButton
                  onClick={() => removeField(fields[fields.length - 3].id)}
                >
                  <RemoveIcon />
                </IconButton>
              )}
              {fields.length < 21 && (
                <IconButton onClick={addField}>
                  <AddIcon />
                </IconButton>
              )}
            </Stack>
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
              value={machineDetails.remarks}
              onChange={handleInputChange}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Machine;