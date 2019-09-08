# trzimg
TRzImg is a simple react library to replace the html img tag.
Easily add a filter (sepia, grayscale, ...) or define a display mode (cover, ...).

## Install

    npm i trzimg

## Exemples

    import React from 'react';
    import {Img} from 'trzimg';

    function App() {
 
        const url= 'https://www.elle.be/fr/wp-content/uploads/2018/07/skincare-480x545.jpg';
        
        return (
            <div>
                <Img
                    src={url}
                    width={400}
                    height={200}
                    opacity={0.5}
                    filter="grayscale"
                 />
            </div>
    );
    }

    export default App;


## Options
src

width

height

opacity

filter
