import './Open.css'
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from "axios";
import GithubLogo from "./GitHub-Mark-Light-120px-plus.png"

class Open extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: true
        }
    }

    componentDidMount() {
        let baseURL = 'https://api.github.com'

        let username = 'yimwk'

        axios.get(`${baseURL}/users/${username}`)
            .then((userResponse) => {
                axios.get(userResponse.data.repos_url)
                    .then((repoResponse) => {
                        this.setState({
                            ...this.state,
                            isLoading: false,
                            userInfo: userResponse.data,
                            repos: repoResponse.data
                        })
                    })
            });
    }

    render() {
        return <><h1>Day 22: Open</h1>
            <div className="open-container">
                {this.state.isLoading && <Box sx={{ display: 'flex' }}>
                    <CircularProgress />
                </Box>}
                {!this.state.isLoading &&
                    <div>
                        <div className="github-user-info">
                            <a href={this.state.userInfo.html_url}>
                                <img src={GithubLogo} alt="Github Logo" />
                            </a>
                            <div>{this.state.userInfo.login}</div>
                        </div>
                        {this.state.repos.map(repo => {
                            return <div>
                                <a href={repo.html_url}><div className="github-repo-info">
                                    <div><b>{repo.name}</b></div>
                                    <div>{repo.description}</div>
                                </div></a>
                            </div>
                        })}
                    </div>
                }
            </div>
        </>
    }
}

export default Open;