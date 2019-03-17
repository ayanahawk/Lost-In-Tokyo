const Hightlight = ({ color, children }) => (
  <span className={`relative highlight highlight-${color}`}>
    <span className="relative z-2">{children}</span>
  </span>
);

const Intro = () => (
  <div className="m-auto-ns f4 f3-m f2-l tc w-80-l normal">
    <div className="mb3 mb4-ns">
    
      <Hightlight color="aqua">Lost in Tokyo </Hightlight>is a directory of
      funplaces to see, play in and{" "}
      <Hightlight color="yellow">explore</Hightlight>, in{" "}
      <Hightlight color="blue">Tokyo</Hightlight>, Japan.
    </div>
    <div>
      From <Hightlight color="blue">museums</Hightlight>and{" "}
      <Hightlight color="blue">galleries</Hightlight>, to{" "}
      <Hightlight color="pink">robot resturants </Hightlight>and kitchen cafes,
      Tokyo is a gift that keeps giving.{" "}
      <Hightlight color="yellow">Dattebayo!</Hightlight>
    </div>
  </div>
);

const NavItem = ({ className, href, children, logo }) => (
  <li className={`mh2-ns f10 f4-1 tc ${className}`}>
    <a className="white no-underline" href={href}>
      {logo ? (
        <img src="/images/logo.svg" className="db center logo" />
      ) : (
        children
      )}
    </a>
  </li>
);

const Nav = () => (
  <nav className="pt3 pt4-ns mb4 mb0-ns">
    <ul
      className="list flex flex-wrap flex-nowrap-ns justify-between 
    items-center pa0 ma0"
    >
      {menu.map(item => (
        <NavItem {...item} />
      ))}
    </ul>
  </nav>
);

class Attraction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInfo:false
    };

    this.toggleInfo=this.toggleInfo.bind(this);
    this.closeInfo=this.closeInfo.bind(this);
  }

  toggleInfo() {
    this.setState((prevState, props) => ({
      showInfo: !prevState.showInfo
    }));
  }

  closeInfo() {
    this.setState({
        showInfo:false
    });

  }

  render() {
    const { title, description, image, className } = this.props;
    const { showInfo } = this.state;
    return (
      <div
        className={`ph4 ph5-ns ph0-l mb4 mb5-ns w-100 overflow-hidden pointer attraction ${className}`}

        
        onClick={this.toggleInfo}
        onMouseLeave={this.closeInfo}
      >
        <div className="relative">
          
          <div
            className="absolute w-100 h-100 flex items-center pa3 pa4-ns bg-aqua overlay"
            style={{
              transform: showInfo ? "none" : "translateY(-100%)"
            }}
          >
            <div>
              <h1 className="f4 f3-ns mto mb2 regular black normal lh-title">
                {title}
              </h1>
              <p className="lh-title lh-copy-ns mv0 back f6 measure-1">
                {description}
              </p>
            </div>
          </div>
          <img src={`/images/${image}`} className="db" />
        </div>
      </div>
    );
  }
}

const App = () => (
  <div>
    <div className="min-vh-100 ph4 flex flex-column">
      <Nav />
      <Intro />
    </div>

    <div className='flex flex-wrap container'>
      {attractions.map(attraction => (
        <Attraction {...attraction} />
      ))}
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
