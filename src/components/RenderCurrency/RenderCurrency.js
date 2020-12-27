import React, { Component } from 'react';

class RenderCurrency extends Component {
state = {
    buyCurrency : [] , 
    sellCurrency : []
}
    componentDidMount() {
        console.log('------------------');
        console.log(this.props.currency);
        let fetchBuyCurrency = [] ; 
        for(let i = 0 ; i < 15 ; i++){
            fetchBuyCurrency.push({
                ...this.props.currency[i] , 
                id : i
            });
        }
        let fetchSellCurrency = [] ; 
        for(let j = 16 ; j < 30 ; j++){
            fetchSellCurrency.push({
                ...this.props.currency[j] , 
                id : j
            });
        }
        this.setState({
            buyCurrency : fetchBuyCurrency , 
            sellCurrency : fetchSellCurrency
        });
    }
    render() {
        const countries = ['usd' , 'eur' , 'aed' , 'inr' , 'try' , 'rub' , 'cny' , 'krw' , 'chf' , 'jpy' , 'cad' , 'gbp' , 'sek' , 'nok' , 'iqd' , 'aud'] ; 
        return (
            <div>
                <p>mahtab</p>
                {countries.map((item,index)=>{
                    return(
                        <div key = {index} >
                            <p>{item}</p>
                        </div>
                    )
                })}
                <p>-----------------------------</p>
                 {this.state.buyCurrency.map((buy) => {
                    return (
                        <div key={buy.id} style = {{border : '1px solid black'}}>
                            <p>{buy.slug}</p>
                            <p>{buy.p}</p>
                        </div>
                    )
                })}
                 <p>-----------------------------</p>
                 {this.state.sellCurrency.map((sell) => {
                    return (
                        <div key={sell.id}  style = {{border : '1px solid black'}}>
                            <p>{sell.slug}</p>
                            <p>{sell.p}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default RenderCurrency; 