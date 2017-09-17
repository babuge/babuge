module.exports =function(app) {
    /* GET home page. */
    app.get('/', function(req, res, next) {
      var showuser='true';
      res.render('index', { title: '八部阁' ,showuser:showuser});
    });
    // get rhino page
    app.get('/Rhino', function (req, res) {
      var showuser='false';
      // req.query.navNum
      res.render("nav/navRhino",{title:"犀牛模型",showuser:showuser});
    
    });
    // get 3dMax page
    app.get('/3dMax', function (req, res) {
      var showuser='false';
      // req.query.navNum
      res.render("nav/nav3dMax",{title:"3dMax模型",showuser:showuser});   
    });
    // get WebGL2 page
    app.get('/WebGL2', function (req, res) {
      var showuser='false';
      // req.query.navNum
      res.render("nav/navWebGL2",{title:"WebGL2演示",showuser:showuser});   
    });
    // get Maya page
    app.get('/Maya', function (req, res) {
      var showuser='false';
      // req.query.navNum
      res.render("nav/navMaya",{title:"Maya模型",showuser:showuser});   
    });
    // get photoshop page
    app.get('/Photoshop', function (req, res) {
      var showuser='false';
      // req.query.navNum
      res.render("nav/navPhotoshop",{title:"Photoshop",showuser:showuser});   
    });
    // get test page
    app.get('/test', function (req, res) {
      var showuser='false';
      // req.query.navNum
      res.render("test",{title:"test",showuser:showuser});   
    });
  }
