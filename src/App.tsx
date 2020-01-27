import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { createUseStyles } from 'react-jss'

import BestInSlotPage from './components/MainPage'
import Header from './components/Header'
import styles from './style'

const App: React.FC = (props: any) => {
    //@ts-ignore
    const useStyles = createUseStyles(styles)
    const classes = useStyles()

    return (
        <div className={classes.container}>
            <BrowserRouter>
                <Header />
                <Switch>
                    <Route path="/" exact>
                        <BestInSlotPage />
                    </Route>
                    <Route>
                        <>Not Found...</>
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    )
}

export default App
