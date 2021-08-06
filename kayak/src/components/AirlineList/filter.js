import '../../style/airlines.css';
import React, { useState } from "react";

const alliancesCheckboxs = [
    {name: 'OW', id: 'oneworld', text: 'Oneworld', },
    {name: 'ST', id: 'skyteam', text: 'Sky Team', },
    {name: 'SA', id: 'start', text: 'Star Alliance', },
];

function Filter({ fliterByAlliences }) {
    const [ alliancesSelected, setAlliancesSelected ] = useState([]);

    const handleChange = (event)  => {
        const target = event.target;
        let checkedAlliences = alliancesSelected;

        if (target.checked)
            checkedAlliences.push(target.name);
        else 
            checkedAlliences = alliancesSelected.filter(elem => elem !== target.name);    

        fliterByAlliences(checkedAlliences);
        setAlliancesSelected(checkedAlliences);
    };
    
    return (
        <div className='filter-container'>
            <p className='filter-header'>Filter by Alliences</p>
            <div className='checkbox-container'>
                {alliancesCheckboxs.map(checkbox => (
                    <div key={checkbox.id} className='filter-checkbox'>
                        <input  className='filter-input'
                            type="checkbox"
                            id={checkbox.id}
                            name={checkbox.name}
                            onChange={handleChange}
                        />
                        <label className='filter-label' for={checkbox.id}>{checkbox.text}</label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Filter;