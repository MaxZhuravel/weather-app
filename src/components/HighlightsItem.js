import React from 'react';

const HighlightsItem = ({title, subtitle, value, unitMeasure}) => {

    let viewSubtitle, viewValue;

    if (title === 'Wind Status') {
        viewSubtitle = (
            <div className="subtitle">
                <img src="/icons/wind-direction.png" alt="" className="wind-icon"></img>{subtitle}
            </div>);
    } else {
        viewSubtitle = <div className="subtitle">{subtitle}</div>
    }

    if ((title === 'Sunrise & Sunset') && (value)) {
        viewValue = value.map(item => {
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
        viewValue = <div className="large-number">{value}
            <span className="unit-measure">{unitMeasure}</span>
        </div>
    }

    return (
        <div className="highlights__item">
            <div className="highlights__item-title">{title}</div>
            {viewValue}
            {viewSubtitle}
        </div>
    );
}

export default HighlightsItem;