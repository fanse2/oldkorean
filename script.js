const footer = Vue.createApp({
    data() {
        return {
            title: "미주한인지도자협의회",
            year: 0,
            member: null,
        }
    },
    mounted() {
        this.year = new Date().getFullYear()
    },
})
footer.mount('#footer')

const news = Vue.createApp({
    data() {
        return {
            news: null,
            expandedIndex: 0, // Set the first news card to be expanded by default
        }
    },
    methods: {
        toggleExpand(index) {
            // Toggle the expanded state for the clicked news card
            this.expandedIndex = this.expandedIndex === index ? null : index;
        },
    },
    mounted() {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => this.news = data)
    },
})
news.mount('#news')