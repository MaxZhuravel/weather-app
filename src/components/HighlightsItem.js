import React, {Component} from 'react';

class HighlightsItem extends Component {

    render() {

        let subtitle, value;

        if (this.props.title === 'Wind Status') {
            subtitle = (
                <div className="subtitle">
                    <img src="/icons/wind-direction.png" alt="" className="wind-icon"></img>{this.props.subtitle}
                </div>);
        } else {
            subtitle = <div className="subtitle">{this.props.subtitle}</div>
        }

        if ((this.props.title === 'Sunrise & Sunset') && (this.props.value)) {
            value = this.props.value.map(item => {
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
            value = <div className="large-number">{this.props.value}
                <span className="unit-measure">{this.props.unitMeasure}</span>
            </div>
        }

        return (
            <div className="highlights__item">
                <div className="highlights__item-title">{this.props.title}</div>
                {value}
                {subtitle}
            </div>
        );
    }
}

export default HighlightsItem;