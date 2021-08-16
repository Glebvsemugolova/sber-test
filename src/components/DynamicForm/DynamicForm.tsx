import React from 'react';
import dayjs from 'dayjs';
import { useForm } from 'react-hook-form';
import { Grid, TextField } from '@material-ui/core';
import { FormField } from '../../types';


export interface DynamicFormProps {
    formFields: FormField[]
}

export const DynamicForm = ({formFields}: DynamicFormProps) => {
    const {register, watch} = useForm()

    const createNewFormField = (field: FormField) => {
        switch (field.type) {
            case "Text Field":
                return (
                    <TextField
                        fullWidth
                        variant={'outlined'}
                        {...register(field.name)}
                    />
                )
            case "Text Area":
                return (
                    <TextField
                        fullWidth
                        multiline
                        rows={3}
                        variant={'outlined'}
                        {...register(field.name)}
                    />
                )
            case "Date / Time":
                return (
                    <TextField
                        type={'datetime-local'}
                        fullWidth
                        variant={'outlined'}
                        {...register(field.name)}
                    />
                )
        }
    }

    const createFieldPreview= (field: FormField) => {
        const fieldValue = watch(field.name);
        const result = field.type === 'Date / Time'
            ? fieldValue !== undefined ? dayjs(fieldValue).format('YYYY-MM-DD hh:mm') : undefined
            : fieldValue

        return <div>{result}</div>
    }

  return (
      <form>
          <Grid container direction={'column'} spacing={2}>
              {formFields.map(field => {
                  return <Grid
                      key={field.name}
                      item
                      xs={12}
                      container
                      alignItems={'center'}
                      justifyContent={'space-between'}
                  >
                      <Grid item container xs={5} direction={'column'}>
                          <Grid item>
                              {field.type}
                          </Grid>
                          <Grid item>
                              {createNewFormField(field)}
                          </Grid>
                      </Grid>

                      <Grid item xs={5}>
                          {createFieldPreview(field)}
                      </Grid>
                  </Grid>
              })}
          </Grid>
      </form>
  );
}
