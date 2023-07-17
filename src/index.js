const path = require('path')
const express = require('express')
const morgan = require('morgan')
const handlebars = require('express-handlebars')
const app = express()
const port = 3000


app.use(express.static(path.join(__dirname, 'public')));
//HTTP Logger
app.use(morgan('combined'))
//template Engine
app.engine('hbs', handlebars.engine({defaultLayout: 'main', extname: 'hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'resources/views'));

app.get('/Home', function (req, res) {
  res.render('home',  {layout: 'Client_Layout.hbs'});
})

app.get('/AccountUpdate', function (req, res) {
  res.render('AccountUpdate', {layout: 'Librarian_Layout.hbs'});
})

app.get('/AccountUpdateLibrarian', function (req, res) {
  res.render('AccountUpdateLibrarian', {layout: 'Librarian_Layout.hbs'});
})

app.get('/Add_book_librarian', function (req, res) {
  res.render('Add_book_librarian', {layout: 'Librarian_Layout.hbs'});
})

app.get('/Add_book_admin', function (req, res) {
  res.render('Add_book_admin', {layout: 'Admin_Layout.hbs'});
})
app.get('/AdminChangePassword', function (req, res) {
  res.render('AdminChangePassword', {layout: 'Admin_Layout.hbs'});
})
app.get('/AdminChangePassWordLibrarian', function (req, res) {
  res.render('AdminChangePassWordLibrarian', {layout: 'Admin_Layout.hbs'});
})

app.get('/AdminChangePasswordUser', function (req, res) {
  res.render('AdminChangePasswordUser', {layout: 'Admin_Layout.hbs'});
})

app.get('/AdminAccountUpdate', function (req, res) {
  res.render('AdminAccountUpdate', {layout: 'Admin_Layout.hbs'});
})

app.get('/AdminAccountUpdateLibrarian', function (req, res) {
  res.render('AdminAccountUpdateLibrarian', {layout: 'Admin_Layout.hbs'});
})

app.get('/UpdateBookAdmin', function (req, res) {
  res.render('UpdateBookAdmin', {layout: 'Admin_Layout.hbs'});
})

app.get('/AdminViewBook', function (req, res) {
  res.render('AdminViewBook', {layout: 'Admin_Layout.hbs'});
})

app.get('/AdminViewBookInfor', function (req, res) {
  res.render('AdminViewBookInfor', {layout: 'Admin_Layout.hbs'});
})

app.get('/AdminViewClient', function (req, res) {
  res.render('AdminViewClient', {layout: 'Admin_Layout.hbs'});
})

app.get('/AdminViewClientProfile', function (req, res) {
  res.render('AdminViewClientProfile', {layout: 'Admin_Layout.hbs'});
})

app.get('/AdminViewLibrarian', function (req, res) {
  res.render('AdminViewLibrarian', {layout: 'Admin_Layout.hbs'});
})
app.get('/AdminViewProfileLibrarian', function (req, res) {
  res.render('AdminViewProfileLibrarian', {layout: 'Admin_Layout.hbs'});
})

app.get('/AdminViewAdminProfile', function (req, res) {
  res.render('AdminViewAdminProfile', {layout: 'Admin_Layout.hbs'});
})


app.get('/ChangePassWordLibrarian', function (req, res) {
  res.render('ChangePassWordLibrarian', {layout: 'Admin_Layout.hbs'});
})
app.get('/ChangePasswordUser', function (req, res) {
  res.render('ChangePasswordUser', {layout: 'Admin_Layout.hbs'});
})


app.get('/ChooseBook', function (req, res) {
  res.render('ChooseBook', {layout: 'Client_Layout.hbs'});
})

app.get('/DashboardLibrarian', function (req, res) {
  res.render('DashboardLibrarian', {layout: 'Librarian_Layout.hbs'});
})

app.get('/History', function (req, res) {
  res.render('History', {layout: 'Client_Layout.hbs'});
})

app.get('/LibrarianViewHistoryClient', function (req, res) {
  res.render('LibrarianViewHistoryClient', {layout: 'Librarian_Layout.hbs'});
})

app.get('/MyInterestingBook', function (req, res) {
  res.render('MyInterestingBook', {layout: 'Client_Layout.hbs'});
})
app.get('/Payment', function (req, res) {
  res.render('Payment', {layout: 'Client_Layout.hbs'});
})

app.get('/Statistic_Admin', function (req, res) {
  res.render('Statistic_Admin', {layout: 'Admin_Layout.hbs'});
})

app.get('/UpdateBookLibrarian', function (req, res) {
  res.render('UpdateBookLibrarian', {layout: 'Librarian_Layout.hbs'});
})

app.get('/ViewBookInforLibrarian', function (req, res) {
  res.render('ViewBookInforLibrarian', {layout: 'Librarian_Layout.hbs'});
})

app.get('/ViewBookLibrarian', function (req, res) {
  res.render('ViewBookLibrarian',{layout: 'Librarian_Layout.hbs'});
})

app.get('/ViewClient', function (req, res) {
  res.render('ViewClient', {layout: 'Librarian_Layout.hbs'});
})

app.get('/ViewProfile', function (req, res) {
  res.render('ViewProfile', {layout: 'Client_Layout.hbs'});
})

app.get('/ViewProfileLibrarian', function (req, res) {
  res.render('ViewProfileLibrarian', {layout: 'Librarian_Layout.hbs'});
})


//-----------------------------
app.get('/Login', function (req, res) {
  res.render('Login',{layout: 'Login_Layout.hbs'});
})
app.get('/Register', function (req, res) {
  res.render('Register', {layout: 'Login_Layout.hbs'});
})
//----------------------

// app.get('/', function (req, res) {
//   res.render('home', {layout: 'Client_Layout.hbs'});
// })




app.listen(port,()=> {console.log(`connect web with port ${port}`)})