import React, { Component } from 'react';
import RenderCurrency from '../RenderCurrency/RenderCurrency';
import Axios from 'axios';
import Spinner from './../Spinner/Spinner';
import classes from './CurrencyLayout.module.css';
import SyncIcon from '@material-ui/icons/Sync';

class CurrencyLayout extends Component {
    state = {
        currency: [],
        sellCurrency: [],
        BuyCurrency: [],
        lastUpdated: '',
        loading: false
    }
    /*componentDidMount() {
        const fetchCurrency = [];

        Axios.get('https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json')
            .then(res => {
                console.log(res);
                for (let key in res.data.sana.data) {
                    fetchCurrency.push({
                        ...res.data.sana.data[key],
                        id: key
                    });
                }
                this.setState({ currency: fetchCurrency, lastUpdated: res.data.sana.data[0].updated_at });
            })
    }*/
    refreshCurrencyExchange = () => {
        const fetchCurrency = [];
        this.setState({ loading: true });
        Axios.get('https://gist.githubusercontent.com/ahmadpanah/e6225b11235a04397b813d0de6e6f5ad/raw/ab559a1146b5e6f2d57bd546c20c090842d5fcc6/sana.json')
            .then(res => {
                console.log(res);
                for (let key in res.data.sana.data) {
                    fetchCurrency.push({
                        ...res.data.sana.data[key],
                        id: key
                    });
                }
                this.setState({ currency: fetchCurrency, lastUpdated: res.data.sana.data[0].updated_at, loading: false });
            })
    }

    render() {
        return (
            <>
                <div className={classes.FooterBox}>
                    <div className={classes.lastUpdateBox}>
                        <p className={classes.textLastUpdate}>last update  : {this.state.lastUpdated}</p>
                    </div>
                    <div className = {classes.refreshContainer}>
                        <SyncIcon className={classes.refreshIcon} onClick={this.refreshCurrencyExchange} />
                    </div>
                </div>
                {this.state.loading && <Spinner />}
                {!this.state.loading && <RenderCurrency currency={this.state.currency} />}
            </>
        )
    }
}


export default CurrencyLayout; 