import React from "react";
import { Form, FormInput } from './Filter.styled'

export const Filter = () => {
    return(
        <Form action="">
            <label htmlFor="">Find contacts by name
                <FormInput type="text" />
            </label>
        </Form>
    )
}