import React from 'react';

export default class Img extends React.Component {
    
    render(){
    const {src, width, height, opacity} = this.props
    const img =src[ Math.floor(Math.random()*src.length)];
    console.log(img)

    const style={
        content : {
                width,
                height,
                background: `url(${img}) no-repeat center center`,
                backgroundSize: 'cover',
                opacity
            },

    }
  return (
    <div style={style.content}>
    </div>
  );}
}

