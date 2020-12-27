import React, { Component } from 'react';
import classes from './RenderCurrency.module.css';

class RenderCurrency extends Component {
    state = {
        buyCurrency: [],
        sellCurrency: []
    }
    componentDidMount() {
        console.log('------------------');
        console.log(this.props.currency);
        let fetchBuyCurrency = [];
        for (let i = 0; i < 15; i++) {
            fetchBuyCurrency.push({
                ...this.props.currency[i],
                id: i
            });
        }
        let fetchSellCurrency = [];
        for (let j = 16; j < 30; j++) {
            fetchSellCurrency.push({
                ...this.props.currency[j],
                id: j
            });
        }
        this.setState({
            buyCurrency: fetchBuyCurrency,
            sellCurrency: fetchSellCurrency
        });
    }
    render() {
        const countries = ['usd', 'eur', 'aed', 'inr', 'try', 'rub', 'cny', 'krw', 'chf', 'jpy', 'cad', 'gbp', 'sek', 'nok', 'iqd'];
        return (
            <div className={classes.Container}>
                <div className={classes.curreucy} >
                 <div className = {classes.imageCountry}>ax</div>
                    <div className={classes.coutryName}>
                        <div>
                            {countries.map((item, index) => {
                                return (
                                    <div className={classes.infoBox} key={index} >
                                        <p>{item}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={classes.currencyBox}>
                        <div>
                            {this.state.buyCurrency.map((buy) => {
                                return (
                                    <div className={classes.infoBox} key={buy.id}>
                                        <p>buy :{buy.p}</p>
                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            {this.state.sellCurrency.map((sell) => {
                                return (
                                    <div key={sell.id} className={classes.infoBox}  >
                                        <p>sell :{sell.p}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default RenderCurrency; 