import '../../style/airlines.css';

function Filter() {
    return (
        <div className='filter-container'>
            <p className='filter-header'>Filter by Alliences</p>
            <div className='checkbox-container'>
                <div className='filter-checkbox'>
                    <input  className='filter-input' type="checkbox" id="oneworld" name="oneworld" />
                    <label className='filter-label' for="oneworld">Oneworld</label>
                </div>

                <div className='filter-checkbox'>
                    <input className='filter-input' type="checkbox" id="skyteam" name="sky team" />
                    <label className='filter-label' for="skyteam">Sky Team</label>
                </div>

                <div className='filter-checkbox'>
                    <input className='filter-input' type="checkbox" id="star" name="star allience" />
                    <label className='filter-label' for="star">Star Allience</label>
                </div>
            </div>
        </div>
    );
}

export default Filter;