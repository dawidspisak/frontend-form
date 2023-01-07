import { FC } from "react";
import { useFormContext, Controller } from "react-hook-form";
import { Grid, TextField, TextFieldProps } from "@mui/material";

type FormInputProps = {
  name: string;
} & TextFieldProps;

const FormInput: FC<FormInputProps> = ({ name, ...otherProps }) => {
  const {
    control,
    formState: { errors },
  } = useFormContext();
  return (
    <Grid item xs={12}>
      <Controller
        control={control}
        name={name}
        defaultValue=""
        render={({ field }) => (
          <TextField
            {...field}
            {...otherProps}
            variant="outlined"
            error={!!errors[name]}
            fullWidth={true}
            helperText={
              errors[name] ? (errors[name]?.message as unknown as string) : ""
            }
          />
        )}
      />
    </Grid>
  );
};

export default FormInput;
