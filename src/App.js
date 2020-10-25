import React from 'react'
import styled from 'styled-components'
import { HashRouter as Router, Switch, Route, Link } from 'react-router-dom'
import { FeaturesUsageRings } from './charts/features_usage_rings/FeaturesUsageRings'
import { Constellation } from './charts/constellation/Constellation'
import { ToolsExperienceMarimekko } from './charts/tools_experience_marimekko/ToolsExperienceMarimekko'

const Nav = styled.nav`
    position: fixed;
    width: 200px;
    font-size: 12px;
`

const NavLink = styled(Link)`
    display: block;
    padding: 9px 12px;
    font-weight: 600;
    color: #000;
    text-decoration: none;
`

const Main = styled.main`
    margin-left: 200px;
`

const App = () => {
    return (
        <Router hashType="noslash">
            <div>
                <Nav>
                    <NavLink to="/">Constellation</NavLink>
                    <NavLink to="/features-usage-rings">FeaturesUsageRings</NavLink>
                    <NavLink to="/tools-experience-marimekko">ToolsExperienceMarimekko</NavLink>
                </Nav>
                <Main>
                    <Switch>
                        <Route path="/features-usage-rings">
                            <FeaturesUsageRings />
                        </Route>
                        <Route path="/tools-experience-marimekko">
                            <ToolsExperienceMarimekko />
                        </Route>
                        <Route path="/">
                            <Constellation />
                        </Route>
                    </Switch>
                </Main>
            </div>
        </Router>
    )
}

export default App
