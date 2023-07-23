export default function chunkAry(array, size) {
  var chunks = [];
  for (var i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
  }
  return chunks;
}
