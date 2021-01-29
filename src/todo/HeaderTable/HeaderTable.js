import React, {createRef} from 'react';
import './HeaderTable.css';
import {Link, NavLink} from "react-router-dom";
import {rerenderAll} from "../../index";
import CheckBoxRender from "./CheckBoxRender/CheckBoxRender";

const HeaderTable = (props) => {
    let valueIdRow = localStorage.getItem('valueIdRow');
    let CheckBoxR = createRef();

    let CheckBoxAction = ()=>{
        if (CheckBoxR.current.checked == true){
            localStorage.setItem('CheckBoxState', 1);
            rerenderAll();
        }else{
            localStorage.setItem('CheckBoxState', 0);
            rerenderAll();
        }
    }

    let rows = [];
    for (let i = 1; i < valueIdRow; i++){
        let deleteItem = () => {
            localStorage.removeItem("trId" + i);
            localStorage.removeItem("valueId" + i);
            localStorage.removeItem("valueName" + i);
            localStorage.removeItem("valueDate" + i);
            localStorage.removeItem("checkBoxId" + i);

            alert(i + ' удален');
            rerenderAll();
        }
        let  path ="/editPage/?id=" + i;
        let objectOfLocalStorage = [{
            id : localStorage.getItem('valueId' + i),
            valueName: localStorage.getItem('valueName' + i),
            valueDate: localStorage.getItem('valueDate' + i),
            valueCheckBox: localStorage.getItem('checkBoxId' + i),
        }]
        if ((  (objectOfLocalStorage.map(aa => aa.id) != "")
            && (objectOfLocalStorage.map(aa => aa.valueCheckBox) == 0))
            && (localStorage.getItem('CheckBoxState') == 1) ){
            rows.push(<tr >
                    <td className='table'>{objectOfLocalStorage.map(aa => aa.id)}</td>
                    <td className='table'>{objectOfLocalStorage.map(aa => aa.valueName)}</td>
                    <td className='table'>{objectOfLocalStorage.map(aa => aa.valueDate)}</td>
                    <td className='table'>
                        <CheckBoxRender value={objectOfLocalStorage.map(aa => aa.valueCheckBox)}/>
                    </td>
                    <td className='table'>
                        <Link to='/' onClick={deleteItem}>удалить</Link>
                        <br/>
                        <NavLink to={path} >редактировать</NavLink>
                    </td>
                </tr>
            )
        }else if(((objectOfLocalStorage.map(aa => aa.id) != "")
               && (localStorage.getItem('CheckBoxState') == 0) )){
            rows.push(<tr >
                <td className='table'>{objectOfLocalStorage.map(aa => aa.id)}</td>
                <td className='table'>{objectOfLocalStorage.map(aa => aa.valueName)}</td>
                <td className='table'>{objectOfLocalStorage.map(aa => aa.valueDate)}</td>
                <td className='table'>
                    <CheckBoxRender value={objectOfLocalStorage.map(aa => aa.valueCheckBox)}/>
                </td>
                <td className='table'>
                    <Link to='/' onClick={deleteItem}>удалить</Link>
                    <br/>
                    <NavLink to={path} >редактировать</NavLink>
                </td>
            </tr>)
        }
    }
    return (
            <div>
                <input type="checkbox" ref={CheckBoxR} onChange={CheckBoxAction}/>
                <i>Скрыть выполненые</i>
                <form>
                    <table className='table' id="tableOne">
                        <tr>
                            <th className='table'>{props.state.id}</th>
                            <th className='table'>{props.state.name}</th>
                            <th className='table'>{props.state.date}</th>
                            <th className='table'>{props.state.status}</th>
                            <th className='table'>{props.state.action}</th>
                        </tr>
                        {rows}
                    </table>
                </form>
            </div>
    )
}

export default HeaderTable;