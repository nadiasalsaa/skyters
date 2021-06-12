import './App.css';
import Feeds from './Pages/Feeds'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#6fcced'
    }
  },
  typography: {
    fontFamily: `'Poppins', sans-serif`,
    "fontSize": 12,
    fontWeightRegular: '400',
    fontWeightMedium: '500',
    fontWeightBold: '700',
    
  }
  });



function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Feeds />
    </MuiThemeProvider>
    // <div className="App">
    //   <Feeds/>
    // </div>
  );
}

export default App;
