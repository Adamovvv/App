import React from 'react';

function Buttons(props) {
    function plus() {
        props.setCounter(props.counter + 1)
    }
    
    function minus() {
        props.setCounter(props.counter - 1)
    }
    
    function reset() {
        props.setCounter(0)
    }
    return (
        <div className="buttons">
            <input onClick={plus} className="btn btn-b" type="button" onclick="alert('Клик!')" value="Увеличить"/>
            <input onClick={minus} className="btn btn-y" type="button" onclick="alert('Клик!')" value="Уменьшить"/>
            <input onClick={reset} className="btn btn-g" type="button" onclick="alert('Клик!')" value="Сбросить"/>
        </div>
    );
}

export default Buttons;