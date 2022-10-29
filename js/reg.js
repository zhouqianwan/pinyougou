document.addEventListener('DOMContentLoaded', function() {
    var phone = document.querySelector('#phone');
    var regphone = /^1[5|7|8]\d{9}$/;
    var message = document.querySelector("#message");
    var regmessage = /^\d{6}$/;
    var password = document.querySelector("#password");
    var regpassword = /^[\w -]{6,9}$/;
    var repassword = document.querySelector("#repassword");

    function fn(ele, reg) {
        ele.onfocus = function() {
            this.nextElementSibling.innerHTML = '';
        }
        ele.onblur = function() {
            if (reg.test(ele.value)) {
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="right_icon"></i>手机格式正确';
            } else {
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class="error_icon"></i>手机格式不正确，请重新输入';
            }
            console.log(ele.flag);
        }
    }
    // 验证手机号
    fn(phone, regphone)
        // 验证短信
    fn(message, regmessage)
        // 验证密码
    fn(password, regpassword)
        // 验证重复密码是否正确
    repassword.onfocus = function() {
        this.nextElementSibling.innerHTML = '';
    }
    repassword.onblur = function() {
        if (password.value == repassword.value) {
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="right_icon"></i>手机格式正确';
        } else {
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>手机格式不正确，请重新输入';
        }
    }
})