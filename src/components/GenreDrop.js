import React from 'react';
import { Dropdown } from 'react-bootstrap';

function Genre() {
    const genres = ['Action', 'Horror', 'War', 'Adventure'];

    return (
        <Dropdown>
            <Dropdown.Toggle variant="outline-info" id="genres-dropdown">
                Genres
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {genres.map((genre, index) => (
                    <Dropdown.Item key={index}>{genre}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default Genre;
