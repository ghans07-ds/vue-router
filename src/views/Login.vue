<template>
  <div class="login">
    <div class="login-container">
      <div class="login-title"></div>
      <div class="login-field">
        <form action="" @submit.prevent="checkForm">
          <div class="mail-field">
            <input
              :class="{
                sucess: mailSucessMsg,
                error: mailSucessMsg === null ? null : !mailSucessMsg,
              }"
              type="mail"
              placeholder="E-mail"
              v-model="mail"
            />
          </div>
          <div class="password-field">
            <input
              :class="{
                sucess: pwdSucessMsg,
                error: pwdSucessMsg === null ? null : !pwdSucessMsg,
              }"
              :type="passwordStatus"
              placeholder="Password"
              v-model="pwd"
            />
            <div class="show-password">
              <input
                @click="showPassword"
                type="checkbox"
                id="show-pwd"
                name="show-pwd"
              />
              <label for="show-pwd">Show Password</label>
            </div>
          </div>
          <div class="btn-field">
            <input type="submit" value="Login" />
            <div class="forgot-pwd"><a href="">forgot password?</a></div>
          </div>
          <div class="other-option">
            <div class="register-link">
              <span>new?&nbsp;</span><a href="">create Account</a>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import * as ac from "../js/account.js";
export default {
  name: "Login",
  data() {
    return {
      mail: null,
      pwd: null,
      mailSucessMsg: null,
      pwdSucessMsg: null,
      passwordStatus: "password",
    };
  },
  methods: {
    showPassword() {
      if (this.passwordStatus === "password") {
        this.passwordStatus = "text";
      } else {
        this.passwordStatus = "password";
      }
    },
    checkForm() {
      this.mailSucessMsg = ac.inputStatus(this.mail, ac.regexMail);
      this.pwdSucessMsg = ac.inputStatus(this.pwd, ac.regexPwd);
      console.log("hey", ac.regexMail, this.mail);

      if (
        ac.isValid(this.mail, ac.regexMail) &&
        ac.isValid(this.pwd, ac.regexPwd)
      ) {
        if (this.isCheckUser(this.mail, this.pwd)) {
          alert("sucessfully logined");
        } else {
          alert("please create account");
        }
      }
    },
    isCheckUser(emailVal, pwdVal) {
      let user = JSON.parse(localStorage.getItem(emailVal));
      if (user !== undefined && pwdVal === user.password) {
        return 1;
      } else {
        return 0;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./src/scss/_main.scss";

.login {
  width: 100vw;
  height: 90vh;
  padding: 5vh 0;
  background-color: $secondary-color;

  .login-container {
    @include form-container;
    .login-title {
      @include form-title;
      line-height: 10vh;
      height: 10vh;
    }
    .login-field {
      width: 70%;
      margin: 0 auto;
      form div {
        width: 100%;
        margin-top: 4vh;
        input {
          @include input-style;
        }
        input::placeholder {
          @include placeholder-style;
        }
        .error {
          border: 2px solid red;
        }
        .sucess {
          border: 2px solid green;
        }
      }
      .password-field {
        .show-password {
          margin-top: 0;
          color: white;
          font-size: $secondary-font-size;

          input {
            width: 5%;
          }
        }
      }
      .btn-field {
        margin-top: 10vh;
        input {
          @include btn-style;
        }
        .forgot-pwd {
          margin-top: 0;
          font-size: $secondary-font-size;

          a {
            text-decoration: none;
            color: white;
          }
          a:hover {
            border-bottom: 1px solid white;
          }
        }
      }
      .other-option .register-link {
        color: white;
        text-align: center;
        font-size: $secondary-font-size;

        a {
          text-decoration: none;
          color: $primary-color;
        }
        a:hover {
          border-bottom: 1px solid white;
        }
      }
    }
  }
}
@media (max-width: 600px) {
  .login {
    .login-container {
      width: 90%;
      .login-field {
        width: 90%;
      }
    }
  }
}
@media (min-width: 600px) and (max-width: 900px) {
  .login {
    .login-container {
      width: 70%;
      .login-field {
        width: 90%;
      }
    }
  }
}
</style>
