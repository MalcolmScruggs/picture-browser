import React, { Component } from 'react';
import axios from 'axios';
import {UnsplashConfig} from './UnsplashConfig'
import './PictureBrowser.css';

export default class PictureBrowser extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: []
        }
    }

    componentDidMount() {
        axios({
            method:'get',
            url:'https://api.unsplash.com/photos/random?count=25',
            headers: {Authorization: `Client-ID ${UnsplashConfig.accesskey}`}
        }).then((resp) => {
            this.setState({data: resp.data});
        }).catch((error) => {
            console.log(error);
            alert(error);
        });
    };

    render() {
        let pictures = this.state.data.map((pic) => {
            return <Picture url={pic.urls.regular} username={pic.user.username} key={pic.id} />
        });
        return (
            <div className="browser-container">
                {pictures}
            </div>
        );
    }
}

function Picture(props) {
    let url = props.url;
    let user = props.username;
    return (
        <div className="picture-container">
            <img className="picture" src={url}/>
            <div className="username-container">
                <a className="username" href={`https://unsplash.com/@${user}`}>{user}</a>
            </div>
        </div>
    )
}