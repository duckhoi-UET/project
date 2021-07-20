import React from 'react';
import { useSelector } from 'react-redux';
import HobbyList from '../components/Home/HobbyList/HobbyList';


HomePage.propTypes = {
    
};

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    console.log('Hobby list: ', hobbyList);

    return (
        <div className="home-page">
            <h1>REDUX HOOKS</h1>
            <HobbyList hobbyList={hobbyList}> </HobbyList>
        </div>
    );
}

export default HomePage;