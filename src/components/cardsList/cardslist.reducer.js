const INITIAL_STATE = [{
    title: 'Это видео взорвало интернет',
    category: 'video'
},{
    title: 'Эта новость шокировала всех',
    category: 'text'
},{
    title: 'Этот котик не оставит равнодушным',
    category: 'image'
},{
    title: 'Каскадер выполнил что-то невообразимое',
    category: 'video'
},{
    title: 'МОЛНИЯ! Спекулянты взвинтили цены на укроп',
    category: 'text'
},{
    title: 'Каким будет Angular 24? Все нововведения в одной картинке!',
    category: 'image'
}]


export default (cardsState = INITIAL_STATE, action) => {
    const { type } = action;

    switch(type) {
        default:
            return cardsState
    }
}