<template>
  <div class="signup">
    <div class="signup-container">
      <div class="signup-title"></div>
      <div class="signup-field">
        <form action="" @submit.prevent="checkform">
          <!-- username field -->
          <div class="username-field input-field">
            <input
              :class="{
                error: userSucessMsg === null ? null : !userSucessMsg,
              }"
              type="text"
              placeholder="Username"
              v-model="username"
            />
            <div
              class="error-msg"
              :class="{
                'username-error-msg':
                  userSucessMsg === null ? null : !userSucessMsg,
              }"
            >
              4 to 10 alphnumeric character only
            </div>
          </div>
          <!-- mail filed -->
          <div class="mail-field input-field">
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
              invalid email
            </div>
          </div>
          <!-- password field -->
          <div class="password-field input-field">
            <input
              :class="{
                error: pwdSucessMsg === null ? null : !pwdSucessMsg,
              }"
              type="password"
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
          </div>
          <!-- verify password field -->
          <div class="password-verify-field input-field">
            <input
              :class="{
                error: VpwdSucessMsg === null ? null : !VpwdSucessMsg,
              }"
              type="password"
              placeholder="Verify Password"
              v-model="Vpwd"
            />
            <div
              class="error-msg"
              :class="{
                'vPwd-error-msg':
                  VpwdSucessMsg === null ? null : !VpwdSucessMsg,
              }"
            >
              Password must be of 6 to 12 character
            </div>
          </div>
          <!-- button field -->
          <div class="btn-field input-field">
            <input type="submit" value="Sign Up" />
          </div>
          <div class="other-option input-field">
            <div class="register-link">
              <span>already account?&nbsp;</span
              ><router-link to="/login">login</router-link>
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
  name: "Signup",
  data() {
    return {
      mail: null,
      pwd: null,
      Vpwd: null,
      username: "",
      mailSucessMsg: null,
      pwdSucessMsg: null,
      VpwdSucessMsg: null,
      userSucessMsg: null,
    };
  },
  methods: {
    checkform() {
      this.userSucessMsg = ac.inputStatus(this.username, ac.regexUser);
      this.mailSucessMsg = ac.inputStatus(this.mail, ac.regexMail);
      this.pwdSucessMsg = ac.inputStatus(this.pwd, ac.regexPwd);
      this.VpwdSucessMsg = ac.inputStatus(this.Vpwd, ac.regexPwd);
      if (
        ac.isValid(this.username, ac.regexUser) &&
        ac.isValid(this.pwd, ac.regexPwd) &&
        ac.isValid(this.mail, ac.regexMail) &&
        ac.isValid(this.Vpwd, ac.regexPwd)
      ) {
        if (localStorage.getItem(this.mail) === null) {
          if (this.pwd === this.Vpwd) {
            this.signupStorage();
            this.$router.push("/login");
          } else {
            alert("verify password ");
          }
        } else {
          alert("already registered");
        }
      }
    },

    signupStorage() {
      let userData = JSON.stringify({
        username: this.username,
        mail: this.mail,
        password: this.pwd,
      });

      localStorage.setItem(this.mail, userData);
    },
  },
  beforeRouteLeave(to, from, next) {
    if (from.fullPath === "/login") {
      next();
    }
  },
};
</script>
<style lang="scss">
@import "./src/scss/_main.scss";

.signup {
  width: 100vw;
  height: 90vh;
  padding-top: 7vh;
  background-color: $secondary-color;

  .signup-container {
    @include form-container;
    padding-bottom: 5vh;
    height: auto;
    .signup-title {
      @include form-title;
      height: 5vh;
      line-height: 5vh;
    }
    .signup-field {
      // height: 80vh;
      width: 70%;
      margin: 0 auto;
      form {
        .input-field {
          width: 100%;
          margin-top: 4vh;

          .error-msg {
            font-size: 1.8em;
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
          .username-error-msg {
            display: block;
          }
          .vPwd-error-msg {
            display: block;
          }
        }
        .btn-field {
          margin-top: 5vh;
          input {
            @include btn-style;
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
  .signup {
    // height: 90vh;
    padding-top: 5vh;
    .signup-container {
      width: 90%;
      height: auto;
      padding-bottom: 5vh;

      .signup-title {
        height: 1vh;
        line-height: 1vh;
      }
      .signup-field {
        width: 90%;
        form {
          height: auto;
          .input-field {
            .error-msg {
              font-size: 1.5em;
              color: orange;
              // display: none;
            }
          }
          .btn-field {
            margin-top: 6vh;
            input {
              font-size: 2em;
            }
          }
        }
      }
    }
  }
}
@media (min-width: 600px) and (max-width: 900px) {
  .signup {
    .signup-container {
      width: 70%;
      .signup-field {
        width: 90%;
      }
    }
  }
}
</style>
