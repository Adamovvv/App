import React from 'react';

function Buttons(props) {
    return (
        <div className="buttons">
            <input className="btn btn-b" type="button" onclick="alert('Клик!')" value="Увеличить"/>
            <input className="btn btn-y" type="button" onclick="alert('Клик!')" value="Уменьшить"/>
            <input className="btn btn-g" type="button" onclick="alert('Клик!')" value="Сбросить"/>
        </div>
    );
}

export default Buttons;