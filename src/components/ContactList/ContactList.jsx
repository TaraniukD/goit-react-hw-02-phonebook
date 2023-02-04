import React from "react";

import { ListUl, ListLi, ListP } from "./ContactsList.styled";

export const ContactList = ({contacts}) => {
    
    return (
        <ListUl>
            { 
            contacts.map(({id, name, number}) => {
                return (
                    <ListLi key={id}>{name}:<ListP>{number}</ListP></ListLi>
                )
                
            })}
        </ListUl>
    )}
