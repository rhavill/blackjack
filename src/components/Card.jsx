import React, {Component} from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import {Map} from 'immutable'

export default class Card extends Component {
    render() {
        let backgroundPosition = this.props.card.get('backgroundPosition');
        let isFaceUp = this.props.card.get('isFaceUp');
        let id =  this.props.card.get('id');
        let containerStyle = {
            perspective: '800px',
            height: '123px',
            width: '79px',
            position: 'absolute',
            left: 15*this.props.index,
            margin: '7px 0 0 7px'
        };
        let cardStyle = {
            width:'100%',
            height:'100%',
            transition: 'transform 1s',
            transformStyle: 'preserve-3d',
        };

        let frontStyle = {
            backgroundPosition: backgroundPosition,
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

        if (isFaceUp) {
            backStyle.transform = 'rotateY( 180deg )';
        }
        else {
            frontStyle.transform = 'rotateY( 180deg )';
        }
        return <div className="card-container" style={containerStyle}>
            <ReactCSSTransitionGroup  key={id}
                                      transitionName="flip"
                                      transitionAppear={isFaceUp}
                                      transitionAppearTimeout={500}
                                      transitionEnter={false}
                                      transitionLeave={false}  >
                <div key={id} className="card" style={cardStyle}>
                    <div  className="back" style={backStyle}></div>
                    <div className="front" style={frontStyle}></div>
                </div>
            </ReactCSSTransitionGroup>
        </div>;
    }
}

Card.defaultProps = {
    card: Map({isFaceUp: true})
};