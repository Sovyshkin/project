<script>
import { RouterLink, RouterView } from 'vue-router';
import axios from 'axios';

export default {
    components: {},
    data() {
        return {
            nickname: '',
            email: '',
            password: '',
            error: '',
            status: 0,
        };
    },
    methods: {
        async submit() {
            let error = await axios.post(`/registration`, {
                nickname: this.nickname,
                email: this.email,
                password: this.password
            });
            this.error = error.data.message;
            this.status = error.data.status;
            setTimeout(() => {
                if (this.status == '200') {
                this.$refs.form.reset();
                this.$router.push({name: "login"})
                }
            }, 1000);
            setTimeout(() => {
                (this.error = ``), (this.status = ``);
            }, 3000);
        },
    },
    mounted() {

    }
};
</script>

<template>
<div class="container">
        <div class="image">
            <div class="form-box">
                <div class="form">
                    <form ref="form" @submit.prevent="submit">
                        <h2 class="title">Регистрация</h2>
                        <div class="input-box">
                            <input type="text" v-model="nickname" required id="nickname">
                            <label for="" class="nickname">Никнейм</label>
                        </div>
                        <div class="input-box">
                            <input type="email" v-model="email" required id="email">
                            <label for="" class="email">Почта</label>
                        </div>
                        <div class="input-box">
                            <input type="password" v-model="password" required id="password">
                            <label for="" class="password">Пароль (не менее 8 символов)</label>
                        </div>
                        <div class="group">
                            <RouterLink to="/login" class="node">Перейти к входу</RouterLink>
                        </div>
                        <div class="sign-up">
                            <button class="sign-up-btn" type="submit" id="sign-up">Зарегистрироваться</button>
                        </div>
                        <div class="email_check">
                
                        </div>
                    </form>
                    <!-- <a href="/" class="a-back">Вернуться</a> -->
                </div>
            </div>

        </div>
    </div>
</template>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter&family=Poppins:wght@400;500&display=swap');

*,
*:before,
*:after {
    padding: 0;
    margin: 0;
    font-family: 'Poppins', sans-serif;
    color: #fff;
}

body {
    display: flex;
    /* background: #0c1022; */
    background: #F9F9F9;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    overflow: hidden;
}

.container {
    position: relative;
    width: 350px;
    height: 650px;
    background: rgba(0, 0, 0.75);
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-inline: 32px;
    overflow: hidden;
}

.container::before {
    content: "";
    z-index: 0;
    position: absolute;
    height: 770px;
    width: 770px;
    background: conic-gradient(
        transparent, transparent, transparent, #d400d4
        /* transparent, transparent, transparent, #FF1D15 */
    );
    animation: animate 4s linear infinite;
    animation-delay: -2s;
}
.container::after {
    content: "";
    z-index: 0;
    position: absolute;
    height: 770px;
    width: 770px;
    background: conic-gradient(
        transparent, transparent, transparent, #FF1D15
    );
    /* #00cfff  F18904*/
    animation: animate 4s linear infinite;
}

@keyframes animate {
    0% {
        transform: rotate(0);
    }
    0% {
        transform: rotate(360deg);
    }
}

.image {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 5px;
    /* background-color: #0c1022; */
    background-color: #0f0f0f;
    z-index: 1;
    border-radius: 16px;
}

.image-2 {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 5px;
    /* background-color: #0c1022; */
    background-color: #F9F9F9;
    z-index: 1;
    border-radius: 16px;
}

.form-box {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 60vh;
}



.form-box-2 {
    
    min-height: 60vh;
}

.form-box-2 .form h2 {
    font-size: 32px;
    color: black;
    text-align: center;
}



.form-box .form h2 {
    font-size: 32px;
    /* color: #fff; */
    text-align: center;
}

.form .input-box {
    position: relative;
    margin: 37px 0;
    width: 310px;
    border-bottom: 2px solid black;
}

.input-box input {
    width: 100%;
    height: 50px;
    background: transparent;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 0 35px 0 5px;
    /* color: #fff; */
}
input:focus ~ label,
input:valid ~ label {
    top: -5px;
}

.input-box label {
    position: absolute;
    /* color: #fff; */
    top: 50%;
    left: 5px;
    transform: translateY(-50%);
    font-size: 16px;
    pointer-events: none;
    transition: .3s;
}

.d-none {
    display: none;
}

.group {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
}

.node {
    position: relative;
    top: -15px;
    color: #FF8200;
    background-color: transparent;
    text-decoration: none;
    border: none;
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;
}

.sign-in {
    padding: 7px 9px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #FF8200;
}

.sign-up-btn {
    padding: 12px 15px;
    font-size: 16px;
    font-weight: 600;
    cursor: pointer;
    outline: none;
    border: none;
    border-radius: 5px;
    background-color: #FF8200;
}

.sign-up-btn:focus {
    /* color: #fff; */
    background-color: #0c1022;
    border: 2px solid #fff;
}

.sign-up {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-bottom: 10px;
}

.disabled {
    pointer-events: none;
    opacity: 0.4;
}

.form {
    display: grid;
}

.a-back {
    text-decoration: none;
    color: #FF8200;
    text-align: center;
}                                                                                                                                         

.invalid {
    text-align: center;
    border: 2px solid red;
    color: red;
    padding: 10px;
    border-radius: 10px;
}

.title {
    top: 0;
}
</style>