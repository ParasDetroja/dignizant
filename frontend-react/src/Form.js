import { useEffect, useState } from "react";
import React from "react";
import axios from "axios";
import {FormGroup,Input, FormControl, FormLabel, InputLabel, FormHelperText,Checkbox,FormControlLabel,Button, Radio, RadioGroup  } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const Form = () => {
    const id = window.location.href.split('=').pop();
    const [form, setForm] = useState();
    const [error, setError] = useState([]);
    useEffect(() => {
        getForm(id);
    },[]);
    
    const getForm = (id) => {
        axios.post(`http://localhost:8000/getForm`,{ id: id }).then((res) => {
            console.log(res.data);
            setForm(JSON.parse(res.data.form_json));
        }).catch((err) => {
            console.log(err);
        });
    }
    
    const handleChange = (text, index) => {
        let obj = [...form];
        obj[index].answers = text;
        obj[index].error = "";
        setForm(obj);
    }

    const handleRadio = (index,num) => {
        let obj = [...form];
        obj[index].answers = obj[index].options[num];
        obj[index].error = "";
        setForm(obj);
    }

    const handleCheckbox = (index, num) => {
        let obj = [...form];
        obj[index].answers.push(obj[index].options[num]);
        obj[index].error = "";
        setForm(obj);
    }

    const handleSelect = (index,value) => {
        let obj = [...form];
        obj[index].answers = value;
        obj[index].error = "";
        setForm(obj);
    }
    let validate = form && form.map((item) => {
        if(item.required){
           return  item.answers.length > 0 ? true : false;
        }
    })
   
    const handleValidate = () => {
        let err = [];
        let validate = true;
        if(!form[0].full_name){
            validate = false;
            err['full_name'] = "Please Enter Name.";
        }
        if(!form[0].email){
            validate = false;
            err['email'] = "Please Enter Email.";
        }
        form.map((item, index) => {
            console.log('wscjkx',item)
            if(index != 0){
                console.log('dscxz',item.required)
                if(item.answers.length == 0 && item.required) {
                    item.error = "This field is required."
                    validate = false;
                }
            }
        })
        setError(err);
        if(validate){
            handleResponse();
        }
    }
    console.log('sdcx s',form)

    const handleResponse = () => {

        let json = JSON.stringify(form);
        axios.post('http://localhost:8000/userResponse',{ form_json: json, form_id: id }).then((res) => {
            alert('submited');
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <>
            <div className="container" align="center">
                <div>
                    <h2>User Details</h2>
                    <div>
                        <FormControl required>
                            <InputLabel htmlFor="full_name">
                            Full Name
                            </InputLabel>
                            <Input
                            required
                            autoFocus
                            name="full_name"
                            id="full_name"
                            onChange={(e) => {  let obj = [...form];
                                obj[0].full_name = e.target.value;
                                setForm(obj); }}
                            />
                            <FormHelperText className="error">
                             { error && error.full_name && <span className="error">{ error.full_name }</span> }
                            </FormHelperText>
                        </FormControl>
                    </div>
                    <div className="mt-10">
                        <FormControl required>
                            <InputLabel htmlFor="email">
                            Email id
                            </InputLabel>
                            <Input
                            required
                            autoFocus
                            name="email"
                            id="email"
                            onChange={(e) => {  let obj = [...form];
                                obj[0].email = e.target.value;
                                setForm(obj); }}
                            />
                            <FormHelperText>
                                { error && error.email && <span className="error">{ error.email }</span> }
                            </FormHelperText>
                        </FormControl>
                    
                    </div>
               
                </div>
                <div className="card">
                    {form && form.map((item,index) => (
                        <div>
                            { index == 0  && <div>
                                <h2>{ form[0].title }</h2>
                            </div>}
                            { item.type == "paragraph" && <div className="d-flex">
                            <InputLabel htmlFor="paragraph">
                                {item.title}{ item.required == true &&  <span className="error">*</span>}
                            </InputLabel>
                            <FormControl required>
                                <Input
                                    required
                                    autoFocus
                                    name="paragraph"
                                    id="paragraph"
                                    onChange={(e) => { handleChange(e.target.value, index); }} 
                                />
                                <FormHelperText className="error">
                                { item?.error && <span className="error">{item?.error}</span> }
                                </FormHelperText>
                            </FormControl>
                            </div> }
                            { item.type == "radio" && <div className="">
                                <div className="d-flex">
                                    <FormLabel id="demo-radio-buttons-group-label">{item.title} { item.required == true &&  <span className="error">*</span>}</FormLabel>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        defaultValue="female"
                                        name="radio-buttons-group"
                                        row
                                    >
                                        <FormControlLabel value={true} control={<Radio name={`radio${index}`}/>} label={item.options[0]} onClick={() => { handleRadio(index, 0) }}/>
                                        <FormControlLabel value={false} control={<Radio name={`radio${index}`}/>} label={item.options[1]} onClick={() => { handleRadio(index, 1) }}/>
                                    </RadioGroup>
                                </div>
                                <FormHelperText className="error">
                                { item?.error && <span className="error d-flex">{item?.error}</span> }
                                </FormHelperText>
                            </div>}
                            { item.type == "checkbox" && <div >
                                    <div className="d-flex">
                                        <FormLabel >{item.title} { item.required == true &&  <span className="error">*</span>}</FormLabel>
                                        <FormGroup row>
                                            <FormControlLabel control={<Checkbox onClick={() => { handleCheckbox(index, 0) }} />} label={ item.options[0] } />
                                            <FormControlLabel control={<Checkbox onClick={() => { handleCheckbox(index, 1) }}/>} label={ item.options[1] } />
                                        </FormGroup>

                                    </div>
                                    
                                    <FormHelperText className="error">
                                    { item?.error && <div className="error d-flex">{item?.error}</div> }
                                    </FormHelperText>
                            </div> }
                            { item.type == "dropdown" && <div className="d-flex">
                                <InputLabel id={`dropdown${index}`}>{item.title} { item.required == true &&  <span className="error">*</span>}</InputLabel>
                            <FormControl className="w-50">
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    label="Select..."
                                    onChange={(e) => { handleSelect(index,e.target.value) }}
                                >
                                    <MenuItem value={item.options[0]}>{item.options[0]}</MenuItem>
                                    <MenuItem value={item.options[1]}>{item.options[1]}</MenuItem>
                                </Select>
                                <FormHelperText className="error">
                                { item?.error && <span className="error">{item?.error}</span> }
                                </FormHelperText>
                                </FormControl>

                            </div> }
                        </div>
                    ))}
                     <div className="mt-10">
                        <Button type="button" variant="contained" onClick={handleValidate}>Submit Response</Button>
                    </div>
                </div>

               
            </div>
        </>
    );
}

export default Form;