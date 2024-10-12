const Header = () => {
  return (
    <header className="w-full items-center text-lg ml-0.1 md:ml-1 flex justify-between p-1">
    <h1 className="home-text"> Hello,<br/>Portfolio
      <span className="hover-text"> Hello,<br/>Portfolio
        </span>
        </h1>
        <nav className=" flex w-full screen-max-width md:ml-14 justify-end mr-5">
          <a href="#project"><button className="specialBtn">Projects</button></a>
        </nav>
  </header>
  )
}
export default Header