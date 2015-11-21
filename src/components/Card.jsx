import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Card extends Component {
    render() {
        let containerStyle = {
            float: 'left',
            perspective: '800px',
            height: '123px',
            width: '79px',
            margin: '7px 0 0 7px'
        };
        let cardStyle = {
            width:'100%',
            height:'100%',
            transition: 'transform 1s',
            transformStyle: 'preserve-3d',
        };

        let frontStyle = {
            backgroundPosition: this.props.backgroundPosition,
            backgroundImage: 'url("cards.png")',
            height: '100%',
            width: '100%',
            position: 'absolute',
            margin: '0',
            backfaceVisibility: 'hidden'
        };

        let backStyle = {
            backgroundPosition: '0px 123px',
            backgroundImage: 'url("cards.png")',
            height: '100%',
            width: '100%',
            position: 'absolute',
            margin: '0',
            backfaceVisibility: 'hidden',
        };

        if (this.props.isFaceUp) {
            backStyle.transform = 'rotateY( 180deg )';
        }
        else {
            frontStyle.transform = 'rotateY( 180deg )';
        }
        return <div className="card-container" style={containerStyle}>
            <ReactCSSTransitionGroup  key={this.props.id}
                                      transitionName="flip"
                                      transitionAppear={this.props.isFaceUp}
                                      transitionAppearTimeout={500}
                                      transitionEnter={false}
                                      transitionLeave={false}  >
                <div key={this.props.id} className="card" style={cardStyle}>
                    <div  className="back" style={backStyle}></div>
                    <div className="front" style={frontStyle}></div>
                </div>
            </ReactCSSTransitionGroup>
        </div>;
    }
}