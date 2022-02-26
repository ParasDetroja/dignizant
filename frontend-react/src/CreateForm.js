import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Form from './Form';
import './App.css';
import { useNavigate } from 'react-router-dom';
import {FormGroup,Input, FormControl, FormLabel, InputLabel, FormHelperText,Checkbox,FormControlLabel,Button, Radio, RadioGroup  } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
function CreateForm() {
  const navigate = useNavigate();
  const [object, setObject] = useState([{ title: "" }, { title: "", options: [], answers: [], type: "", required: false }])

  const changeTitle = (title,index) => {
    let obj = [...object];
    obj[index].title = title;
    setObject(obj);
  }

  const changeQueTitle = (title,index) => {
    let obj = [...object];
    obj[index].title = title;
    setObject(obj);
  }

  const changeType = (type,index) => {
    let obj = [...object];
    obj[index].type = type;
    setObject(obj);
  }

  const handleChnageParagraph = (text, index) => {
    let obj = [...object];
    obj[index].answers = text;
    setObject(obj);
  }

  const handlerequiredbox = (index) => {
    let obj = [...object];
    obj[index].required = !obj[index].required;
    setObject(obj);
  }

  const addQuestion = () => {
    let obj = [...object];
    obj.push({ title: "", options: [], answers: [], type: "" , required: false});
    setObject(obj);
  }

  const handleValidate = () => {
    let validate = true;
    let obj = [...object];
    obj.map((item, index) => {
      if(!item.title){
        item.err = "Please enter...";
        validate = false;
      }else if(!item.type && index != 0){
        item.err = "Please Select Type...";
        validate = false;
      }else if(item.type == "radio" && index != 0) {
        if( !item.options[0] ){
          item.err = "Please Enter Option...";
          validate = false;
        }
        if( !item.options[1] ){
          item.err = "Please Enter Option...";
          validate = false;
        }
      }else if(item.type == "checkbox" && index != 0) {
        if( !item.options[0] ){
          item.err = "Please Enter Option...";
          validate = false;
        }
        if( !item.options[1] ){
          item.err = "Please Enter Option...";
          validate = false;
        }
      }
    })
    setObject(obj);
    if(validate == true){
      handleCreateForm();
    }
  }

  const handleCreateForm = () => {
    let json = JSON.stringify(object);
     axios.post('http://localhost:8000/store',{ form_json: json }).then((res) => {
      console.log('edfsuhjnkmds',res.data);
      alert(`http://localhost:8000/form?id=${res.data}`);
      navigate(`/form?id=${res.data}`);
     }).catch((err)=> {
       console.log('err');
     })
  }

  const handleRemove = (index) => {
    let obj = [...object];
    obj.splice(index, 1);
    setObject(obj);
  }

  return (<>
    <div className="App">
      <h2>Create Form</h2>
     
        {
          object && object.map((item,index) => (
            <>
            { index == 0 && <>
                    <div className='p-10'>
                      <FormControl required>
                        <InputLabel htmlFor="code">
                          FormTitle
                        </InputLabel>
                        <Input
                          required
                          autoFocus
                          name="full_name"
                          onChange={(e) => { changeTitle(e.target.value,index) }} value={item.message}
                        />
                       
                          { item.err && <span className='error'>{ item.err }</span> }
                     
                      </FormControl>

                    </div>

            
            </> }
              {
                index != 0 && 
                <>
                 <div className=''>
                   <div className='d-flex mb-2'>
                   <div className='d-flex justify-content-center'>
                    <div className='mr-10'>
                     <FormControl required>
                        <InputLabel htmlFor="code">
                        Question
                        </InputLabel>
                        <Input
                          required
                          autoFocus
                          name="question"
                          onChange={(e) => { changeQueTitle(e.target.value, index); }}
                        />
                        <FormHelperText>
                        { item.err && <span className='error'>{ item.err }</span> } 
                        </FormHelperText>
                      </FormControl>

                    </div>
                    <div className='mr-10'>
                      <FormControl className='ml-2 w-50'>
                        <InputLabel id="demo-simple-select-label">Type</InputLabel>
                        <Select
                          onChange={(e) => { changeType(e.target.value, index); }}
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={item.type}
                          label="type"
                          className=''
                        >
                          <MenuItem>Select Type</MenuItem>
                          <MenuItem value="paragraph">Paragraph</MenuItem>
                          <MenuItem value="radio">Radio</MenuItem>
                          <MenuItem value="checkbox">Checkbox</MenuItem>
                            <MenuItem value="dropdown">Dropdown</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                    <div className='mr-10'>
                    <FormControlLabel value={item.required} onClick={() => { handlerequiredbox(index)}} control={<Checkbox name={`req${index}`}/>} label={<><span onClick={() => { handlerequiredbox(index)}}>Required</span></>} />
                 
                    </div>

                    {/* <input type="checkbox" name="required" onChange={(e) => { handlerequiredbox(e.target.value, index) }}>Required</input> */}
                    <div className="mr-10">
                      <Button type="button"  variant="contained" onClick={addQuestion} className="mr-10">Add Question</Button>
                    </div>
                    <div className="mr-10">
                      <Button type="button" className="mr-10" variant="contained" onClick={() => {handleRemove(index);}} className="ml-2">Remove</Button>
                    </div>
                  </div>

                   </div>
                 {/* <div>
                    {item.type == "paragraph" && <>
                      <div>Ans
                        <input onChange={(e) => { handleChnageParagraph(e.target.value, index) }}/>
                      </div>
                    </>}
                  </div> */}
                  <div className='mb-2'>
                    { item.type == "radio" && <>
                      <div>
                      <FormControl>
                        <RadioGroup
                          aria-labelledby="demo-radio-buttons-group-label"
                          defaultValue="female"
                          name="radio-buttons-group"
                        >
                          {/* onClick={() => {
                              let obj = [...object];
                              obj[index].answers = item.options[0];
                              setObject(obj);
                            }} */}

                         <div style={{ display: "flex" }}>
                          <FormControlLabel value={true} control={<Radio name={`radio${index}`}  />} label={<></>} /> <input onChange={(e) => {
                              let obj = [...object];
                              obj[index].options[0] = e.target.value;
                              setObject(obj);
                            }}/>
                         </div>
                         {/* onClick={() => {
                            let obj = [...object];
                            obj[index].answers = item.options[1];
                            setObject(obj);
                          }} */}
                         <div style={{ display: "flex" }} className="mt-5">
                          <FormControlLabel value={false} control={<Radio name={`radio${index}`} />} 
                          label={<></>} /><input onChange={(e) => {
                            let obj = [...object];
                            obj[index].options[1] = e.target.value;
                            setObject(obj);
                          }}/>
                          </div>
                        </RadioGroup>
                      </FormControl>
                      </div>
                    </> } 
                  </div>
                  <div>
                  { item.type == "checkbox" && <>
                      <div className='mb-2'>
                      <FormGroup>
                        <div className='d-flex mb-2'>
                          <FormControlLabel control={<Checkbox name={`checkbox${index}[]`} />} label={<></>} />
                          <input onChange={(e) => {
                              let obj = [...object];
                              obj[index].options[0] = e.target.value;
                              setObject(obj);
                            }}/>
                        </div>
                       
                      </FormGroup>
                      {/* onClick={() => {
                            let obj = [...object];
                            obj[index].answers.push(item.options[1]);
                            setObject(obj);
                          }} */}
                      <FormGroup>
                        <div className='d-flex'>
                            <FormControlLabel control={<Checkbox  name={`checkbox${index}[]`} />} label={<></>} />
                              <input onChange={(e) => {
                            let obj = [...object];
                            obj[index].options[1] = e.target.value;
                            setObject(obj);
                          }}/>
                        </div>
                       
                      </FormGroup>      
                         
                         
                      </div>
                    </> }
                  </div>
                  <div>
                    { item.type == "dropdown" && <>
                          <div className='mb-2'>
                          <FormControl required className='mr-10'>
                            <InputLabel htmlFor="">
                            option 1
                            </InputLabel>
                            <Input
                              required
                              autoFocus
                              name={`dropdown${index}`}
                              onChange={(e) =>{ let obj = [...object];
                                obj[index].options[0] = e.target.value;
                                setObject(obj); }}
                            />
                            <FormHelperText>
                            
                            </FormHelperText>
                          </FormControl>
                          <FormControl required>
                            <InputLabel htmlFor="">
                            option 2
                            </InputLabel>
                            <Input
                              required
                              autoFocus
                              name={`dropdown${index}`}
                              onChange={(e) => { let obj = [...object];
                                obj[index].options[1] = e.target.value;
                                setObject(obj); }}
                            />
                            <FormHelperText>
                            
                            </FormHelperText>
                          </FormControl>
                          </div>
                    </>  }
                  </div>
                 </div>
                </>
              }
            </>
          ))
        }
     
      <div className='d-flex justify-content-center'>
        <Button type="button"  variant="contained" onClick={() => { handleValidate() }}>Create Form</Button>
      </div>
    </div>

  </>  );
}

export default CreateForm;
