import React from 'react';

export default class Img extends React.Component {
    
    render(){
    const {src, width='100%', height='100%', opacity=1, filter = 'none'} = this.props
    const img = Array.isArray(src) ? src[ Math.floor(Math.random()*src.length)]: src;
    const style={
        content : {
                width,
                height,
                background: `url(${img}) no-repeat center center`,
                backgroundSize: 'cover',
                opacity,
                filter
            },
    }
  return (
    <div style={style.content}>
    </div>
  );}
}

