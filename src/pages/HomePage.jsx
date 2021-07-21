
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addNewHobby, setActiveHobby } from '../actions/hobby';
import HobbyList from '../components/Home/HobbyList/HobbyList';
var key = require("random-key");


HomePage.propTypes = {
    
};

const randomKey = () => {
    return key.generate();
}

function HomePage(props) {
    const hobbyList = useSelector(state => state.hobby.list);
    const activeId = useSelector(state => state.hobby.activeId);
    const dispatch = useDispatch();
    console.log('Hobby list: ', hobbyList);

    const handleAddHobbyClick = () => {
        //Random a hobby object:
        const newId = randomKey();
        const newHobby = {
            id: newId,
            title: `Hobby ${newId}`,
        }
        //console.log(newHobby);
        // Dispatch action to add new hobby
        const action = addNewHobby( newHobby );
        dispatch(action);
    }

    const handleHobbyClick = (hobby) => {
        const action = setActiveHobby(hobby);
        dispatch(action);
    }

    return (
        <div className="home-page">
            <h1>REDUX HOOKS</h1>

            <button onClick={handleAddHobbyClick}>Random Hobby</button>
            <HobbyList 
                hobbyList={hobbyList}
                activeId={activeId}
                onHobbyClick={handleHobbyClick}
            > 
            </HobbyList>
        </div>
    );
}

export default HomePage;