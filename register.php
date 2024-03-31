

<!DOCTYPE html>
<html>
  <head>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="topnav">
      <a href="index.html">WILDBLOCKS</a>
      <a href="basket.html">Корзина</a>
      <a href="login.html">Войти</a>
      <a href="address.html">Адреса</a>
      <input type="text" name="poisk" placeholder="Найти на Wildblocks">
    </header>
    <div class="wrapper">
      <form action="">
        <h1>Создать аккаунт</h1>
        <div class="input-box">
          <input type="text" id="name" placeholder="Имя"
          required>
        </div>
        <div class="input-box">
          <input type="text" id="nickname"  placeholder="Никнейм"
          required>
        </div>
        <div class="input-box">
          <input type="password" id="password"  placeholder="Пароль"
          required>
        </div>

        <div class="remember-forgot">
          <label><input type="checkbox">Я соглашаюсь на продажу себя в рабство</label>
        </div>

        <button type="submit" id="submit" class="btn">Создать аккаунт</button>

        <div class="register-link">
          <p>Уже есть аккаунт? <a href="login.html">Войти в аккаунт</a></p>
        </div>
      </form>
    </div>
    <script src="scripts/script.js"></script>
    <script src="scripts/ajax.js"></script>
  </body>
</html>
