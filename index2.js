let app = new Vue({
    //el=vue が管理する範囲
    el: '#app',
    //dataの定義
    data: {
        //プロパティ
        messages: ['Hello Vue!', 'hello Vue.js'],
        users: [
            {
                number: 1,
                name: "ty",
                age: 21,
            },
            {
                number: 2,
                name: "airi",
                age: 23,
            }
        ],
        value1: true,
        value2: false,
        input: "type it in",
        url: "http://google.com",
        message: 'You loaded this page on ' + new Date(),
    },
    //method 定義
    methods: {
        alertMessage: function () {
            alert("hello");
        }
    },
});