import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from '../components/mainScreen'
import Auth from '../components/authentication'
import Payment from '../components/Payment'
import Example from '../components/example'
import Ticket from '../components/receiptRendering'

const Navigator = () => {
    return(
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/auth" component={Auth} />
                <Route path="/payment" component={Payment} />
                <Route path="/example" component={Example} />
                <Route path="/ticket" component={Ticket} />
            </Switch>
        </Router>
    )
}

export default Navigator