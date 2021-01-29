import  React from 'react';
import {rerenderAll} from "../../index";

function AddTableRow() {
    let valueIdRow = localStorage.getItem('valueIdRow');
    if(valueIdRow!=null){
        let x = localStorage.getItem('valueIdRow');
        x++;
        localStorage.setItem('valueIdRow', x);
    }else{
        localStorage.setItem('valueIdRow', '2');
        valueIdRow = 1;
    }
    localStorage.setItem('trId' + valueIdRow, valueIdRow);
    localStorage.setItem('valueId' + valueIdRow, valueIdRow);
    localStorage.setItem('valueName' + valueIdRow, "введите значение");
    localStorage.setItem('valueDate' + valueIdRow, "введите значение");
    localStorage.setItem('checkBoxId' + valueIdRow, 0);
    if (localStorage.getItem('CheckBoxState') ==null){
        localStorage.setItem('CheckBoxState', 0);
    }

    rerenderAll();
}

export default AddTableRow;