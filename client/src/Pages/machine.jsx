import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Stack } from '@mui/material';
import { useState } from "react";

// ... rest of your code ...

// eslint-disable-next-line no-unused-vars
const MachineQuality = (props) => {
  const [fields, setFields] = useState([
    {
      id: 1,
      label: 'Machine Type - CNC/VMC/HMC',
      value: '',
    },
    {
      id: 2,
      label: 'Cycle time',
      value: '',
    },
    {
      id: 3,
      label: 'Machining Fixture cost (One time Inv)',
      value: '',
    },
  ]);

  const addField = () => {
    const newFields = [
      ...fields,
      {
        id: fields.length + 1,
        label: 'Next Machine Type - CNC/VMC/HMC',
        value: '',
      },
      {
        id: fields.length + 2,
        label: 'Next Cycle time',
        value: '',
      },
      {
        id: fields.length + 3,
        label: 'Next Machining Fixture cost',
        value: '',
      },
    ];
    setFields(newFields);
  };

  const removeField = (id) => {
    // Find the index of the field within its group
    const index = fields.findIndex((field) => field.id === id);
    if (index !== -1) {
      // Remove the entire group of fields (3 fields)
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
    setFields(updatedFields);
  };

  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        mt: 4,
        mb: 2,
      }}
    >
      <Box
        component="form"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
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
                {field.label}
              </Typography>
              <TextField
                required
                label="Enter Details"
                variant="outlined"
                fullWidth
                size="small"
                value={field.value}
                onChange={(event) => handleChange(field.id, event)}
              />

            </Grid>
          ))}
        </Grid>
        <Stack direction="row" spacing={2}>
          {fields.length > 3 && (
            <IconButton onClick={() => removeField(fields[fields.length - 3].id)}>
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
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }}  >Inspection Gauges Cost </Typography>

            <TextField
              required
              id="Inspection Gauges Cost "
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }}  >Leak testing fixture cost </Typography>

            <TextField
              required
              id="Leak testing fixture cost "
              label=" Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }}  > Washing fixture cost </Typography>

            <TextField
              required
              id="Washing fixture cost "
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }} > Plastic Protection Cap Costs (Specify Quantity & Cost)  </Typography>

            <TextField
              required
              id="Plastic Protection Cap Costs (Specify Quantity & Cost) "
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem', padding: '0.3rem' }}  > Packaging Cost-(Corrugated/PP/Plastic/Exports Grade)  </Typography>

            <TextField
              required
              id="Packaging Cost-(Corrugated/PP/Plastic/Exports Grade) "
              label="Enter Details"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
          <Grid item xs={12} sm={12}>
            <Typography variant="subtitle1" sx={{ textAlign: 'left', color: '#054470', fontWeight: '650', fontSize: '1.2rem' }}> Remarks </Typography>
            <TextField
              label="Enter Remarks"
              id="Remark"
              variant="outlined"
              fullWidth
              size="small"
            />
          </Grid>
        </Grid>
        {/* Other fields and buttons */}
      </Box>
    </Container>
  );
};

export default MachineQuality;
