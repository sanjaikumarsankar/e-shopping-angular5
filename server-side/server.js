var express = require('express');
var bodyParser = require('body-parser');
// var productJson = require('./json/products.json');
var app = express();

var response = {};

var products = {
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
                'imageUrl' : '../../assets/images/home/product1.jpg'
        },{
                'productName': 'Easy Polo Black Edition',
                'price': '$56',
                'imageUrl' : '../../assets/images/home/product2.jpg'
        },{
                'productName': 'Easy Polo Black Edition',
                'price': '$56',
                'imageUrl' : '../../assets/images/home/product3.jpg'
        },{
                'productName': 'Easy Polo Black Edition',
                'price': '$56',
                'imageUrl' : '../../assets/images/home/product4.jpg'
        },{
                'productName': 'Easy Polo Black Edition',
                'price': '$56',
                'imageUrl' : '../../assets/images/home/product5.jpg'
        },{
                'productName': 'Easy Polo Black Edition',
                'price': '$56',
                'imageUrl' : '../../assets/images/home/product6.jpg'
        }]
    }
};
	
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname));


/**
 * products
 */
app.get('/products', function (req, res) {
	res.header("Access-Control-Allow-Origin", "*");
	res.send({ data : products });
});

app.listen(PORT, function () {
  console.log('Server listening on '+PORT);
});