import React from 'react';
import soundfile from '../songs/Song1.mp3'
import {Howl} from 'howler';

const tracks = [
    {sound: soundfile, label: 'Song 1'}
]

class MusicPlayer extends React.Component {
    soundPlay = (src) => {
        const sound = new Howl ({
            src,
            html5: true
        })
        sound.play();
    }

    RenderButtonSound = () => {
        return tracks.map((soundObj, index) => {
            return (
                <button key={index} onClick={() => this.soundPlay(soundObj.sound)}>
                    {soundObj.label}
                </button>
            )
        })
    }

    render() {
        return(
            <div className="App">
                <h2>Music</h2>
                {this.RenderButtonSound()}
            </div>
        )
    };
}

export default MusicPlayer;