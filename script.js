Vue.config.devtools = true;

new Vue(
    {
        el: "#root",
        data: {
            mailsList: [],
            mailsNum: 10,
        },
        created() {
            this.mailGenerator();
        },
        methods: {
            mailGenerator: function () {
                for (let x = 0; x < this.mailsNum; x++) {
                    axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
                        .then((response) => {
                            this.mailsList.push(response.data.response);
                        });

                }
            }
        }

    });