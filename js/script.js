console.log('Vue OK', Vue);


const app = Vue.createApp({
    data() {
        return {
            message: 'anno 2023!',
            textColor: 'text-danger',
            imageYear: {
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-qmVHMZjHVWVoPVOhXK_ti3RqE1xrrYJ_P4s3NbcbClhzvbXvl0pHBV7x63Wb9YTT6IQ&usqp=CAU',
                name: 'author',
            },
        }
    }    
});


app.mount('#root');