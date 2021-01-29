import React from 'react'
import HeaderTable from './todo/HeaderTable/HeaderTable'
import AddTableRow from "./todo/AddTableRow/AddTableRow";

const App = (props) => {
    return (
            <div className='wrapper'>
                    <h2>Hello</h2>
                    <button id="button" onClick={AddTableRow}>добавление строки</button>
                <div>
                    <HeaderTable state={props.state.headerTable}></HeaderTable>
                </div>
            </div>
    )
}
export default App;