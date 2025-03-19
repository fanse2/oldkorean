const footer = Vue.createApp({
    data() {
        return {
            title: "미주한인지도자협의회",
            year: 0,
            member: null,
        }
    },
    // methods:{

    // },
    mounted() {
        this.year = new Date().getFullYear()
    },
})
footer.mount('#footer')




const news = Vue.createApp({
    data() {
        return {
            news: null,
        }
    },
    methods:{},
    mounted() {
        fetch('./data.json')
            .then(res => res.json())
            .then(data=> this.news = data)
    },
})
news.mount('#news')