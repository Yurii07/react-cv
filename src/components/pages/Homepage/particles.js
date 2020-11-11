import React from 'react';
import Particles from 'react-particles-js';

const ParticlesCanvas = () => {

    return (
        <Particles
            params={{
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: false,
                            value_area: 1000
                        }
                    },
                    line_linked: {
                        shadow: {
                            enable: true,
                            color: "white",
                            blur: 9
                        }
                    },
                    size: {
                        value: 2
                    }
                }
            }}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                zIndex: '-1'
            }}
        />
    );
}

export default ParticlesCanvas;