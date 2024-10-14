import HeaderStyle from './Header.module.css'

const Header = () => {

    return (
        <header className={HeaderStyle.header}>
        <img className={HeaderStyle.logo} src='https://steamuserimages-a.akamaihd.net/ugc/772863038440906417/92E7DC3ABD2E0025CFBEEC9748180E5614B9AEEF/?imw=512&&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false' />
      </header>
    );
}

export default Header;