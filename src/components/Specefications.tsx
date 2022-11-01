import Reac, { useState } from 'react';
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
import Modal from '@mui/material/Modal';
import { useSpecefication } from '../hooks/useSpecefication';
import { engine, material, wheel, wheelMaterial, typeOptions } from "../utility/options"
import { Config } from '../utility/types';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const Specefications = () => {
    const { register, handleSubmit, reset } = useForm();
    const { specification, setSpecification, editSpecification } = useSpecefication();
    const [engineType, setEngineType] = useState<string>('v4, petrol');
    const [materialType, setMaterialType] = useState<string>('plastic');
    const [wheelType, setWheelType] = useState<string>('15 radius');
    const [wheelMaterialType, setWheelMaterialType] = useState<string>('Alloy Wheels');
    const [activeSpecificationId, setActiveSpecificationId] = useState<string>('')
    const [newConfigOption, setNewConfigOption] = useState<Array<Config>>([])
    const [type, setType] = useState<string>('text')
    const [name, setName] = useState<string>('')
    const [open, setOpen] = useState<boolean>(false);
    const [expanded, setExpanded] = useState<number | false>(false);
    const [message, setMessage] = useState<string>('');
    const [color, setColor] = useState<string>('')
    const [signature, setSignature] = useState<string>('')

    const handleChange = (panel: number) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const clearFields = () => {
        reset()
        setMessage('')
        setEngineType('v4, petrol');
        setMaterialType('plastic');
        setWheelType('15 radius');
        setWheelMaterialType('Alloy Wheels');
        setActiveSpecificationId('')
        setColor('');
        setSignature('')
    }

    const onSubmit = (data: any) => {
        if (activeSpecificationId) {
            editSpecification(activeSpecificationId, data)
        } else {
            setSpecification(data)
        }
    }

    const selectSpecification = (item: any) => {
        setEngineType(item.engine);
        setMaterialType(item.material);
        setWheelType(item.wheel);
        setWheelMaterialType(item.wheel_type);
        setMessage(item.name);
        setColor(item.color);
        setSignature(item.signature)
    }

    return (
        <div className="App">
            <Box
                sx={{
                    display: 'flex',
                    m: 1,
                    p: 10,
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
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        width: "700px",
                        margin: '0 auto',
                        overflowY: "auto"
                    }}
                >
                    <div>
                        {specification &&
                            specification?.map((item: any) => {
                                return (
                                    <Accordion key={item.id + item?.name} sx={{ marginBottom: '20px' }} expanded={expanded === item.id} onChange={handleChange(item.id)}>

                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                            sx={{ justifyContent: 'space-between' }}
                                        >
                                            <Typography>
                                                {item?.name}
                                            </Typography>
                                            <IconButton onClick={() => { selectSpecification(item); setActiveSpecificationId(item.id) }}>
                                                <EditIcon />
                                            </IconButton>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            {Object.keys(item).map((key) => {
                                                return (
                                                    <Typography key={key + item.id}>
                                                        {`${key}:${item[key]}`}
                                                    </Typography>
                                                )
                                            })}
                                        </AccordionDetails>

                                    </Accordion>
                                )
                            })
                        }
                        <Button sx={{ width: '300px', marginTop: "20px", display: specification.length !== 0 ? "block" : 'none' }} variant="contained" type="submit" onClick={clearFields}>Add new specification</Button>
                    </div>
                </Box>
                <Box
                    sx={{
                        display: 'block',
                        m: 1,
                        p: 1,
                        fontSize: '0.875rem',
                        fontWeight: '700',
                        width: "700px",
                        margin: '0 auto',
                        overflowY: "auto"

                    }}
                >
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <FormGroup>
                            <TextField
                                {...register("name", { required: true })}
                                id="outlined-basic"
                                value={message}
                                onChange={(event) => { setMessage(event.target.value) }}
                                label="Name of specification" variant="outlined" sx={{ width: "100%", marginBottom: '20px' }}
                            />
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
                            <TextField
                                {...register("color")}
                                value={color}
                                onChange={(event) => { setColor(event.target.value) }}
                                id="outlined-basic"
                                label="Color"
                                type="color"
                                variant="outlined"
                                sx={{ width: "100%", marginBottom: '20px' }} />

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
                                sx={{ marginBottom: '20px' }}
                                {...register("air_suspension")}
                                control={<Checkbox />} label="Air suspension" />
                            <TextField
                                {...register("signature")}
                                id="outlined-basic"
                                value={signature}
                                onChange={(event) => { setSignature(event.target.value) }}
                                label="Signature on hood"
                                variant="outlined"
                                sx={{ width: "100%", marginBottom: '20px' }} />

                            {newConfigOption.length !== 0 &&
                                newConfigOption.map((item, index) => {
                                    if (item.type === 'text') {
                                        return (
                                            <TextField key={index + item.name} id="outlined-basic" label={item.name} variant="outlined" sx={{ width: "100%", marginBottom: '20px' }} {...register(item.name)} />
                                        )
                                    }
                                    if (item.type === 'checkbox') {
                                        return (
                                            <FormControlLabel
                                                key={index + item.name}
                                                {...register(item.name)}
                                                control={<Checkbox />} label={item.name} />
                                        )
                                    }
                                })
                            }
                            <Stack spacing={2} direction="row" justifyContent="space-between">
                                <Button variant="contained" onClick={handleOpen}>New config option</Button>
                                <Button variant="contained" type="submit">{activeSpecificationId ? "Change" : "Save"}</Button>
                            </Stack>
                        </FormGroup>
                    </form>
                </Box>
            </Box>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ width: "100%", marginBottom: '20px' }} onChange={(e) => { setName(e.target.value) }} />
                    <TextField
                        id="outlined-select-currency"
                        select
                        label="Type of field"
                        value={type}
                        onChange={(event) => { setType(event.target.value) }}
                        sx={{ width: "100%", marginBottom: '20px' }}
                    >
                        {typeOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                    <Button variant="contained" onClick={() => { setNewConfigOption([...newConfigOption, { name: name, type: type }]) }}>Save</Button>
                </Box>
            </Modal>
        </div >
    );
}

export default Specefications