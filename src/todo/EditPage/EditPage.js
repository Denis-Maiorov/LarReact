import React from 'react';
import {Link} from "react-router-dom";
import {useLocation} from "react-router";

const EditPage = () => {
    let value = new URLSearchParams(useLocation().search);
    let id = value.get("id")

    let valueId = 'valueId' + id;
    let valueName = 'valueName' + id;
    let valueDate = 'valueDate' + id;
    let checkBoxId = 'checkBoxId' + id;

    let textRefName = React.createRef();
    let textRefDate = React.createRef();
    let checkBoxRef = React.createRef();


    let buttonSave = () => {
        localStorage.setItem(valueName, textRefName.current.value);
        localStorage.setItem(valueDate, textRefDate.current.value);
        if (checkBoxRef.current.checked == true){
            localStorage.setItem(checkBoxId, 1);
        }else{
            localStorage.setItem(checkBoxId, 0);
        }
        localStorage.setItem('CheckBoxState', 0);
    }
    return (
        <div>
            <h2>Редактирование</h2>
            <Link to='/'>sweet home</Link>
            <div>
                <form>
                    <table className='table'>
                        <tr>
                            <th className='table'>id</th>
                            <th className='table'>наименование</th>
                            <th className='table'>Дата</th>
                            <th className='table'>Статус</th>
                        </tr>
                        <tr>
                            <th className='table' >
                                {localStorage.getItem(valueId)}
                            </th>
                            <th className='table' >
                                <textarea ref={textRefName}>
                                {localStorage.getItem(valueName)}
                                </textarea>
                            </th>
                            <th className='table'>
                                <textarea ref={textRefDate}>
                                {localStorage.getItem(valueDate)}
                                </textarea>
                            </th>
                            <th className='table'>
                                <input type='checkbox' ref={checkBoxRef}/>
                            </th>
                            <th className='table'>
                                <Link to='/' onClick={buttonSave}>Сохранить</Link>
                            </th>
                        </tr>
                    </table>
                </form>
            </div>
        </div>
    )
}
export default EditPage;