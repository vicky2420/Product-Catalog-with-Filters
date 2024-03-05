var app = angular.module('productCatalogApp', []);

app.controller('ProductCatalogController', function($scope) {
    // Sample product data
    $scope.products = [
        { name: 'Product 1', category: 'Electronics', features: ['Wireless', 'Bluetooth'], price: 199.99 },
        { name: 'Product 2', category: 'Clothing', features: ['Cotton', 'Casual'], price: 29.99 },
        { name: 'Product 3', category: 'Electronics', features: ['Wired', 'Noise Cancelling'], price: 149.99 },
        { name: 'Product 4', category: 'Home', features: ['Organic', 'Handmade'], price: 49.99 },
        // Add more products as needed
    ];

    // Get unique categories and features
    $scope.categories = ['All'].concat([...new Set($scope.products.map(product => product.category))]);
    $scope.features = ['All'].concat([...new Set($scope.products.flatMap(product => product.features))]);

    // Initial filter values
    $scope.selectedCategory = '';
    $scope.selectedFeature = '';

    // Apply filters
    $scope.$watchGroup(['selectedCategory', 'selectedFeature'], function() {
        $scope.filteredProducts = $scope.products.filter(function(product) {
            return ($scope.selectedCategory === '' || product.category === $scope.selectedCategory) &&
                   ($scope.selectedFeature === '' || product.features.includes($scope.selectedFeature));
        });
    });
});
