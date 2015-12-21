export default function(server) {
  server.create('car-type', {year: 2012, manufacturer: 'Ford', modelName: 'F150', history: [1, 2, 3, 4, 5]});
  server.createList('car-type', 4);
  server.createList('inventory-history', 5, {car: '1'});
}
