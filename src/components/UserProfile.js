import React, { useState } from 'react'
import DisplayInfo from './DisplayInfo';

const UserProfile = () => {

    const[data, setData] = useState({});
    const[username, setUsername] = useState('');
    const[repositories, setRepositories] = useState([]);

    const handleOnChange = e => {
        setUsername(e.target.value);
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const profile = await fetch(`https://api.github.com/users/${username}`);
        const profileData = await profile.json();
        console.log(profileData);

        const repositories = await fetch(profileData.repos_url); 
        const reposData = await repositories.json();
        console.log(reposData);

        if(profileData){
            setData(profileData);
            setRepositories(reposData);
        }
    }

    return (
        <div className='user-profile-container'>
            <div className='form-section'>
                <form>
                    <div className="ui search">
                        <div className="ui icon input">
                            <input className="prompt" type="text" placeholder="Username or Login" value={username} onChange={handleOnChange} />
                            <i className="search icon"></i>
                        </div>
                    <button className="submit ui teal button" onClick={handleSubmit}>Search</button>
                    </div>
                </form>
            </div>
            <DisplayInfo data={data} repositories={repositories} />
        </div>
    )
}

export default UserProfile

