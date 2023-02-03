import React from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
})

const initialValues = {
    name: ''
};

export const ContactsForm = ({ tittle }) => {
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
        <div>
            <h1>{tittle}</h1>
            <Form autoComplete="off"> 
             <label htmlFor="name">Name
             <Field
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
                        />
                <ErrorMessage name='name' component='div' />        
                </label>
                <button type="submit">Add contact</button>
            </Form>
           
            </div>
            </Formik>
    )
}