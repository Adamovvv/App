import React from 'react';

function Buttons(props) {
    return (
        <div className="buttons">
            <button className="btn btn-b">
                Увеличить
            </button>
            <button className="btn btn-y">
                Уменьшить
            </button>
            <button className="btn btn-g">
                Сбросить
            </button>
        </div>
    );
}

export default Buttons;