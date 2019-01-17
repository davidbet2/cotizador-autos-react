import React from 'react';

const Header = (props) => {
    return (
        <div>
            <header className="top">
                <h1>
                    {props.titulo}
                </h1>
            </header>
        </div>
    );
};

export default Header;