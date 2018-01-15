var express = require('express');
var bodyParser = require('body-parser');
var app = express();

var response = {};

//10 employees loaded on page load
var employee = {
    'products': {
		'productList': [{
			'name': 'SPORTSWEAR',
			'submenu': [{
				'name': 'NIKE'
			},{
				'name': 'UNDER ARMOUR'
			},{
				'name': 'ADIDAS'
			},{
				'name': 'PUMA'
			},{
				'name': 'ASICS'
			}]
		},{
			'name': 'MENS',
			'submenu': [{
				'name': 'FENDI'
			},{
				'name': 'GUESS'
			},{
				'name': 'VALENTINO'
			},{
				'name': 'DIOR'
			},{
				'name': 'VERSACE'
			}]
		},{
			'name': 'WOMENS',
			'submenu': [{
				'name': 'FENDI'
			},{
				'name': 'GUESS'
			},{
				'name': 'VALENTINO'
			},{
				'name': 'DIOR'
			},{
				'name': 'VERSACE'
			},{
				'name': 'ARMANI'
			},{
				'name': 'PRADA'
			},{
				'name': 'DOLCE'
			},{
				'name': 'CHACEL'
			}]
		},{
			'name': 'KIDS'
		},{
			'name': 'FASHION'
		},{
			'name': 'HOUSEHOLD'
		},{
			'name': 'INTERIORS'
		},{
			'name': 'CLOTHING'
		},{
			'name': 'BAGS'
		},{
			'name': 'SHOES'
		}],
        'productsDetails': [{
                'productName': 'Easy Polo Black Edition',
                'price': '$56',
                'imageUrl' : '../../assets/images/home/logo.png'
        },{
                'productName': 'Easy Polo Black Edition',
                'price': '$56',
                'imageUrl' : '../../assets/images/home/logo.png'
        },{
                'productName': 'Easy Polo Black Edition',
                'price': '$56',
                'imageUrl' : '../../assets/images/home/logo.png'
        },{
                'productName': 'Easy Polo Black Edition',
                'price': '$56',
                'imageUrl' : '../../assets/images/home/logo.png'
        },{
                'productName': 'Easy Polo Black Edition',
                'price': '$56',
                'imageUrl' : '../../assets/images/home/logo.png'
        },{
                'productName': 'Easy Polo Black Edition',
                'price': '$56',
                'imageUrl' : '../../assets/images/home/logo.png'
        }]
    }
};
	
var userAttempt = 0;
	
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));


/**
 * ToDoList
 */
app.get('/products', function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.send({ data : employee });
});

app.listen(PORT, function () {
  console.log('Server listening on '+PORT);
});