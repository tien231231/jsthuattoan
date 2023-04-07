//5
/**
 *
 * @param {*} collection
 * @param {*} field
 * @returns
 */
function groupBy(collection, field) {
  const result = {};

  collection.forEach(item => {
    const value = item[field];
    if (result[value]) {
      // Nếu đã tồn tại key trong object result, thêm object vào array tương ứng
      result[value].push(item);
    } else {
      // Nếu chưa tồn tại key trong object result, tạo mới array và thêm object vào array đó
      result[value] = [item];
    }
  });

  return result;
}
module.exports = groupBy