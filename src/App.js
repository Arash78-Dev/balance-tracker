import './App.css';
import { AddT } from './components/addtrans/AddT';
import Balance from './components/balance/balance';
import Header from './components/header/header';
import Income from './components/income/incom';
import {Transactionlist} from './components/transaction/transactionlist';
import Background from './layout/background';


import { Globalprovider } from './content/globalstate';
function App() {
  return (
    <Globalprovider>
            <Background>
                    <Header/>
                    <Balance/>
                    <Income/>
                    <Transactionlist/>
                    <AddT/>
            </Background>
    </Globalprovider>
  );
}

export default App;
