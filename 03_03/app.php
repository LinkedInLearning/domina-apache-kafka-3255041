<?php
require_once('vendor/autoload.php');

use RdKafka\Producer;
use RdKafka\Conf;

try {
    $configuracion = new Conf();
    $configuracion->set('metadata.broker.list', 'localhost:9092');
    $configuracion->set('retries', 20);
    $configuracion->setErrorCb(function ($kafka, $err, $reason) {
        print("Error con Apache Kafka" . PHP_EOL);
    });
  
    $productor = new Producer($configuracion);  
    $topico = $productor->newTopic('topico_frutas');

    $frutas = ['manzana', 'mango', 'naraja', 'fresa', 'kiwi'];

    foreach ($frutas as $fruta) {
        $topico->produce(0, 0, $fruta);
    }

    $productor->flush(15000);

} catch (Exception $error) {
    echo "Error: " . $error->getMessage() . "\n";
}

?>