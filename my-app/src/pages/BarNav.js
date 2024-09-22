import Link from "next/link";

export default function BarNav() {
  return (
    <nav className="navbar navbar-expand-lg  bg-black">
      <img src="/maloH.ico" alt="LogoMaloH" width={100} height={80}></img>
      <div className="collapse navbar-collapse " id="navbarNavDropdown">
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link href="/#" className="nav-link text-white">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/quienes_somos" className="nav-link text-white">
              Quienes Somos
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/desarrollador" className="nav-link text-white">
              Desarrollador
            </Link>
          </li>
          {/* <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown link
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li> */}
        </ul>
      </div>
    </nav>
  );
}
