import Login from "./../Login/Login";
import "./../Login/login.css";

export default function loginContainer() {
    return (
      <div className="loginContainer">
        <img src="./../../public/anime_wallpaper_login.jpg" className="background"/>
        <Login />
      </div>    
    );
}