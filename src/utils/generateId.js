export default function generateId() {
  var chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var id = '';
  for (var i = 0; i < 5; i++) {
      id += chars[Math.floor(Math.random() * chars.length)];
  }
  return id;
}
