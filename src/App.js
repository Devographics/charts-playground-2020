import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { FeaturesUsageRings } from './charts/features_usage_rings/FeaturesUsageRings'
import { Constellation } from './charts/constellation/Constellation'

const App = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Constellation</Link>
                        </li>
                        <li>
                            <Link to="/features-usage-rings">FeaturesUsageRings</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path="/features-usage-rings">
                        <FeaturesUsageRings />
                    </Route>
                    <Route path="/">
                        <Constellation />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
