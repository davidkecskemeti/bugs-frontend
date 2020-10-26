import Bugs from "./components/Bugs";
import configureStore from "./store/configureStore";
import {Provider} from 'react-redux';
import BugsList from "./components/BugsList";

const store = configureStore()

export default function App() {
    return (
        <div className="App">
            <Provider store={store}>
                <BugsList/>
                {/*<Bugs/>*/}
            </Provider>
        </div>
    );
}