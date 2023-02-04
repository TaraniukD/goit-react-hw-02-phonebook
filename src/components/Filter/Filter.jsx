import React from "react";
import { Form, Label, FormInput } from './Filter.styled'

export const Filter = () => {
    return(
        <Form action="">
            <Label htmlFor="">Find contacts by name
                <FormInput type="text" />
            </Label>
        </Form>
    )
}