import {Header, Logo, SeachDiv, SearchInput, Btn} from '../../styles/HeaderComponents/'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
const App = ()=>{
    return(
        <Header>
            <MenuIcon className='MenuIcon'/>
            <Logo><img src="https://logosmarcas.net/wp-content/uploads/2020/04/YouTube-Logo.png" /></Logo>
            <SeachDiv>
                <SearchInput placeholder="Pesquisar" /> <Btn><SearchIcon className="SearchIcon"/></Btn>
            </SeachDiv>
            
        </Header>
    )

}

export default App