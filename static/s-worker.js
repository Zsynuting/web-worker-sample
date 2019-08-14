let counter = 0;

onconnect = function (e) {
  var port = e.ports[0];

  port.onmessage = function (e) {
    counter++;
    var workerResult = `This is the ${counter} times being called`;
    workerResult += 'Result: ' + (e.data[0] * e.data[1]);
    port.postMessage(workerResult);
  }

}