import React from 'react';
import {useField} from "formik";
import {FormField, Label} from "semantic-ui-react";

const TextInput = ({label, ...props}) => {
    const [field, meta] = useField(props); // usefield comes from formik
    return (
        <FormField error={meta.touched && !!meta.error}>
            <label>{label}</label>
            <input {...field}{...props}/>
            {meta.touched && meta.error ? (
                <Label basic color={'red'}>{meta.error}</Label>
            ) : null}
        </FormField>
    );
};

export default TextInput;
