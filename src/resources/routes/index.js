const bookingRouter = require('./booking.route')
const tourRouter = require('./tour.route')
const customerRouter = require('./customer.route')
const typeTourRouter = require('./typeTour.route')
const vehicleRouter = require('./vehicle.route')
const tourGuideRouter = require('./tourGuide.route')
const scheduleTourRoute = require('./scheduletour.route')
const calendarTourRoute = require('./calendartour.route')
const authRoute =  require('./auth.route')
function route(app){
    app.use('/calendartour',calendarTourRoute)
    app.use('/scheduletours',scheduleTourRoute)
    app.use('/bookings',bookingRouter)
    
    app.use('/vehicles',vehicleRouter)

    app.use('/tourguide',tourGuideRouter)

    app.use('/typetours', typeTourRouter)

    app.use('/tours', tourRouter)
    app.use('/customers', customerRouter)
    app.use('/auth',authRoute)
   
}


module.exports = route
