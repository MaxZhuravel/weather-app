import React from 'react';

const HighlightsItem = (props) => {

    let subtitle, value;

    if (props.title === 'Wind Status') {
        subtitle = (
            <div className="subtitle">
                <img src="/icons/wind-direction.png" alt="" className="wind-icon"></img>{props.subtitle}
            </div>);
    } else {
        subtitle = <div className="subtitle">{props.subtitle}</div>
    }

    if ((props.title === 'Sunrise & Sunset') && (props.value)) {
        value = props.value.map(item => {
            return (
                <div className="suntime">
                    <div className="suntime__icon">
                        <img src={item.imgSrc} alt=""/>
                    </div>
                    <div className="suntime__time">
                        {item.time}
                    </div>
                </div>)
        })
    } else {
        value = <div className="large-number">{props.value}
            <span className="unit-measure">{props.unitMeasure}</span>
        </div>
    }

    return (
        <div className="highlights__item">
            <div className="highlights__item-title">{props.title}</div>
            {value}
            {subtitle}
        </div>
    );
}

export default HighlightsItem;