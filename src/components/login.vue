<template>
    <div class="login_container">
        <div class="login_box">
            <div class="avatar_box">
                <img src="../assets/logo.png" alt="login">
            </div>
            <el-form ref="loginFormRef" label-width="0" class="login_form" :model="loginForm" :rules="loginFormRules">
                <!-- 用户名 -->
                <el-form-item prop="username">
                    <el-input prefix-icon="el-icon-user-solid" v-model="loginForm.username"></el-input>
                </el-form-item>
                <!-- 密码 -->
                <el-form-item prop="password">
                    <el-input prefix-icon="el-icon-lock" v-model="loginForm.password" type="password"></el-input>
                </el-form-item>
                <!-- 按钮 -->
                <el-form-item class="btns">
                    <el-button type="primary" @click="login">登录</el-button>
                    <el-button type="info" @click="resetLoginForm">重置</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {
                loginForm: {
                    id: 1,
                    username: '',
                    password: ''
                },
                // 表单验证规则对象
                loginFormRules: {
                    username: [
                        {
                            required: true, message: '请输入用户名', trigger: 'blur'
                        },
                        {
                            min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur'
                        }
                    ],
                    password: [
                        {
                            required: true, message: '请输入登录密码', trigger: 'blur'
                        },
                        {
                            min: 5, max: 15, message: '长度在 5 到 15 个字符', trigger: 'blur'
                        }
                    ]
                }
            }
        },
        methods: {
            // 重置表单
            resetLoginForm () {
                this.$refs.loginFormRef.resetFields()
            },
            login () {
                this.$refs.loginFormRef.validate(async validate => {
                    if (!validate) return
                    const { data: res } = await this.$http.post('/api/login', this.loginForm)
                    console.log(res)
                    this.$message.success('登录成功')
                    window.sessionStorage.setItem('user', res)
                    window.sessionStorage.setItem('token', res.token) // 保存token
                    this.$router.push('/home')// 编程式导航
                })
            }
        }
    }
</script>

<style scoped>
    .login_container{
        background: #2b4b6b;height: 100%;
    }
    .login_box{
        width: 450px;
        height: 300px;
        background: #ffffff;
        border-radius: 3px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }
    .avatar_box{
        height: 130px;
        width: 130px;
        border: 1px solid #eee;
        border-radius: 50%;
        padding: 10px;
        box-shadow: 0 0 10px #ddd;
        position: absolute;
        left: 50%;
        transform: translate(-50%,-50%);
        background: #fff;
    }
    .avatar_box img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        background: #eee;
    }
    .btns{
        display: flex;
        justify-content: center;
    }
    .login_form{
        position: absolute;
        bottom: 0;
        width: 100%;
        padding: 0 20px;
        box-sizing: border-box;
    }
</style>
