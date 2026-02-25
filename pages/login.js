export default function Login() {
    return`<form action="/login" method="post">
  <input type = "text" name = "username" placeholder = "Enter username"/>
  <input type = "password" name = "password" placeholder = "Enter password"/>
  <input type="submit" value="Login"/>
  <a href="/register">Register</a>
</form>
    `
}