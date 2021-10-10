import { Route, Switch } from 'react-router'
import Confraternization from '../pages/Confraternization'
import Home from '../pages/Home'
import Graduation from '../pages/Graduation'
import Weeding from '../pages/Weeding'
export default function Routes() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route path="/confraternization">
                <Confraternization />
            </Route>

            <Route path="/graduation">
                <Graduation />
            </Route>

            <Route path="/weeding">
                <Weeding />
            </Route>
        </Switch>
    )
}
