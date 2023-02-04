import React from "react";
import { Formik, } from 'formik';
import * as yup from 'yup';
import { FormStyled, Label, Fieldtyled, Button, ErrMessage } from "./ContactForm.styled";

const schema = yup.object().shape({
    name: yup.string().required(),
})

const initialValues = {
    name: ''
};

export const ContactForm = ({ tittle }) => {
    const handleSubmit = (values, {resetForm}) => {
        console.log(values);
        resetForm();
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     const inputValue = e.target.elements.name.value;
    //     console.log(inputValue);
    // }

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}>

            <FormStyled autoComplete="off"> 
             <Label htmlFor="name">Name
             <Fieldtyled
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                        />
                <ErrMessage name='name' component='div' />        
                </Label>
                <Button type="submit">Add contact</Button>
            </FormStyled>
            
            </Formik>
    )
}