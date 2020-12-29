import React, { Component } from 'react';
import classes from './RenderCurrency.module.css';
import usd from '../../assets/images/usd.png';
import eur from '../../assets/images/eur.png';
import aed from '../../assets/images/uae.png';
import inr from '../../assets/images/ind.png';
import tri from '../../assets/images/try.png';
import rub from '../../assets/images/rub.png';
import cny from '../../assets/images/cny.png';
import krw from '../../assets/images/krw.png';
import chf from '../../assets/images/chf.png';
import jpy from '../../assets/images/jpy.gif';
import cad from '../../assets/images/cad.png';
import gbp from '../../assets/images/gbp.jpg';
import sek from '../../assets/images/sek.jpg';
import nok from '../../assets/images/nok.png';
import iqd from '../../assets/images/iqd.png';

class RenderCurrency extends Component {
    state = {
        buyCurrency: [],
        sellCurrency: []
    }
    componentDidUpdate() {
        console.log('components did update ');
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
        const photos = [usd, eur, aed, inr, tri, rub, cny, krw, chf, jpy, cad, gbp, sek, nok, iqd];
        const countries = ['usd', 'eur', 'aed', 'inr', 'try', 'rub', 'cny', 'krw', 'chf', 'jpy', 'cad', 'gbp', 'sek', 'nok', 'iqd'];
        return (
            <div className={classes.Container}>

                <div className={classes.curreucy} >
                    <div className={classes.imageCountry}>
                        <div>
                            {photos.map((e, i) =>
                                <div className={classes.infoBox} key={i}>
                                   <div className = {classes.imgHolder}>
                                    <img
                                        className={classes.countryPic}
                                        
                                        src={e}
                                        alt="photo"
                                        key={i}
                                    />
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className={classes.coutryName}>
                        <div>
                            {countries.map((item, index) => {
                                return (
                                    <div className={classes.infoBox} key={index} >
                                        <p className={classes.textCountryName} >{item}</p>
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
                                        <p className={classes.titleText}>buy: </p>
                                        <p className={classes.textCost}>{buy.p}</p>

                                    </div>
                                )
                            })}
                        </div>
                        <div>
                            {this.state.sellCurrency.map((sell) => {
                                return (
                                    <div key={sell.id} className={classes.infoBox}  >
                                        <p className={classes.titleText}>sell: </p>
                                        <p className={classes.textCost}>{sell.p}</p>
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