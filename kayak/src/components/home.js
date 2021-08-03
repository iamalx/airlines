import Filter from './AirlineList/filter';
import Airlines from './AirlineList/airlines';
import '../App.css';

function Home() {
    return (
        <div className='home-container'>
            <h1 className='airline-header'>Airlines</h1>
            <Filter></Filter>
            <Airlines></Airlines>
        </div>
    );
}

export default Home;