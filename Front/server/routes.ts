const routes = require('next-routes')

const route = routes();
// Name   Page      Pattern
module.exports = route
    .add({name: 'index', pattern: '/', page: 'dashboard/index'})
    .add("register", "/register")
    .add("login", "/login")
    .add({name: 'dashboard', pattern: '/dashboard', page: 'dashboard/index'})
    .add({name: 'dashboardPublish', pattern: '/dashboard/publish', page: 'dashboard/publish'})
    .add({name: 'dashboardArticles', pattern: '/dashboard/articles', page: 'dashboard/articles'})
    .add({name: 'dashboardPromotions', pattern: '/dashboard/promotions', page: 'dashboard/promotions'})
    .add({name: 'dashboardOffers', pattern: '/dashboard/offers', page: 'dashboard/offers'})
    .add({name: 'dashboardPublishPromotion', pattern: '/dashboard/promotions/publish', page: 'dashboard/publishPromotion'})
    .add({name: 'dashboardPublishOffer', pattern: '/dashboard/offers/publish', page: 'dashboard/publishOffer'})
