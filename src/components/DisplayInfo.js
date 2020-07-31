import React from 'react'

const DisplayInfo = ({data, repositories}) => {
    return (
        <div className='info-container'>
            <div className='profile-section'>
                <div>{!data.avatar_url ? (' ') : (<img className="ui centered small circular image" src={data.avatar_url} alt={data.avatar_url} />)}</div>
                <div className='bio-section'>
                    <h2>{!data.login ? (' ') : `Name: ${data.login}`}</h2>
                    <div>{!data.bio ? (' ') : `Bio: ${data.bio}`}</div>
                    <div>{!data.html_url ? (' ') : `GitHub_URL: ${data.html_url}`}</div>
                </div>
            </div>
            <div className='repositories-section'>
                    <h3>{!data.login ? ' ' : 'Repositories:'}</h3>
                    {repositories.map(repo => (
                        <div className="ui middle aligned animated list" key={repo.name}>
                            <div className="item">
                                <i className="ui avatar image fa fa-github fa-2x" aria-hidden="true"></i>
                                <div className="content">
                                    <a href={repo.html_url} className="header" target="_blank" rel="noopener noreferrer">{repo.html_url}</a>
                                    <div className="description">{repo.name}</div>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>  
        </div>
    )
}

export default DisplayInfo;

/*
<div className="ui relaxed divided list" key={repo.name}>
                        <div className="item">
                            <i className="fa fa-github" aria-hidden="true"></i>
                            <div className="content">
                                <a href={repo.html_url} className="header">{repo.html_url}</a>
                                <div className="description">{repo.name}</div>
                        </div>
                        </div>
                    </div>
                    ))}` }
*/
