<template>
  <div class="signup">
    <div class="signup-container">
      <div class="signup-title"></div>
      <div class="signup-field">
        <form action="" @submit.prevent="checkform">
          <div class="username-field">
            <input
              :class="{
                sucess: UserSucessMsg,
                error: UserSucessMsg === null ? null : !UserSucessMsg,
              }"
              type="text"
              placeholder="Username"
              v-model="username"
            />
          </div>
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
              type="password"
              placeholder="Password"
              v-model="pwd"
            />
          </div>
          <div class="password-verify-field">
            <input
              :class="{
                sucess: VpwdSucessMsg,
                error: VpwdSucessMsg === null ? null : !VpwdSucessMsg,
              }"
              type="password"
              placeholder="Verify Password"
              v-model="Vpwd"
            />
          </div>
          <div class="btn-field">
            <input type="submit" value="SignUp" />
          </div>
          <div class="other-option">
            <div class="register-link">
              <span>already account?&nbsp;</span><a href="">join</a>
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
      username: null,
      mailSucessMsg: null,
      pwdSucessMsg: null,
      VpwdSucessMsg: null,
      UserSucessMsg: null,
    };
  },
  methods: {
    checkform() {
      this.UserSucessMsg = ac.inputStatus(this.username, ac.regexUser);
      this.mailSucessMsg = ac.inputStatus(this.mail, ac.regexMail);
      this.pwdSucessMsg = ac.inputStatus(this.pwd, ac.regexPwd);
      this.VpwdSucessMsg = ac.inputStatus(this.Vpwd, ac.regexPwd);
      console.log(localStorage.getItem("ghans07"));
      if (
        ac.isValid(this.username, ac.regexUser) &&
        ac.isValid(this.pwd, ac.regexPwd) &&
        ac.isValid(this.mail, ac.regexMail) &&
        ac.isValid(this.Vpwd, ac.regexPwd)
      ) {
        if (localStorage.getItem(this.mail) === null) {
          if (
            ac.isValid(this.pwd, ac.regexPwd) ===
            ac.isValid(this.Vpwd, ac.regexPwd)
          ) {
            this.signupStorage();
            alert("sucessfully registered");
          } else {
            alert("password is incorrect");
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
};
</script>
<style lang="scss">
@import "./src/scss/_main.scss";

.signup {
  width: 100vw;
  height: 90vh;
  padding: 5vh 0;
  background-color: $secondary-color;

  .signup-container {
    @include form-container;
    .signup-title {
      @include form-title;
      height: 5vh;
      line-height: 5vh;
    }
    .signup-field {
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
      .btn-field {
        margin-top: 10vh;
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
@media (max-width: 600px) {
  .signup {
    .signup-container {
      width: 90%;
      .signup-field {
        width: 90%;
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
