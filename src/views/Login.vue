<template>
  <div class="login">
    <div class="login-container">
      <div class="login-title"></div>
      <div class="login-field">
        <form action="" @submit.prevent="checkForm">
          <div class="mail-field input-field">
            <!-- mail-field -->
            <input
              :class="{
                error: mailSucessMsg === null ? null : !mailSucessMsg,
              }"
              type="mail"
              placeholder="E-mail"
              v-model="mail"
            />
            <div
              class="error-msg"
              :class="{
                'mail-error-msg':
                  mailSucessMsg === null ? null : !mailSucessMsg,
              }"
            >
              Please enter valid mail
            </div>
          </div>
          <!-- password field -->
          <div class="input-field password-field">
            <input
              :class="{
                error: pwdSucessMsg === null ? null : !pwdSucessMsg,
              }"
              :type="passwordStatus"
              placeholder="Password"
              v-model="pwd"
            />
            <div
              class="error-msg"
              :class="{
                'pwd-error-msg': pwdSucessMsg === null ? null : !pwdSucessMsg,
              }"
            >
              Password must be of 6 to 20 character
            </div>
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
          s
          <!-- button field -->
          <div class="input-field btn-field">
            <input type="submit" value="Sign In" />
            <div class="forgot-pwd"><a href="">forgot password?</a></div>
          </div>
          <div class="input-field other-option">
            <div class="register-link">
              <span>new?&nbsp;</span>
              <router-link to="/register">register</router-link>
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

      if (
        ac.isValid(this.mail, ac.regexMail) &&
        ac.isValid(this.pwd, ac.regexPwd)
      ) {
        if (this.isCheckUser(this.mail, this.pwd)) {
          this.$router.push("/welcome");
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
  beforeRouteLeave(to, from, next) {
    if (from.fullPath === "/login") {
      next();
    }
    if (from.fullPath === "/welcome") {
      next();
    }
  },
};
</script>
<style lang="scss" scoped>
@import "./src/scss/_main.scss";

.login {
  width: 100vw;
  height: 90vh;
  padding-top: 5vh;
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
      form {
        .input-field {
          width: 100%;
          margin-top: 4vh;

          .error-msg {
            font-size: 1.7em;
            color: orange;
            display: none;
          }
          input {
            @include input-style;
          }
          input::placeholder {
            @include placeholder-style;
          }
          .error {
            border-bottom: 3px solid orange;
          }
          .mail-error-msg {
            display: block;
          }
          .pwd-error-msg {
            display: block;
          }
        }
        .password-field {
          .show-password {
            margin-top: 1vh;
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
}
@media (max-width: 600px) {
  .login {
    padding-top: 2vh;
    .login-container {
      width: 90%;
      .login-title {
        line-height: 5vh;
        height: 5vh;
      }
      .login-field {
        width: 90%;
        form {
          .password-field {
            .show-password {
              font-size: 1.7em;
            }
          }
          .btn-field {
            input {
              font-size: 2em;
            }
            .forgot-pwd {
              font-size: 1.7em;
            }
          }
        }
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
