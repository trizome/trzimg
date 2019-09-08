# trzimg
replace html img

## Usage

idem img tag (src, alt, width, heigth) but with more options

## Exemples

    import React from 'react';
    import {Img} from 'trzimg';

    function App() {
 
        const tabimg= 'https://www.elle.be/fr/wp-content/uploads/2018/07/skincare-480x545.jpg';
        
        return (
            <div>
                <div >
                <Img
                    src={tabimg}
                    width={400}
                    height={200}
                    opacity={0.5}
                    filter="grayscale"/>
                </div>
            </div>
    );
    }

    export default App;


## Options
width
height
opacity
filter
