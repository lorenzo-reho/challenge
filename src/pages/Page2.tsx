import './Page2.css';

import {useForm, SubmitHandler} from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import Button from '@mui/material/Button';
import FormField from '../components/FormField';
import {FormData, FormSchema} from  "../types.ts"
import { useState } from 'react';
import axios from 'axios'

const Page2 = () => {
    const [status, setStatus] = useState(false);
    const {register, handleSubmit, formState: { errors } } = useForm<FormData>({resolver: zodResolver(FormSchema)});
    const onSubmit:SubmitHandler<FormData> = (data) => 
    {        
        axios.post("http://localhost:5000", data)
        .then((response) => {
            console.log(response);
            setStatus(true);
        }).catch((error) => {
            console.log(error);
        });
    }
    
    return (
        <div className="container">
            <h1>Simple Form</h1>
            <form onSubmit={handleSubmit(onSubmit)}>

                <FormField  register={register} error={errors.name} labelText="Name" name="name"/>
                <FormField  register={register} error={errors.surname} labelText="Surname" name="surname"/>
                <FormField  register={register} error={errors.email} labelText="Email" name="email"/>
                <FormField  register={register} error={errors.telephone} labelText="Mobile phone" name="telephone"/>

                <Button className="submit-button" type='submit' variant="outlined" sx={{ my: 1 }}>Submit</Button>
                
                {status && <h2 style={{color: "green", textAlign:"center"}}>Form submitted!</h2>}

            </form>
        </div>

      );
}

export default Page2;
