import TextField from "@mui/material/TextField";
import {FormFieldProps} from  "../types.ts"


const FormField: React.FC<FormFieldProps> = ({register, error, labelText, name}) => {
    return (
        <>
           <TextField {...register(name,  {required:true})} label={labelText} variant="outlined" sx={{ my: 1 }}/> 
           {error && <p className="error">{error.message}</p>}
        </>      
      );
}

export default FormField;